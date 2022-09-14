import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

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


  private getTringular (termino: number) {
    let numeroTriangular = 0;
    
    for (let n = 0; n <= termino; n++) {
        numeroTriangular = (n * (n + 1)) / 2;
    }

    return numeroTriangular;
  }

  private getPrimo (termino: number) {
    let iTermino = 0;
    let numeroPrimo = 0;

    function validaNumeroPrimo(numero: number) {
        if (numero < 2) {
            return false;
        }

        for (let i = 2; i <= numero - 1; i++) {
            if (numero % i == 0) {
                return false;
            }
        }

        return true;
    }

    for (numeroPrimo; iTermino < termino; numeroPrimo++) {
        iTermino += (validaNumeroPrimo(numeroPrimo)) ? 1 : 0;
    }

    numeroPrimo = (numeroPrimo <= 0) ? 0 : numeroPrimo - 1;

    return numeroPrimo;
  }

  private getFibonacci (termino: number): any {
    let auxA = 0, auxB = 1, numeroFibonacci = 0;

    if (termino === 1) {
      return 1;
    }

    for (let i = 0; i < termino - 1; i++) {
      numeroFibonacci = auxA + auxB;
      auxA = auxB;
      auxB = numeroFibonacci;
    }

    return numeroFibonacci;
  }

  resolverSerie(termino: number) {
    this.tringular = this.getTringular(termino);
    this.primo     = this.getPrimo(termino);
    this.fibonacci = this.getFibonacci(termino);

    this.serie = (2*(this.tringular+1)) - (2*this.primo) + (this.fibonacci+1);
    
    return this.serie;
  }

  ngOnChanges() {
    console.log(this.numero);

    this.serie = this.resolverSerie(this.numero); 
    this.onResults.emit(this.serie);
  };
}
