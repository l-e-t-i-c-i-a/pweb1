import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemProfessorComponent } from './listagem-professor.component';

describe('ListagemProfessorComponent', () => {
  let component: ListagemProfessorComponent;
  let fixture: ComponentFixture<ListagemProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemProfessorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
