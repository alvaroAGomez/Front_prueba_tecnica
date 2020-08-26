import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratistasComponent } from './contratistas.component';

describe('ContratistasComponent', () => {
  let component: ContratistasComponent;
  let fixture: ComponentFixture<ContratistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
