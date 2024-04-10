import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import {ServerService} from '../../services/server.service'
@Component({
  selector: 'app-dbs-connect',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dbs-connect.component.html',
  styleUrl: './dbs-connect.component.css',
})
export class DbsConnectComponent {
  constructor(private forms: FormBuilder, private serverservice:ServerService) { }

  formData = this.forms.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    port: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(4)],
    ],
    databasename: ['', [Validators.required, Validators.minLength(3)]],
  });

  onConnect = () => {
    let obj: object = {
       username:this.formData.get('username')?.value,
       password:this.formData.get('password')?.value,
       port:this.formData.get('port')?.value,
       databasename:this.formData.get('databasename')?.value
    }
    this.serverservice.dbs(obj)
  };
}
