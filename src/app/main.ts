import '../assets/styles/styles.scss';
import { bootstrap, provide } from 'ng-forward';
import config from './configs/router.config';
import { AppComponent } from './app.component';
import { InMemoryBackendService } from './services/in-memory-backend.service';
import { InMemoryDataService } from './services/in-memory-data.service';

bootstrap(AppComponent, [
  'ui.router',
  config.name,
  provide('API_BASE', { useConstant: 'app/' }),
  provide('SEED_DATA', { useClass: InMemoryDataService }),
  provide('$http', { useClass: InMemoryBackendService })
]);