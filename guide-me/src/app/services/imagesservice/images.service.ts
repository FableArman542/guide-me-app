import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: {
    'Authorization': '563492ad6f917000010000013b5058da88914dd8b9c13c4e05a30016'
  }
}

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getImages(search: string): Observable<any> {

    const url: string = 'https://api.pexels.com/v1/search?query=' + search + '&per_page=1';

    return this.http.get(url, httpOptions);
  }

}
