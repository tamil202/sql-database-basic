import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-show-table',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './show-table.component.html',
  styleUrl: './show-table.component.css',
})
export class ShowTableComponent implements OnInit {
  constructor(
    private serverService: ServerService,
    private forms: FormBuilder
  ) {}

  formsData = this.forms.group({
    table:[ 'select'],
  });

  save = () => {
    let obj = {
      search: this.formsData.get('table')?.value,
    };
    alert(`you selected ${obj.search} refresh page`)
    this.serverService.search(obj).subscribe(res => {
       
    });
  };
  data: any = [];
  ngOnInit(): void {
    this.serverService.table().subscribe((res) => {
      this.data = res;
    });
  }
}
