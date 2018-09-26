import { Component, OnInit, Input } from '@angular/core';
import { Podcast } from '../models/podcast';
import { CATEGORIES, CATEGORY_VALUES } from '../podcast-categories';

@Component({
  selector: 'app-podcast-editor',
  templateUrl: './podcast-editor.component.html',
  styleUrls: ['./podcast-editor.component.css']
})
export class PodcastEditorComponent implements OnInit {

  categories: string[] = CATEGORIES;
  categoryValues: string[] = CATEGORY_VALUES;


  @Input() podcast: Podcast;

  constructor() { }

  ngOnInit() {
  }

}
