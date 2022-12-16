import { NgForm } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  loginForm !: User;
  errorMessage: string = "";
  username: string = "";

  destroy$: Subject<boolean> = new Subject;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
  }

  onClick():void {
    this.router.navigate(['/welcome']);
  }

  save(loginForm: NgForm){
    this.authService.login(loginForm.value).pipe(
      takeUntil(this.destroy$)
    ).subscribe(res => {
      this.authService.setUserLogged(res);
      this.router.navigateByUrl("welcome");
    });
  }

}
