import { Component } from '@angular/core';
import {Professor} from "../../shared/modelo/professor";
import {PROFESSORES} from "../../shared/modelo/PROFESSORES";

@Component({
  selector: 'app-listagem-professor',
  standalone: false,
  
  templateUrl: './listagem-professor.component.html',
  styleUrl: './listagem-professor.component.css'
})
export class ListagemProfessorComponent {
  PROFESSORES = PROFESSORES;

  constructor() {
  }
  remover(professorARemover: Professor) {
    this.PROFESSORES = this.PROFESSORES.filter(
        professor => professor.matricula !== professorARemover.matricula);
  }

  curtir(professor: Professor) {
    professor.likes += 1;
  }

  descurtir(professor: Professor) {
    if (professor.likes > 0) {
      professor.likes -= 1;
    }
  }

  avaliar(professor: Professor) {
    professor.curti = !professor.curti;
  }

  nomeIconeCurtir(professor: Professor): string {
    if (professor.curti === undefined) {
      return 'thumbs_up_down';
    }
    if (professor.curti) {
      return 'thumb_up';
    }
    return 'thumb_down';
  }

}

