import {Component} from 'ng-forward';

@Component({
  selector: 'app',
  providers: [],
  template: `
    <div>
      <h2>Hello from {{ctrl.name}}</h2>
    </div>
  `,
  directives: []
})

export class App {
  name: string;

  constructor() {
    this.name = 'ng-forward-starter';
  }
}