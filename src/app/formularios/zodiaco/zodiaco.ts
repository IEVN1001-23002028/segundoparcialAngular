import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './zodiaco.html',
  styleUrl: './zodiaco.css'
})
export class Zodiaco {
  signosChinos = [
    { signo: 'Rata', imagen: 'assets/zodiaco/rata.png' },
    { signo: 'Buey', imagen: 'assets/zodiaco/buey.png' },
    { signo: 'Tigre', imagen: 'assets/zodiaco/tigre.png' },
    { signo: 'Conejo', imagen: 'assets/zodiaco/conejo.png' },
    { signo: 'Dragón', imagen: 'assets/zodiaco/dragon.png' },
    { signo: 'Serpiente', imagen: 'assets/zodiaco/serpiente.png' },
    { signo: 'Caballo', imagen: 'assets/zodiaco/caballo.png' },
    { signo: 'Cabra', imagen: 'assets/zodiaco/cabra.png' },
    { signo: 'Mono', imagen: 'assets/zodiaco/mono.png' },
    { signo: 'Gallo', imagen: 'assets/zodiaco/gallo.png' },
    { signo: 'Perro', imagen: 'assets/zodiaco/perro.png' },
    { signo: 'Cerdo', imagen: 'assets/zodiaco/cerdo.png' }
  ];
  formulario = new FormGroup({
    nombre: new FormControl(''),
    apellidoPaterno: new FormControl(''),
    apellidoMaterno: new FormControl(''),
    dia: new FormControl(''),
    mes: new FormControl(''),
    year: new FormControl(''),
    sexo: new FormControl('')
  });
  resultado = {
    nombreCompleto: '',
    edad: 0,
    signo: '',
    imagen: ''
  };
  mostrarResultado = false;

  imprimir() {
    const datos = this.formulario.value;

    const dia = Number(datos.dia);
    const mes = Number(datos.mes);
    const year = Number(datos.year);

    const zodiaco = this.calcularSignoChino(year);
    
      this.resultado.nombreCompleto =
      datos.nombre + ' ' +
      datos.apellidoPaterno + ' ' +
      datos.apellidoMaterno;

    this.resultado.edad = this.calcularEdad(dia, mes, year);
    this.resultado.signo = zodiaco.signo;
    this.resultado.imagen = zodiaco.imagen;

    this.mostrarResultado = true;
  }
  calcularEdad(dia: number, mes: number, year: number) {
    const hoy = new Date();

    let edad = hoy.getFullYear() - year;

    const yaCumplio =
      hoy.getMonth() + 1 > mes ||
      (hoy.getMonth() + 1 === mes && hoy.getDate() >= dia);

    if (!yaCumplio) {
      edad--;
    }

    return edad;
  }
  calcularSignoChino(year: number) {
    const indice = ((year - 2020) % 12 + 12) % 12;

    return this.signosChinos[indice];
  }
}