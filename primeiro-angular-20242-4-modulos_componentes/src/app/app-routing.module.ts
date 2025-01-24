import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemComponent} from "./usuario/listagem/listagem.component";
import {ManutencaoComponent} from "./usuario/manutencao/manutencao.component";
import { ListagemCadastroComponent } from "./usuario/listagem-cadastro/listagem-cadastro.component";
import { ListagemProfessorComponent } from "./professor/listagem-professor/listagem-professor.component";
import { ManutencaoProfessorComponent } from './professor/manutencao-professor/manutencao-professor.component';

const routes: Routes = [
  {
    path: 'listagem-alunos',
    component: ListagemComponent
  },
  {
    path: 'cadastro-aluno',
    component: ManutencaoComponent
  },
  {
    path: 'listagem-cadastro-alunos',
    component: ListagemCadastroComponent
  },
  {
    path: 'cadastro-professor',
    component: ManutencaoProfessorComponent
  },
  {
    path: 'listagem-professores',
    component: ListagemProfessorComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
