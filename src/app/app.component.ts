import { Component } from '@angular/core';
import { Podcast } from "./models/podcast";
import { FeedService} from "./feed.service";
import { parseString } from 'xml2js';
import { Episode } from './models/episode';

var navigator: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FeedGenerator';
  feedXMLStr: String;
  podcast: Podcast;
  feedURL: string;
  items: string[];

  constructor(private feedService: FeedService) {  }

  ngOnInit() {
    this.podcast = new Podcast();
    this.items = ["asd", "asd"];
    
  };

  onClickGetFeed(): void {
    this.getFeed();
  }

  getFeed(): void {
    this.feedService.getFeed(this.feedURL).subscribe(xmlString => this.setPodcastFromFeed(xmlString));
  }

  setPodcastFromFeed(xmlString: string) {
    console.log(xmlString);
    this.podcast = this.mapFeed(xmlString);
  }

  mapFeed(xmlString : string): Podcast {
    let podcast = new Podcast()
    
    parseString(xmlString, (err, res) => {
      let channel = res.rss.channel[0];
      
      
      podcast.title = channel.title;
      podcast.link = channel.link;
      podcast.description = channel.description[0];
      podcast.language = channel.language[0];
      podcast.copyright = channel.copyright;
      podcast.subtitle = channel["itunes:subtitle"];
      podcast.author = channel["itunes:author"];
      podcast.summary = channel["itunes:summary"];
      let explicitStr = channel["itunes:explicit"][0];
      podcast.explicit = [ "clean", "no", "false" ].includes(explicitStr);
      podcast.owner_name = channel["itunes:owner"][0]["itunes:name"][0];
      podcast.owner_email = channel["itunes:owner"][0]["itunes:email"][0];
      podcast.image = channel["itunes:image"][0]['$'].href;
      podcast.category = channel["itunes:category"][0]['$'].text;
      podcast.items = [];
      
      channel.item.forEach(item => {
        let episode = new Episode();
        episode.setFromXMLItem(item);

        podcast.items.push(episode);
      });

    })
    return podcast;
  }
}
