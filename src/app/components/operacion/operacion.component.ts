import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Iresults } from '../interfaces/Iresults';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent implements OnChanges {
  serie     = 0;
  tringular = 0;
  primo     = 0;
  fibonacci = 0;
  @Input('numero') numero = 0;
  @Output('onResults') onResults = new EventEmitter();

  results: Iresults = {
    triangular: this.numero,
    primo: this.numero,
    fibonacci: this.numero,
    serie: this.serie
  };

  private getTringular (termino: number) {
    let numerosTriangulares = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];
    console.log('- numeroTriangular: '+numerosTriangulares[termino]);
    
    return numerosTriangulares[termino];
  }

  private getPrimo (termino: number) {
    let numerosPrimos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    console.log('- numeroPrimo: '+numerosPrimos[termino]);
    
    return numerosPrimos[termino];
  }

  private getFibonacci (termino: number) {
    let numerosFibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    console.log('- numeroFibonacci: '+numerosFibonacci[termino]);
    
    return numerosFibonacci[termino];
  }

  resolverSerie(termino: number) {
    this.tringular = this.getTringular(termino);
    this.primo     = this.getPrimo(termino);
    this.fibonacci = this.getFibonacci(termino);

    this.serie = (2*(this.tringular+1)) - (2*this.primo) + (this.fibonacci+1);

    this.results = {
      triangular: this.tringular,
      primo:      this.primo,
      fibonacci:  this.fibonacci,
      serie:      this.serie
    };

    return this.serie;
  }

  ngOnChanges() {
    console.log(this.numero);

    this.serie = this.resolverSerie(this.numero); 
    this.onResults.emit(this.serie);
  };
}
