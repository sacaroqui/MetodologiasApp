import { Component, OnInit } from '@angular/core';

export interface Metodologia {
  item: string;
  PMI:  string;
  SCRUM: string;
  PRINCE2: string;
  KANBAN: string;
}

const ELEMENT_DATA: Metodologia[] = [
  {item:'Tipo de Metodología ', PMI:'Tradicional', PRINCE2:'Tradicional', SCRUM:'Ágil', KANBAN:'Ágil'},            
  {item:'Aplicación de Proyectos', PMI:'Todo tipo de proyectos', PRINCE2:'Todo tipo de proyectos', SCRUM:'Proyectos tecnológicos / Software', KANBAN:'Todo tipo de proyecto o servicio profesional'},            
  {item:'Características Principales', PMI:'12 principios, 12 dominios', PRINCE2:'2 niveles, 4 elementos, 7 principios, 7 temáticas, 7 procesos y adaptación al entorno', SCRUM:'4 ceremonias, 3 roles, 3 artefactos', KANBAN:'Tablero Kanban'},            
  {item:'Número Principios ', PMI:'12 principios de PMI', PRINCE2:'7 principios de PRINCE2', SCRUM:'12 principios Scrum', KANBAN:'Según criterios de negocio del cliente'},            
  {item:'Secuencial / Iterativo', PMI:'Secuencial', PRINCE2:'Secuencial', SCRUM:'Iterativo', KANBAN:'Iterativo'},            
  {item:'Se tiene en cuenta el ciclo de vida del proyecto', PMI:'SI', PRINCE2:'SI', SCRUM:'NO', KANBAN:'NO'},           
  {item:'Interacción con el cliente', PMI:'Al inicio y al final del proyecto', PRINCE2:'Al inicio y al final del proyecto', SCRUM:'Durante toda la ejecución del proyecto', KANBAN:'No existe información'},           
  {item:'Periodo de planificación', PMI:'Planificación a largo plazo', PRINCE2:'Planificación a largo plazo', SCRUM:'Periodos cortos de tiempo', KANBAN:'Periodos cortos de tiempo'},            
              
];


@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styles: [`
    table {
    width: 100%;
  }
  `
  ]
})
export class KanbanComponent implements OnInit {

  displayedColumns: string[] = ['item', 'PMI', 'SCRUM', 'PRINCE2','KANBAN'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
