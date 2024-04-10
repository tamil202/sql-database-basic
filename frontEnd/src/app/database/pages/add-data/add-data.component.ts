import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/getData.service';
import { CommonModule } from '@angular/common';
import { ServerService } from '../../services//server.service';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
  FormsModule
} from '@angular/forms';

@Component({
  selector: 'app-add-data',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-data.component.html',
  styleUrl: './add-data.component.css',
})
export class AddDataComponent implements OnInit {
  constructor(
    private serverService: ServerService,
    private commonservive: CommonService
  ) {}
  data: any = [];
  formGroup: FormGroup = new FormGroup({});
  random = Math.floor(10000 + Math.random() * 1000);
  ngOnInit(): void {
    this.serverService.describe().subscribe((res) => {
      this.data = res;
      if (this.data && this.data.length) {
        for (const iterator of this.data) {
          if (iterator.Field === 'id') {
            this.formGroup.addControl(iterator.Field, new FormControl(this.random));
          } else {
            this.formGroup.addControl(iterator.Field, new FormControl(''));
          }
        }
      }
    });
    this.gender = this.commonservive.getGender();
    this.country = this.commonservive.getConturies();
  }
  gender: any = [];
  country: any = [];
  isDis: boolean = true;
  tablename: string = '';
  submit() {
    this.serverService.addData(this.formGroup.value);
  }
}
