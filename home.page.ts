import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num1;
  num2;
  tot;

  
  somar () {
    if (this.num1 == undefined) {
        alert ("insira o numero 1");
        this.num1= undefined;
    } 
    if (this.num2 == undefined) {
      alert ("insira o numero 2");
      this.num2= undefined;
    }
    else{
    this.tot= parseInt(this.num1)+parseInt(this.num2);
    alert ("Soma concluida");
    this.num1= undefined;
    this.num2= undefined;
    }
  }
  
  subtracao (){
    if (this.num1 == undefined) {
      alert ("insira o numero 1");
      this.num1= undefined;
    } 
  if (this.num2 == undefined) {
    alert ("insira o numero 2");
    this.num2= undefined;
    }
  else{
  this.tot= parseInt(this.num1)-parseInt(this.num2);
  alert ("Subtração concluida");
  this.num1= undefined;
  this.num2= undefined;
    }
  }
 
  multiplicacao(){
    if (this.num1 == undefined) {
      alert ("insira o numero 1");
      this.num1= undefined;
    } 
  if (this.num2 == undefined) {
    alert ("insira o numero 2");
    this.num2= undefined;
    }
  else{
  this.tot= parseInt(this.num1)*parseInt(this.num2);
  alert ("Multiplicação concluida");
  this.num1= undefined;
  this.num2= undefined;
    }
  }
    
  divisao(){
    if (this.num1 == undefined) {
      alert ("insira o numero 1");
      this.num1= undefined;
    } 
  if (this.num2 == undefined) {
    alert ("insira o numero 2");
    this.num2= undefined;
    }
  else{
  this.tot= parseInt(this.num1)/parseInt(this.num2);
  alert ("Divisão concluida");
  this.num1= undefined;
  this.num2= undefined;
    }
  }
}

