import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperacionComponent } from './operacion.component';

describe('OperacionComponent', () => {
  let component: OperacionComponent;
  let fixture: ComponentFixture<OperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Resultado serie con termino [0]: Exitoso!`, () => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(0)).toEqual(1);
  });

  it(`Resultado Serie con termino [1]: Exitoso!`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(1)).toEqual(4);
  });

  it(`Resultado Serie con termino [2]: Exitoso!`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(2)).toEqual(6);
  });

  it(`Resultado Serie con termino [3]: Exitoso!`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(3)).toEqual(11);
  });

  it(`Resultado Serie con termino [4]: Exitoso!`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(4)).toEqual(14);
  });

  it(`Resultado Serie con termino [5]: Exitoso!`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(5)).toEqual(24);
  });

  it(`Resultado Serie con termino [6]: Exitoso!`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(6)).toEqual(33);
  });

  it(`Resultado Serie con termino [7]: Exitoso!`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(7)).toEqual(50);
  });

  it(`Resultado Serie con termino [8]: Exitoso!`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(8)).toEqual(68);
  });

  it(`Resultado Serie con termino [9]: Exitoso!`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(9)).toEqual(89);
  });

});
