import { Injectable, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
// import * as prismic from 'Prismic-javascript';

@Injectable({
  providedIn: 'root'
})
export class PrismicService {

  apiEndpoint = 'https://jsbuchmannsite.prismic.io/api/v2';

  getPosts(): Observable<any> {

    return from([1, 2, 3]);


  }
}
