import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador=1
  nombre ="adimer paul"
  apellido ="chambi ajata"
  edad = 10
  email="adimer101@gmail.com"
  sueldos=[7000,8000,10000]
  activo=true
  esActivo(){
    if(this.activo){
      return 'Trabajador activo'
    }else{
      return 'Trabajador inactivo'
    }
  }
  ultimossueldos(){
    let suma=0
    for(let i=0;i<this.sueldos.length;i++){
      suma=suma+this.sueldos[i]
    }
    return suma
  }
  sumar(){
    this.contador++
  }
  restar(){
    if(this.contador>0){
      this.contador--
    }

  }

}
