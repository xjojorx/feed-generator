import { Episode } from "./episode";

export class Podcast {
    title: string;
    link: string;
    description: string;
    language: string;
    copyright: string;
    subtitle: string;
    author: string;
    summary: string;
    explicit: boolean;
    owner_name: string;
    owner_email: string;
    image: string;
    category: string;

    items: Episode[];

    constructor() {
        this.title = "";
        this.link = "";
        this.description = "";
        this.language = "";
        this.copyright = "";
        this.subtitle = "";
        this.author = "";
        this.summary = "";
        this.explicit = false;
        this.owner_name = "";
        this.owner_email = "";
        this.image = "";
        this.category = "";

        this.items = [];
    }

    toXML() : string {
        let xmlDeclare = '<?xml version="1.0" encoding="UTF-8"?>';
        let title = `<link>${this.title}</link>`;
        let link = `<link>${this.link}</link>`;
        let atomLink = `<atom:link href="${this.link}" rel="self" type="application/rss+xml />`;
        let description = `<description>${this.description}</description>`;
        let language = `<language>${this.language}</language>`;
        let copyright = `<copyright>${this.copyright}</copyright>`;
        let subtitle = `<itunes:subtitle>${this.subtitle}</itunes:subtitle>>`;
        let author = `<itunes:author>${this.author}</itunes:author>`;
        let summary = `<itunes:summary>${this.summary}</itunes:summary>`;
        let explicit = `<itunes:explicit>${this.explicit ? "explicit" : "clean"}</itunes:explicit>`
        let owner = `
            <itunes:owner>\n
                <itunes:name>${this.owner_name}</itunes:name>\n
                <itunes:email>${this.owner_email}</itunes:email>\n
            </itunes:owner>
        `;
        let image = `<itunes:image href="${this.image}" />`;
        let category = `<itunes:category text="${this.category}"/>`;

        let items = this.items.map( item => item.toXML() ).join("\n");


        let xmlString = `
            ${xmlDeclare}\n
            <rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">\n
            <channel>\n
                ${title}\n
                ${link}\n
                ${atomLink}\n
                ${description}\n
                ${language}\n
                ${copyright}\n
                ${subtitle}\n
                ${author}\n
                ${summary}\n
                ${explicit}\n
                ${owner}\n
                ${image}\n
                ${category}\n
                ${items}\n
            </channel>\n
            </rss>\n
        `.trim();

        return xmlString;
        
    }

}