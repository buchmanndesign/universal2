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
    return from(
      prismic.getApi(this.apiEndpoint).then((api) => {
      return api.query(
        prismic.Predicates.at('document.type', 'post'),
        { pageSize : 10 }
      );
    })
    );
  }

  search(type: string, fuel: string): Observable<any> {
    return from(
      prismic.getApi(this.apiEndpoint).then((api) => {
        return api.query([
          prismic.Predicates.at('document.type', 'post'),
          type && prismic.Predicates.at('my.post.body_type', type),
          fuel && prismic.Predicates.at('my.post.fuel_types', fuel)
        ],
        { pageSize : 10 }
        );
      })
    );
  }




}
