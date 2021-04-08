import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Album} from './album';
import { map } from 'rxjs/add/operator/map';
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) {
  }
  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map(
        response => <Album>response.json()
      )
    ;
  }
}
