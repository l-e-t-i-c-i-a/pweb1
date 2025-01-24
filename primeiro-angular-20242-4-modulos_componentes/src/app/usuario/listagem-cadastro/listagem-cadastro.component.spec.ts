import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCadastroComponent } from './listagem-cadastro.component';

describe('ListagemCadastroComponent', () => {
  let component: ListagemCadastroComponent;
  let fixture: ComponentFixture<ListagemCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
