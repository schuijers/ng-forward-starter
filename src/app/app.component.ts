import './app.component.scss';

import { Component, StateConfig } from 'ng-forward';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroService } from './services/hero.service';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="c-app">
      <h1 class="c-app__header">{{ctrl.title}}</h1>
      <nav>
        <a class="c-app__nav-item" ui-sref="Dashboard" ui-sref-active="c-app__nav-item--active">Dashboard</a>
        <a class="c-app__nav-item" ui-sref="Heroes" ui-sref-active="c-app__nav-item--active">Heroes</a>
      </nav>
      <ui-view></ui-view>
    </div>
  `,
  providers: [HeroService]
})
@StateConfig([
  { name: 'Dashboard', url: '/dashboard', component: DashboardComponent },
  { name: 'Heroes', url: '/heroes', component: HeroesComponent },
  { name: 'HeroDetail', url: '/detail/:id', component: HeroDetailComponent }
])
export class AppComponent {
  title: string = 'Tour of Heroes';
}