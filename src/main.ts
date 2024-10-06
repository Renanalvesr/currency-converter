import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './pages/app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './pages/app/app.routes';


bootstrapApplication(AppComponent, {
  providers:[
    provideRouter(routes)
  ]
});