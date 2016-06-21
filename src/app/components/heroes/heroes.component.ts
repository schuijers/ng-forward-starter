import './heroes.component.scss';

import { Component, Inject } from 'ng-forward';
import { IStateService } from 'angular-ui-router';
import { Hero } from '../../models/hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'my-heroes',
  providers: [],
  template: require('./heroes.component.html'),
  directives: [HeroDetailComponent]
})
@Inject('$state', HeroService)
export class HeroesComponent {
  title: string = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private $state: IStateService, private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this.$state.go('HeroDetail', { id: this.selectedHero.id });
  }
}