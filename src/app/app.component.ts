import './app.component.scss';

import { Component } from 'ng-forward';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'app',
  providers: [],
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
export class AppComponent {
  title: string = 'Tour of Heroes';
  selectedHero: Hero;

  public heroes: Hero[] = HEROES;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];