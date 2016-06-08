import {Component} from 'ng-forward';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app',
  providers: [],
  template: `
    <h1>{{ctrl.title}}</h1>
    <h2>{{ctrl.hero.name}} details!</h2>
    <div>
      <label>id: </label>{{ctrl.hero.id}}
    </div>
    <div>
      <label>name: </label>
      <input ng-model="ctrl.hero.name" placeholder="name">
    </div>
  `,
  directives: []
})

export class AppComponent {
  title: string = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}