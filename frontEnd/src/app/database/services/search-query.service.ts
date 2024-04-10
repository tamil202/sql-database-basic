import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import {map} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SearchQuery {
    constructor(private http: HttpClient) { }
    
    searchData = (params:object) => {
        try {
            this.http.get<any>(
              environment.backendURL + '/api/searchquery',
              params
            ).pipe(map((e) => e)).subscribe({
                next:()=>{},error:(e)=>{console.error(e);}
            });
        } catch (error) {
            console.error(error);
        }
    }
}
