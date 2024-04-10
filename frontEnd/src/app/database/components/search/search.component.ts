import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(private serverService: ServerService) {}
  query = '';
  @Output() value = new EventEmitter();

  onSearch = () => {
    let obj: object = {
      searchq: this.query,
    };
    this.serverService.searchQuery(obj).subscribe((res) => {
      this.value.emit(res);
    });
    this.query = '';
  };
}
