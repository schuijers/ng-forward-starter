import './hero-detail.component.scss';

import { Component, EventEmitter, Inject, Input, Output } from 'ng-forward';
import { ILocationService } from 'angular';
import { IStateParamsService } from 'angular-ui-router';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'my-hero-detail',
  template: require('./hero-detail.component.html')
})
@Inject('$location', '$stateParams', HeroService)
export class HeroDetailComponent {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private $location: ILocationService,
    private $stateParams: IStateParamsService,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    if (this.$stateParams['id']) {
      let id = +this.$stateParams['id'];
      this.navigated = true;
      this.heroService.getHero(id).then(hero => this.hero = hero);
    } else {
      this.navigated = false;
      this.hero = new Hero();
    }
  }

  ngOnDestroy() {
    this.$stateParams['id'] = null;
  }

  save() {
    this.heroService
      .save(this.hero)
      .then(hero => {
        this.hero = hero; // saved hero, w/ id if new
        this.goBack(hero);
      })
      .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedHero: Hero = null) {
    this.close.next(savedHero);
    
    if (this.navigated) { 
      window.history.back(); 
    }
  }
}