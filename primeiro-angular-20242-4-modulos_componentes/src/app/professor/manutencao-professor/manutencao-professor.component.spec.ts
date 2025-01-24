import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoProfessorComponent } from './manutencao-professor.component';

describe('ManutencaoProfessorComponent', () => {
  let component: ManutencaoProfessorComponent;
  let fixture: ComponentFixture<ManutencaoProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManutencaoProfessorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManutencaoProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
