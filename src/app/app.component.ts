import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './services/contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contentfulResults;
  prismicResults;

  constructor(
    private contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.contentfulService.getPosts().subscribe((res) => {
      this.contentfulResults = res.items;
    });
  }
}
