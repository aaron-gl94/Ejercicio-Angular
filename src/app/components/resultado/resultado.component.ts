import { Component, Input } from '@angular/core';
import { Iresults } from '../interfaces/Iresults';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  serie: number | undefined;

  // results: Iresults = {} as Iresults;
  /* setResults(results: Iresults) {
    this.results = results;
  } */


  setResults(results: number) {
    this.serie = results;
  }
}
