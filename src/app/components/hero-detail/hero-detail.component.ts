import './hero-detail.component.scss';

import { Component, Inject, Input } from 'ng-forward';
import { IStateParamsService } from 'angular-ui-router';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'my-hero-detail',
  template: require('./hero-detail.component.html')
})
@Inject('$stateParams', HeroService)
export class HeroDetailComponent {
  hero: Hero;

  constructor(
    private $stateParams: IStateParamsService,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    let id = +this.$stateParams['id'];
    this.heroService.getHero(id).then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}