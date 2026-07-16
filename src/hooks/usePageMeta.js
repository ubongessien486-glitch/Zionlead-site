import { useEffect } from 'react';

/**
 * Sets the document <title> and meta description for the current page.
 * Falls back gracefully if the meta tag doesn't exist yet.
 */
export default function usePageMeta(title, description) {
    useEffect(() => {
        // Title
        document.title = title ? `${title} | Zionlead` : 'Zionlead | Perfecting IT Innovation';

        // Meta description
        if (description) {
            let tag = document.querySelector('meta[name="description"]');
            if (!tag) {
                tag = document.createElement('meta');
                tag.name = 'description';
                document.head.appendChild(tag);
            }
            tag.content = description;
        }

        // OG title
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.content = title ? `${title} | Zionlead` : 'Zionlead | Perfecting IT Innovation';
    }, [title, description]);
}
