import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ContentfulService } from './services/contentful.service';
import { PrismicService } from './services/prismic.service';
import { stringify } from 'querystring';
import { NgForm } from '@angular/forms';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contentfulResults;
  prismicResults;

  type: string; // 2 way binding
  fuel: string; // 2 way binding

  settings: any;
  styles: string;

  constructor(
    private contentfulService: ContentfulService,
    private prismicService: PrismicService,
    private settingsService: SettingsService) {}

  ngOnInit(): void {



    this.contentfulService.getPosts().subscribe((res) => {
      this.contentfulResults = res.items;
    });

    this.prismicService.getPosts().subscribe((res) => {
      this.prismicResults = res.results;

    });


    this.settingsService.setColors();
  }



  onSubmitSearch(val?: NgForm) {
    console.log(this.type, this.fuel);
    this.prismicService.search(this.type, this.fuel).subscribe((res) => {
      this.prismicResults = res.results;
    })
  }
}
