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

  it(`Resultado serie con termino [0]`, () => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(0)).toEqual(3);
  });

  it(`Resultado Serie con termino [1]`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(1)).toEqual(2);
  });

  it(`Resultado Serie con termino [2]`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(2)).toEqual(4);
  });

  it(`Resultado Serie con termino [3]`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(3)).toEqual(7);
  });

  it(`Resultado Serie con termino [4]`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(4)).toEqual(12);
  });

  it(`Resultado Serie con termino [5]`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(5)).toEqual(16);
  });

  it(`Resultado Serie con termino [6]`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(6)).toEqual(27);
  });

  it(`Resultado Serie con termino [7]`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(7)).toEqual(38);
  });

  it(`Resultado Serie con termino [8]`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(8)).toEqual(58);
  });

  it(`Resultado Serie con termino [9]`,() => {
    const fixture = TestBed.createComponent(OperacionComponent);
    const app = fixture.componentInstance;
    expect(app.resolverSerie(9)).toEqual(81);
  });

});
