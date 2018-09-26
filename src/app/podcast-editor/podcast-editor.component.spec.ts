import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastEditorComponent } from './podcast-editor.component';

describe('PodcastEditorComponent', () => {
  let component: PodcastEditorComponent;
  let fixture: ComponentFixture<PodcastEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
