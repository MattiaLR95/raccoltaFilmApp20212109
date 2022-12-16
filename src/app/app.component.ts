import { AuthService } from './core/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'raccoltaFilmApp20212109';

  constructor(public authService : AuthService){}
}
