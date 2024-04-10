import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private http: HttpClient, private rotuer: Router) {}

  addData = (obj: object) => {
    try {
      this.http
        .post<any>(environment.backendURL + '/api/create/data', obj)
        .pipe(map((e) => e))
        .subscribe({
          next: (res) => {
            return this.rotuer.navigate(['data']);
          },
          error: (error) => {
            if (error) return console.log('some thing went wrong');
          },
          complete: () => {
            console.log('finsih form server');
          },
        });
    } catch (e) {
      console.error(e);
    }
    console.log(obj);
  };

  dbs = (obj: object) => {
    try {
      this.http
        .post<any>(environment.backendURL + '/api/dbsconnect', obj)
        .pipe(map((e) => e))
        .subscribe({
          next: (res) => {
            return this.rotuer.navigate(['data']);
          },
          error: (error) => {
            alert(error);
          },
          complete: () => {
            console.log('finsih form server');
          },
        });
    } catch (e) {
      console.error(e);
    }
  };

  createTable = (obj: object) => {
    try {
      this.http
        .post<any>(environment.backendURL + '/api/create/table', obj)
        .pipe(map((e) => e))
        .subscribe({
          next: (res) => {
            return this.rotuer.navigate(['data']);
          },
          error: (error) => {
            alert(error.message);
          },
          complete: () => {
            console.log('finsih form server');
          },
        });
    } catch (e) {
      console.error(e);
    }
  };
  describedata: any = [];
  describe() {
    try {
      return this.http
        .get<any>(environment.backendURL + '/api/describe/data')
        .pipe(
          map((e) => {
            return e;
          })
        );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  getDescribe = () => {
    return this.describedata;
  };
  table() {
    try {
      return this.http
        .get<any>(environment.backendURL + '/api/table/data')
        .pipe(
          map((e) => {
            return e;
          })
        );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  getdata() {
    try {
      return this.http.get<any>(environment.backendURL + '/api/getdata').pipe(
        map((e) => {
          return e;
        })
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  search = (obj: object) => {
    try {
      return this.http
        .post<any>(environment.backendURL + '/api/table/select', obj)
        .pipe(
          map((res) => {
            return res;
          })
        );
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  gettable() {
    try {
      return this.http
        .get<any>(environment.backendURL + '/api/table/name')
        .pipe(
          map((e) => {
            return e;
          })
        );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  searchQuery = (obj: any) => {
    try {
      return this.http
        .post<any>(environment.backendURL + '/api/querySearch', obj)
        .pipe(
          map((e) => {
            return e;
          })
        );
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
