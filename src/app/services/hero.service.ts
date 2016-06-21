import { IPromise, IQService } from 'angular';
import { Inject, Injectable } from 'ng-forward';
import { Hero } from '../models/hero';
import { HEROES } from '../mocks/heroes.mock'

@Injectable()
@Inject('$q')
export class HeroService {
  constructor(private $q: IQService) {
  }

  getHeroes(): IPromise<Hero[]> {
    return this.$q.resolve(HEROES);
  }

  getHeroesSlowly(): IPromise<Hero[]> {
    return this.$q<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 2000) 
    );
  }

  getHero(id: number) {
    return this.getHeroes().then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }
}