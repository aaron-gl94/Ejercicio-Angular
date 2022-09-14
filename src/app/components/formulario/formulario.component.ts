import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Input('numeroIn') numeroIn = 0;
  @Output('numeroOut') numeroChange = new EventEmitter();

  verSerie() {
    if (this.numeroIn < 0) {
      alert('- Debe Ingresar un numero mayor a "0".')
      return;
    }

    this.numeroChange.emit(this.numeroIn);
  }
}
