import { Component, Input } from 'ng-forward';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div ng-if="ctrl.hero">
      <h2>{{ctrl.hero.name}} details!</h2>
      <div>
        <label>id: </label>{{ctrl.hero.id}}
      </div>
      <div>
        <label>name: </label>
        <input ng-model="ctrl.hero.name" placeholder="name">
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}