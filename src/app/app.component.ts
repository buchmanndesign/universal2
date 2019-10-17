import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contentfulResults;
  prismicResults;

  constructor(
    private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPostsContentful().subscribe((res) => {
      this.contentfulResults = res.items;
    });

    this.dataService.getPostsPrismic().subscribe((res) => {
      this.prismicResults = res.results;
      console.log(res.results);
    });
  }
}
