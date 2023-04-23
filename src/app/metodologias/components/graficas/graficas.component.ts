import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styles: [
  ]
})
export class GraficasComponent implements OnInit , OnChanges {

  @Input() valoresGrafica!:number[];
  
  valoresResultado:number[]=[];

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [ 'Experiencia Organizacional', 'Entorno de Trabajo', 'Aceptación del Enfoque', 'Confianza en el equipo', 'Toma de Decisiones ', 'Aceptación del Cambio', 'Disponibilidad','Documentación', 'Enterga de Valor', 'Tamaño del Equipo', 'Habilidades y Experiencia', 'Experiencia en Ágil','Acceso al Cliente','Ubicación', 'Probabilidad de Cambio', 'Entrega Incremental','Entrega Iterativa' ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      
      { data: [ 0, 0, 0, 0 ,0, 0, 0, 0, 0 ,0, 0, 0, 0, 0 ,0, 0, 0 ],label:'Resultado' },
      { data: [ 0, 0, 0, 0 ,0, 0, 0, 0, 0 ,0, 0, 0, 0, 0 ,0, 0, 0 ],label:'Punto Origen' },
      { data: [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ], label: 'Ágil' },
      { data: [ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8  ], label: 'Hibrido' },
      { data: [ 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10  ], label: 'Tradicional' },
      
    ]
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
     const valores = (changes['valoresGrafica'].currentValue);
     this.radarChartData.datasets[0].data=valores;
     
     
  }

  ngOnInit(): void {
  }

}
