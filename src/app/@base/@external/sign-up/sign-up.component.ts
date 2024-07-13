import { Component, inject } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '@shared/@components/base.component';
import { AuthService } from '@shared/@services/auth/auth.service';
import { MessageService } from '@shared/@services/messages/message.service';
import { AppValidators } from '@shared/@validators';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends BaseComponent {

  private _authService = inject(AuthService)
  private _messageService = inject(MessageService)

  form!: FormGroup;

  hide = true;
  isLoading = false;
  isDialogOpen = false;

  constructor(
  ) {
    super();
    this.initForm();

  }

  initForm() {
    this.form = this._formBuilder.group({
      email: [null, [Validators.email]],
      password: [null, [
        Validators.required,
        AppValidators.uppercaseValidator,
        AppValidators.lowercaseValidator,
        AppValidators.digitsValidator,
        AppValidators.specialCharacterValidator,
        AppValidators.minimumLengthValidator
      ]],
      name: [null, [Validators.required]],
    })
  }


  switchLanguage(lang: string) {
    this.systemService.switchSystemLanguage(lang);
  }


  signUp() {

    if (this.form.invalid) return;

    this.isLoading = true;

    let data = this.form.getRawValue();

    this._authService.signUp(data)

      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this._messageService.showSuccess()
          this.router.navigateByUrl('main/home');
        },
        error: (err) => {
          let message = err?.message;
          this._messageService.showError(message);
        }
      }

      )


  }

}
