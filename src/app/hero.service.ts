import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
     this.messageService.add('HeroService: constructor HeroService');
  }

  //Sincrono/Bloqueante
  //getHeroes(): Hero[] {
  //  return HEROES;
  //}

  //Assincrono/ Não Bloqueante
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

}