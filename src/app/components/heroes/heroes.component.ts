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
  addingHero: boolean = false;
  selectedHero: Hero;
  heroes: Hero[];
  error: any = null;

  constructor(private $state: IStateService, private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  delete(hero: Hero, event: any) {
    event.stopPropagation();
    
    this.heroService
      .delete(hero)
      .then(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      })
      .catch(error => this.error = error); // TODO: Display error message
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  close(savedHero: Hero) {
    this.addingHero = false;

    if (savedHero) { 
      this.getHeroes();
    }
  }

  gotoDetail() {
    this.$state.go('HeroDetail', { id: this.selectedHero.id });
  }
}