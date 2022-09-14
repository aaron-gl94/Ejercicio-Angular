import { Component } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  serie: number | undefined;

  setResults(result: number) {
    this.serie = result;
  }
}
