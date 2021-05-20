import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from "rxjs/operators";
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {
  
    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('subs: ', valor),
    //   error => console.warn('Error:', error ),
    //   () => console.log('terminado')
    // );
    this,this.intervalSubs = this.retornaIntervalo().subscribe( console.log )
      // valor => console.log(valor) 
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(){
    // const intervalo$ = interval(1000)
    //                   .pipe(
    //                     take(4),
    //                     map( valor =>{
    //                       return valor + 1
    //                     })
    //                   )
    // return intervalo$

      return interval(500)
              .pipe(
                map( valor => valor + 1),
                filter( valor => (valor % 2 === 0) ? true: false),
                // take(10)
              )
  }

  retornaObservable(): Observable<number> {
    let i = -1;

    const obs$ = new Observable<number>( observer => {


      const intervalo = setInterval(() => {
        // let i = -1;
        i++;
        observer.next(i)

        if (i === 4 ) {
          clearInterval(intervalo);
          observer.complete()
        }

        if (i === 2) {
          console.log('i=2');
          observer.error(' i llego al vvalor de 2')
        }
      }, 1000)
    });

    return obs$;
  }



}
