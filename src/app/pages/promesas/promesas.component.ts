import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    
  //   const promesa = new Promise( (resolve, reject) => {
      
  //     if (false) {
  //       resolve ('hola mundo')
  //     } else {
  //       reject('algo salio mal')
  //     }
  //   });

  //   promesa.then((mensaje) => {
  //     console.log(mensaje)
  //   })
  //   .catch( error => console.log('error en promesa', error));
  //   console.log('fin del init')
    // this.getUsuarios();

    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    })
  }

  getUsuarios() {

    const promesa = new Promise( resolve => {
      
      fetch('https://reqres.in/api/users')
        .then( resp => resp.json() )
        .then( body => console.log(body.data));
    });

    return promesa

  }

}
