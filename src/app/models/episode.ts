export class Episode {
    title: string;
    author: string;
    explicit: boolean;
    subtitle: string;
    summary: string;
    image: string;
    url: string;
    byteLength: number;
    type: string;
    pubDate: Date;
    duration: string;

    toXML() : string {
        let xmlString = `
            <item>\n
                <title>${this.title}</title>\n
                <itunes:author>${this.author}</itunes:author>\n
                <itunes:explicit>${this.explicit ? "explicit" : "clean"}</itunes:explicit>\n
                <itunes:subtitle>${this.subtitle}</itunes:subtitle>\n
                <itunes:summary>\n
                    ${this.summary}\n
                </itunes:summary>\n
                <itunes:image href="${this.image}" />\n
                <enclosure url="${this.url}" length="${this.byteLength}" type="${this.type}"/>\n
                <guid>${this.url}</guid>\n
                <pubDate>${this.pubDate}</pubDate>\n
                <itunes:duration>${this.duration}</itunes:duration>\n
            </item>\n
        `.trim();


        return xmlString;
        
    }

    setFromXMLItem(XMLItem : any) {
        this.title = XMLItem.title[0];
        this.author = XMLItem["itunes:author"][0];
        this.explicit = XMLItem["itunes:explicit"][0];
        this.subtitle = XMLItem["itunes:subtitle"][0];
        this.summary = XMLItem["itunes:summary"][0];
        this.image = XMLItem["itunes:image"][0]['$'].href;
        this.url = XMLItem.enclosure[0]['$'].url;
        this.byteLength = XMLItem.enclosure[0]['$'].length;
        this.type = XMLItem.enclosure[0]['$'].type;
        this.pubDate = XMLItem.pubDate[0];
        this.duration = XMLItem["itunes:duration"].duration;
    }

}
