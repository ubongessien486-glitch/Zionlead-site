import React, { useEffect, useRef } from 'react';

/**
 * AnimatedNetwork — Canvas-based animated node-and-line network,
 * matching the teal/cyan/green constellation aesthetic from the reference image.
 */
export default function AnimatedNetwork({
    className = '',
    nodeCount = 60,
    nodeColor = '#06b6d4',
    lineColor = 'rgba(6,182,212,0.15)',
    accentColor = '#10b981',
    speed = 0.4,
    connectionDistance = 150,
}) {
    const canvasRef = useRef(null);
    const animRef = useRef(null);
    const nodesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Initialise nodes
        nodesRef.current = Array.from({ length: nodeCount }, (_, i) => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * speed,
            vy: (Math.random() - 0.5) * speed,
            r: Math.random() * 2.5 + 1,
            // Alternate node colors cyan vs green for visual interest
            color: i % 5 === 0 ? accentColor : nodeColor,
            pulse: Math.random() * Math.PI * 2,
        }));

        const draw = () => {
            const w = canvas.width;
            const h = canvas.height;
            ctx.clearRect(0, 0, w, h);

            const nodes = nodesRef.current;

            // Update positions
            nodes.forEach((node) => {
                node.x += node.vx;
                node.y += node.vy;
                node.pulse += 0.02;
                if (node.x < 0 || node.x > w) node.vx *= -1;
                if (node.y < 0 || node.y > h) node.vy *= -1;
            });

            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < connectionDistance) {
                        const alpha = (1 - dist / connectionDistance) * 0.5;
                        ctx.beginPath();
                        ctx.strokeStyle = lineColor.replace('0.15', String(alpha));
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            nodes.forEach((node) => {
                const pulsedR = node.r + Math.sin(node.pulse) * 0.5;

                // Outer glow ring
                const grd = ctx.createRadialGradient(
                    node.x, node.y, 0,
                    node.x, node.y, pulsedR * 4
                );
                grd.addColorStop(0, node.color + '66');
                grd.addColorStop(1, node.color + '00');
                ctx.beginPath();
                ctx.arc(node.x, node.y, pulsedR * 4, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();

                // Core dot
                ctx.beginPath();
                ctx.arc(node.x, node.y, pulsedR, 0, Math.PI * 2);
                ctx.fillStyle = node.color;
                ctx.shadowBlur = 8;
                ctx.shadowColor = node.color;
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            animRef.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animRef.current);
        };
    }, [nodeCount, nodeColor, lineColor, accentColor, speed, connectionDistance]);

    return (
        <canvas
            ref={canvasRef}
            className={`w-full h-full ${className}`}
            style={{ display: 'block' }}
        />
    );
}
