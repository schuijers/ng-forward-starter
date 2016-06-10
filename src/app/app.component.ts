import './app.component.scss';
import {Component} from 'ng-forward';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app',
  providers: [],
  template: `
    <div class="app-component">
      <h1>{{ctrl.title}}</h1>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li ng-repeat="hero in ctrl.heroes" ng-click="ctrl.onSelect(hero)" ng-class="{'selected': ctrl.selectedHero === hero}">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <div ng-if="ctrl.selectedHero">
        <h2>{{ctrl.selectedHero.name}} details!</h2>
        <div>
          <label>id: </label>{{ctrl.selectedHero.id}}
        </div>
        <div>
          <label>name: </label>
          <input ng-model="ctrl.selectedHero.name" placeholder="name">
        </div>
      </div>
    </div>
  `,
  directives: []
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