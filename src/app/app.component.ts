import './app.component.scss';

import { Component, Inject } from 'ng-forward';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'app',
  providers: [HeroService],
  template: `
    <div class="app-component">
      <h1>{{ctrl.title}}</h1>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li ng-repeat="hero in ctrl.heroes" (click)="ctrl.onSelect(hero)" ng-class="{'selected': ctrl.selectedHero === hero}">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <my-hero-detail [hero]="ctrl.selectedHero"></my-hero-detail>
    </div>
  `,
  directives: [HeroDetailComponent]
})
@Inject(HeroService)
export class AppComponent {
  title: string = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
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
}