import './dashboard.component.scss';

import { Component, Inject } from 'ng-forward';
import { IStateService } from 'angular-ui-router';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'my-dashboard',
  template: require('./dashboard.component.html')
})
@Inject('$state', HeroService)
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private $state: IStateService, private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(hero: Hero) {
    this.$state.go('HeroDetail', { id: hero.id });
  }
}