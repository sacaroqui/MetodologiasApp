import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seleccion-metodologia',
  templateUrl: './seleccion-metodologia.component.html',
  styles: []
})
export class SeleccionMetodologiaComponent implements OnInit {

  mostrarGrafica:boolean=false;
  valoresGrafica:number[]=[];

  preguntas=[
    {
      titulo:'¿Qué porcentaje de proyectos con enfoque ágil ha desarrollado la organización?'
    },
    {
      titulo:'¿La organización cuenta con un entorno de trabajo colaborativo?'
    },
    {
      titulo:'¿La organización cuenta con posibles patrocinadores de proyectos que entienden y apoyan el uso de un enfoque ágil?'
    },
    {
      titulo:'¿Los patrocinadores y representantes del negocio confían en que los equipos de proyectos pueden transformar sus necesidades en un producto/servicio exitoso, con retroalimentación continua en ambas direcciones?'
    },
    {
      titulo:'¿La organización da autonomía a sus equipos de proyecto para tomar sus propias decisiones sobre como emprender el trabajo?'
    },
    {
      titulo:' ¿La organización está dispuesta a aceptar modificaciones periódicas a las estimaciones de tiempo y costo debido a la comprensión del producto por parte del equipo?'
    },
    {
      titulo:'¿La organización está dispuesta a asignar los recursos al proyecto con disponibilidad del 100% y eliminar la autoridad del jefe funcional?'
    },
    {
      titulo:'¿La organización está dispuesta a dar prioridad a las funcionalidades que a la exigencia y rigurosidad de una documentación detallada?'
    },
    {
      titulo:'¿La organización acepta obtener valor rápido y de manera incremental en vez de obtener el resultado completo al finalizar el proyecto?'
    },
    {
      titulo:'Generalmente ¿Cuál es el tamaño del equipo principal de los proyectos?'
    },
    {
      titulo:'¿La organización cuenta con funcionarios con nivel de experiencia y habilidades para desempeñar los roles del equipo principal? (Scrum Master, Team, Product Owner)'
    },
    {
      titulo:'¿Qué porcentaje de los funcionarios ha trabajado en proyectos con enfoque ágil?'
    },
    {
      titulo:'¿Los equipos de proyecto tendrán acceso diario a por lo menos un representante del negocio/cliente con el fin de hacer preguntas y obtener retroalimentación?'
    },
    {
      titulo:'¿Es factible que los miembros de un equipo de proyecto se encuentren en una misma ubicación?'
    },
    {
      titulo:'¿Qué porcentaje de requisitos acepta la organización que puedan cambiar o ser descubiertos mensualmente?'
    },
    {
      titulo:'¿La organización acepta que el producto o servicio pueda ser construido y evaluado por productos mínimos viables (MVP)?'
    },
    {
      titulo:' ¿La organización acepta que las funcionalidades del producto o servicio puedan ser añadidas a través de las iteraciones?'
    }


  ]

  opcPregunta1a9=[
    {
      opcion:'Entre 81 % - 100 % ',
      valor:2
    },
    {
      opcion:'Entre 61 % - 80 % ',
      valor:4
    },
    {
      opcion:'Entre 41 % - 60 % ',
      valor:6
    },
    {
      opcion:'Entre 21 % - 40 % ',
      valor:8
    },
    {
      opcion:'Entre 0 % - 20 % ',
      valor:10
    }

  ]

  opcOtrasPreguntas=[
    {
      opcion:'Entre 1 y 6 ',
      valor:4
    },
    {
      opcion:'Entre 7 y 12 ',
      valor:8
    },
    {
      opcion:'> 12 ',
      valor:10
    }
  ]

  

  miFormulario:FormGroup= this.fb.group({
    pregunta1:['2',[Validators.required]],
    pregunta2:['2',[Validators.required]],
    pregunta3:['2',[Validators.required]],
    pregunta4:['10',[Validators.required]],
    pregunta5:['10',[Validators.required]],
    pregunta6:['8',[Validators.required]],
    pregunta7:['4',[Validators.required]],
    pregunta8:['4',[Validators.required]],
    pregunta9:['4',[Validators.required]],
    pregunta10:['6',[Validators.required]],
    pregunta11:['6',[Validators.required]],
    pregunta12:['2',[Validators.required]],
    pregunta13:['8',[Validators.required]],
    pregunta14:['8',[Validators.required]],
    pregunta15:['10',[Validators.required]],
    pregunta16:['4',[Validators.required]],
    pregunta17:['4',[Validators.required]],

  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  calcular(){ 
    const resp= Object.values(this.miFormulario.value)
    const vector=resp.map(Number);
    const valores=resp.map(Number);
    this.valoresGrafica=resp.map(Number);

// ---- CALCULO DE LA MODA RESULTADOS DEL FORMULARIO ----
    
function calcularFrecuencia(numero:number, vector:number[]){
  var num_veces=0
  for (var pos in vector) {
      if (vector[pos]==numero) {
          num_veces++
      }
  }
  return num_veces
}

/* Dado un vector de números se nos devuelve la posición
* del número mayor*/
function obtenerPosMayor(vector_valores:number[]){
  var posMayor=0
  var numMayor=vector_valores[0]
  for (var pos in vector_valores){
      if (vector_valores[pos]>numMayor) {
          numMayor=vector_valores[pos];
          posMayor=Number(pos);
      }
  }
  return posMayor
}
/* Función que devuelve el número "moda" de un vector*/
function obtenerModa(vector_valores:number[]){
  var frecuencias=new Array(vector_valores.length)
  for (var pos in vector_valores){
       var numero=vector_valores[pos]
       frecuencias[pos]=calcularFrecuencia(numero, vector_valores)
  }
  var posModa=obtenerPosMayor(frecuencias)
  return vector_valores[posModa]

}

  var moda=obtenerModa(vector)
  console.log(moda);

// ---- FIN CALCULO DE LA MODA RESULTADOS DEL FORMULARIO ----

  this.mostrarGrafica=true;
   
    
  }

  limpiar(){
    this.miFormulario.reset();
    this.valoresGrafica=[];
    this.mostrarGrafica=false;
  }

}
