import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './services/contentful.service';
import { PrismicService } from './services/prismic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contentfulResults;
  prismicResults;

  constructor(
    private contentfulService: ContentfulService,
    private prismicService: PrismicService) {}

  ngOnInit(): void {
    this.contentfulService.getPosts().subscribe((res) => {
      this.contentfulResults = res.items;
    });

    this.prismicService.getPosts().subscribe((res) => {
      this.prismicResults = res.results;
      console.log(res.results)
    });
  }
}
