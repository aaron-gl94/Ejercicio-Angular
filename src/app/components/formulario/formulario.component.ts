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
    if (this.numeroIn < 0 || this.numeroIn > 9) {
      alert('- Solo se permiten números del 0 al 9.')
      return;
    }

    this.numeroChange.emit(this.numeroIn);
  }
}
