import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoContratistasComponent } from './listado-contratistas.component';

describe('ListadoContratistasComponent', () => {
  let component: ListadoContratistasComponent;
  let fixture: ComponentFixture<ListadoContratistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoContratistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoContratistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
