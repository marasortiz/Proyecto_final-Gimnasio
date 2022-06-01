import { Component, OnInit } from '@angular/core';

/* Socios */
import { Socio } from 'src/app/classes/socio';
/* Validadores */
import { Validators } from '@angular/forms';
/* Formulario */
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  ListaSocios: FormGroup;

  array: Socio[] = [];
  arrayCheck: Socio | null = null;

  changeIndex(tabgroup: MatTabGroup) {
    tabgroup.selectedIndex = 0;
  }

  constructor() {
    this.ListaSocios = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      id: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ]),
      gender: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    /* Número Aleatorio */
    /* El número es aleatorio e unico ya que depende del día/hora + un número aleatorio */
    console.log(new Date().getTime() * Math.random() * 100000);
  }

  /* Botón Envio */
  onSubmit(tabgroup: MatTabGroup) {
    if (!this.ListaSocios.valid || this.arrayCheck != null) {
      return;
    }

    let user = new Socio();
    user.name = this.ListaSocios.value.name;
    user.surname = this.ListaSocios.value.surname;
    user.member = new Date().getTime() * Math.random() * 100000;
    user.id = this.ListaSocios.value.id;
    user.phone = this.ListaSocios.value.phone;
    user.gender = this.ListaSocios.value.gender;

    this.array.push(user);
    this.ListaSocios.reset();
    
    tabgroup.selectedIndex = 0;
  }

  /* Eliminar Socio */
  /* eliminar(event: MouseEvent, user: User): void {
    for (let i = this.array.length - 1; i >= 0; i--) {
      if (this.array[i] == user) {
        this.array.splice(i, 1);
      }
    }

    if (this.arrayCheck != null && this.arrayCheck == user) {
      this.agenda.reset();
      this.arrayCheck = null;
    }
  } */

  /* Modificar Socios */
  /* modificar(event: MouseEvent, user: User): void {
    this.agenda.controls['name'].setValue(user.name);
    this.agenda.controls['surname'].setValue(user.surname);
    this.agenda.controls['age'].setValue(user.age);
    this.agenda.controls['id'].setValue(user.id);
    this.agenda.controls['birthday'].setValue(user.birthday);
    this.agenda.controls['color'].setValue(user.color);
    this.agenda.controls['gender'].setValue(user.gender);

    this.arrayCheck = user;
  }


  terminarModificacion(event: MouseEvent, user: User): void {
    for (let p of this.array) {
      if (p == user) {
        p.name = this.agenda.value.name;
        p.surname = this.agenda.value.surname;
        p.age = this.agenda.value.age;
        p.id = this.agenda.value.id;
        p.birthday = this.agenda.value.birthday;
        p.color = this.agenda.value.color;
        p.gender = this.agenda.value.gender;

        this.agenda.reset();
        this.arrayCheck = null;

        break;
      }
    }
  } */
}
