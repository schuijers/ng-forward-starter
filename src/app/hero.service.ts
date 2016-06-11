import { IPromise, IQService } from 'angular';
import { Inject, Injectable } from 'ng-forward';
import { Hero } from './hero';
import { HEROES } from './mock-heroes'

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
}