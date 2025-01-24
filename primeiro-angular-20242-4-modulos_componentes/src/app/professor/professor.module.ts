import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemProfessorComponent } from './listagem-professor/listagem-professor.component';
import { ManutencaoProfessorComponent } from './manutencao-professor/manutencao-professor.component';
import {FormsModule} from "@angular/forms";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";


@NgModule({
  declarations: [
    ListagemProfessorComponent,
    ManutencaoProfessorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [
    ListagemProfessorComponent,
    ManutencaoProfessorComponent
  ]
})
export class ProfessorModule { 

}