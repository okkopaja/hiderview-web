/**
 * Central config for all social-media / contact links.
 * Change values here — the whole site updates automatically.
 */

export const SOCIALS = {
    instagram: {
        /** Full URL to the Instagram profile page */
        url: "https://www.instagram.com/hiderview",
        label: "Instagram",
    },

    telegram: {
        /** Username WITHOUT the leading "@" */
        username: "hideview",
        /** Universal link that opens the Telegram app (desktop / mobile) or web client */
        get url() {
            return `https://t.me/${this.username}`;
        },
        label: "Telegram",
    },

    whatsapp: {
        /** Full international number WITHOUT "+" (WhatsApp API requirement) */
        number: "919007404054",
        /** Formatted display string */
        display: "+91 9007404054",
        /** Universal "click-to-chat" link — works on mobile apps, desktop app & web */
        get url() {
            return `https://wa.me/${this.number}`;
        },
        label: "WhatsApp",
    },
} as const;
