import '../assets/styles/styles.scss';
import { bootstrap } from 'ng-forward';
import config from './configs/router.config';
import { AppComponent } from './app.component';

bootstrap(AppComponent, ['ui.router', config.name]);