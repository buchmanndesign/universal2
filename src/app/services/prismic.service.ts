import { Injectable, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import * as prismic from 'prismic-javascript';
// const Prismic = require('prismic-javascript');


@Injectable({
  providedIn: 'root'
})
export class PrismicService {

  apiEndpoint = 'https://jsbuchmannsite.prismic.io/api/v2';

  getPosts(): Observable<any> {

    return from(prismic.getApi(this.apiEndpoint).then((api) => {
      return api.query(
        prismic.Predicates.at('document.type', 'post'),
        { pageSize : 10 }
      ); // An empty query will return all the documents
    }));

    // return from(this.client.getEntries({
    //   content_type: 'product'
    // }));
  }
}
