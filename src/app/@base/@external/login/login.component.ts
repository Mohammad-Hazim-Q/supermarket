import { Component, inject } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from '@shared/@components/base.component';
import { AuthService } from '@shared/@services/auth/auth.service';
import { MessageService } from '@shared/@services/messages/message.service';
import { TimeoutError, takeUntil, timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent {

  private _authService = inject(AuthService)
  private _dialog = inject(MatDialog)
  private _messageService = inject(MessageService)

  form!: FormGroup;
  hide = true;
  isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
  ) {
    super();

    this.initForm();

  }

  initForm() {
    this.form = this._formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    })
  }


  switchLanguage(lang: string) {
    this.systemService.switchSystemLanguage(lang);
  }

  login() {

    if (this.form.invalid) return;

    this.isLoading = true;

    let data = {
      email: this.form.get('email')!.value,
      password: this.form.get('password')!.value
    }

    this._authService.login(data)

      .pipe(
        takeUntil(this.destroy$),
        timeout(15000)
      )
      .subscribe({
        next: (res) => {

          if (!res) return;

          this.isLoading = false;

          this._authService.setAccessToken(res.token)
          this._authService.currentUser = res.user

          this._messageService.showSuccess()


          this.isLoading = false;

          this.dialogRef.close();
        },
        error: (err) => {

          this.isLoading = false;
          let message = err?.message || this.translate.instant('pages.external.login.stepOne.form.loginFailed')

          if (err instanceof TimeoutError) {
            message = this.translate.instant('pages.external.login.stepOne.form.loginTimeout')
          }

          this._messageService.showError(message);
        }
      }

      )

  }

  redirectToRegister() {

    this.dialogRef.close();
    this.router.navigate(['external/sign-up']);
  }

}
