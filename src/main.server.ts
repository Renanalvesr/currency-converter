import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './pages/app/app.component';
import { config } from './pages/app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
