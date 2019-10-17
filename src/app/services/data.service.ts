import { Injectable, OnInit } from '@angular/core';
import * as contentful from 'contentful';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  client = contentful.createClient({
    space: 'f2va2e0tcq3m',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'm_0QXEpyWJPYxpEMulvOISGIwT-00iQ-GGWpCgT4-tU'
  });

  getPostsContentful(): Observable<any> {
    return from(this.client.getEntries({
      content_type: 'product'
    }));
  }
}
