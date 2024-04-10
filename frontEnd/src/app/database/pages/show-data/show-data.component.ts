import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServerService } from '../../services/server.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { SearchComponent } from '../../components/search/search.component';
import { CreateDatabaseComponent } from '../../components/create-database/create-database.component';
import { ShowTableComponent } from '../../components/show-table/show-table.component';
import { CommonModule } from '@angular/common';
import { __values } from 'tslib';
@Component({
  selector: 'app-show-data',
  standalone: true,
  imports: [
    RouterLink,
    SearchComponent,
    CreateDatabaseComponent,
    ShowTableComponent,
    CommonModule,
  ],
  templateUrl: './show-data.component.html',
  styleUrl: './show-data.component.css',
})
export class ShowDataComponent implements OnInit {
  [x: string]: any;
  constructor(private server: ServerService, private http: HttpClient) {
    // get data
    this.http.get<any>(environment.backendURL + '/api/getdata').subscribe({
      next: (data: any) => {
        this.listdata = data;
      },
    });
    // describe data
    this.server.describe().subscribe((res) => {
      this.describe = res;
    });
    this.http.get<any>(environment.backendURL + '/api/table/name').subscribe({
      next: (data: any) => {
        this.value = data.message;
      },
    });
  }
  ifShow:boolean = true 
  value: string = '';
  listdata: any = [];
  describe: any = [];
  vall: any = [];

  showdata: any = [];

  getValue(obj: any) {
    return Object.values(obj);
  }
  get = (value: any) => {
    this.listdata = value;
    this.getkey();
    this.ifShow = false
  };
  getkey = () => {
    this.listdata.forEach((val: any) => {
      this.vall = Object.keys(val);
    });
  };
  ngOnInit(): void {}
}
