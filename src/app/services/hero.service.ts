import { IHttpRequestConfigHeaders, IHttpService, IPromise, IQService } from 'angular';
import { Inject, Injectable } from 'ng-forward';
import { Hero } from '../models/hero';

@Injectable()
@Inject('$http')
@Inject('$q')
export class HeroService {
  private heroesUrl: string = 'app/heroes';

  constructor(private $http: IHttpService, private $q: IQService) {
  }

  getHeroes(): IPromise<Hero[]> {
    return this.$http
      .get(this.heroesUrl)
      .then(response => response)
      .catch(this.handleError);
  }

  getHero(id: number) {
    return this.getHeroes().then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }

  save(hero: Hero): IPromise<Hero>  {
    if (hero.id) {
      return this.put(hero);
    }

    return this.post(hero);
  }

  delete(hero: Hero) {
    let headers: IHttpRequestConfigHeaders = {
      'Content-Type': 'application/json'
    };

    let url = `${this.heroesUrl}/${hero.id}`;

    return this.$http
      .delete(url, headers)
      .catch(this.handleError);
  }

  // Add new Hero
  private post(hero: Hero): IPromise<Hero> {
    let headers: IHttpRequestConfigHeaders = {
      'Content-Type': 'application/json'
    };

    return this.$http
      .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
      .then(response => response)
      .catch(this.handleError);
  }

  // Update existing Hero
  private put(hero: Hero) {
    let headers: IHttpRequestConfigHeaders = {
      'Content-Type': 'application/json'
    };

    let url = `${this.heroesUrl}/${hero.id}`;

    return this.$http
      .put(url, JSON.stringify(hero), {headers: headers})
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return this.$q.reject(error.message || error);
  }
}