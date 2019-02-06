import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetcharactersService {

  constructor(private http : HttpClient) { }
  basrURL = 'http://hp-api.herokuapp.com/api/characters/house/';

  getCharacters(house) : Observable<any>{
    let houseName = house;
    return this.http.get(this.basrURL+houseName);
  }

  getAllCharacters() : Observable<any>{
    return this.http.get('http://hp-api.herokuapp.com/api/characters');
  }

  getCharacterDetails(char) : Observable<any>{
    return this.getAllCharacters().pipe(
      map((s) => s.find( s1 => s1.name === char )),tap(data => console.log('Details: ' + JSON.stringify(data))));
  }
  
}
