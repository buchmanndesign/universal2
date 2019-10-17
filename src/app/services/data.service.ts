import { Injectable, OnInit } from '@angular/core';
import * as contentful from 'contentful';
import { from, Observable } from 'rxjs';
import * as prismic from 'Prismic-javascript';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  client = contentful.createClient({
    space: 'f2va2e0tcq3m',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'm_0QXEpyWJPYxpEMulvOISGIwT-00iQ-GGWpCgT4-tU'
  });

  apiEndpoint = 'https://jsbuchmannsite.prismic.io/api/v2';

  getPostsContentful(): Observable<any> {
    return from(this.client.getEntries({
      content_type: 'product'
    }));
  }

  // getPostsPrismic(): Observable<any> {
  //   return from(prismic.getApi(this.apiEndpoint).then((api) => {
  //     return api.query(
  //       prismic.Predicates.at('document.type', 'post'),
  //       { pageSize : 10 }
  //     );
  //   }));

  // }
}
