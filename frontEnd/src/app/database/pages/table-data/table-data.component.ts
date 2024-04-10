import { Component } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.css',
})
export class TableDataComponent {
  constructor(private serverservice: ServerService) {}
  table = {
    syntax: 'CREATE TABLE',
    tablename: '',
    data: '',
    datatype: '',
    datalength: '',
  };
  datas: any = [];
  addData = () => {
    this.datas.push(
      `${this.table.data} ${this.table.datatype}(${this.table.datalength}) `
    );
    this.table.data = '';
    this.table.datatype = '';
    this.table.datalength = '';
    console.log(this.datas);
  };
  datatypes: any = [
    'BIGINT',
    'BINARY',
    'BIT',
    'BLOB',
    'BOOLEAN',
    'CHAR',
    'DATE',
    'DATETIME',
    'DECIMAL',
    'DOUBLE',
    'ENUM',
    'FLOAT',
    'GEOMETRY',
    'INT',
    'INTEGER',
    'JSON',
    'LONGBLOB',
    'LONGTEXT',
    'MEDIUMBLOB',
    'MEDIUMINT',
    'MEDIUMTEXT',
    'NUMERIC',
    'POINT',
    'REAL',
    'SET',
    'SMALLINT',
    'TEXT',
    'TIME',
    'TIMESTAMP',
    'TINYBLOB',
    'TINYINT',
    'TINYTEXT',
    'VARBINARY',
    'VARCHAR',
    'YEAR',
  ];
  onSave = () => {
    let obj = {
      syntax: this.table.syntax,
      table: this.table.tablename,
      data: this.datas,
    };
    if (this.datas.length > 0) {
      this.serverservice.createTable(obj);
    } else {
      return alert('Aleast one col');
    }
  };
}
