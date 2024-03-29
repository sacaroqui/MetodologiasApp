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
  tipoMetodologia:string='';

  preguntas=[
    {
      titulo:'¿Qué porcentaje de proyectos con enfoque ágil ha desarrollado la organización?'
    },
    {
      titulo:'¿En qué porcentaje la organización cuenta con un entorno de trabajo colaborativo?'
    },
    {
      titulo:'¿En qué porcentaje la organización cuenta con posibles patrocinadores de proyectos que entienden y apoyan el uso de un enfoque ágil?'
    },
    {
      titulo:'¿En qué porcentaje los patrocinadores y representantes del negocio confían en que los equipos de proyectos pueden transformar sus necesidades en un producto/servicio exitoso, con retroalimentación continua en ambas direcciones?'
    },
    {
      titulo:'¿En qué porcentaje la organización da autonomía a sus equipos de proyecto para tomar sus propias decisiones sobre como emprender el trabajo?'
    },
    {
      titulo:' ¿En qué porcentaje la organización está dispuesta a aceptar modificaciones periódicas a las estimaciones de tiempo y costo debido a la comprensión del producto por parte del equipo?'
    },
    {
      titulo:'¿En qué porcentaje la organización está dispuesta a asignar los recursos al proyecto con disponibilidad del 100% y eliminar la autoridad del jefe funcional?'
    },
    {
      titulo:'¿En qué porcentaje la organización está dispuesta a dar prioridad a las funcionalidades que a la exigencia y rigurosidad de una documentación detallada?'
    },
    {
      titulo:'¿En qué porcentaje la organización acepta obtener valor rápido y de manera incremental en vez de obtener el resultado completo al finalizar el proyecto?'
    },
    {
      titulo:'¿En qué rango de porcentaje la organización está dispuesta a obtener logro y generación de valor en tiempos cortos e iterativos?'
    },
    {
      titulo:'¿En qué porcentaje la organización cuenta con funcionarios con nivel de experiencia y habilidades para desempeñar los roles del equipo principal? (Scrum Master, Team, Product Owner)'
    },
    {
      titulo:'¿Qué porcentaje de los funcionarios ha trabajado en proyectos con enfoque ágil?'
    },
    {
      titulo:'¿En qué porcentaje los equipos de proyecto tendrán acceso diario a por lo menos un representante del negocio/cliente con el fin de hacer preguntas y obtener retroalimentación?'
    },
    {
      titulo:'¿En qué rango de porcentaje se encuentra defindo el alcance, tiempo y costo del proyecto?'
    },
    {
      titulo:'¿Qué porcentaje de requisitos acepta la organización que puedan cambiar o ser descubiertos mensualmente?'
    },
    {
      titulo:'¿En qué porcentaje la organización acepta que el producto o servicio pueda ser construido y evaluado por productos mínimos viables (MVP)?'
    },
    {
      titulo:' ¿En qué porcentaje la organización acepta que las funcionalidades del producto o servicio puedan ser añadidas a través de las iteraciones?'
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
    pregunta1:['',[Validators.required]],
    pregunta2:['',[Validators.required]],
    pregunta3:['',[Validators.required]],
    pregunta4:['',[Validators.required]],
    pregunta5:['',[Validators.required]],
    pregunta6:['',[Validators.required]],
    pregunta7:['',[Validators.required]],
    pregunta8:['',[Validators.required]],
    pregunta9:['',[Validators.required]],
    pregunta10:['',[Validators.required]],
    pregunta11:['',[Validators.required]],
    pregunta12:['',[Validators.required]],
    pregunta13:['',[Validators.required]],
    pregunta14:['',[Validators.required]],
    pregunta15:['',[Validators.required]],
    pregunta16:['',[Validators.required]],
    pregunta17:['',[Validators.required]],

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
  for (let pos in vector) {
      if (vector[pos]==numero) {
          num_veces++
      }
  }
  return num_veces
}

/* Dado un vector de números se nos devuelve la posición
* del número mayor*/
function obtenerPosMayor(vector_valores:number[]){
  let posMayor=0
  let numMayor=vector_valores[0]
  for (let pos in vector_valores){
      if (vector_valores[pos]>numMayor) {
          numMayor=vector_valores[pos];
          posMayor=Number(pos);
      }
  }
  return posMayor
}
/* Función que devuelve el número "moda" de un vector*/
function obtenerModa(vector_valores:number[]){
  let frecuencias=new Array(vector_valores.length)
  for (let pos in vector_valores){
       let numero=vector_valores[pos]
       frecuencias[pos]=calcularFrecuencia(numero, vector_valores)
  }
  let posModa=obtenerPosMayor(frecuencias)
  return vector_valores[posModa]

}

  let moda=obtenerModa(vector)
  console.log(moda);

// ---- FIN CALCULO DE LA MODA RESULTADOS DEL FORMULARIO ----

  switch(moda){
    case 10:
      this.tipoMetodologia='Tradicional'
      break;
    case 8:
      this.tipoMetodologia='Hibrida'
      break;
    case 6:
      this.tipoMetodologia='Hibrida'
      break;
    default:
      this.tipoMetodologia='Ágil'  
  }

  this.mostrarGrafica=true;
       
  }

  limpiar(){
    this.miFormulario.reset();
    this.valoresGrafica=[];
    this.mostrarGrafica=false;
    
  }

}
