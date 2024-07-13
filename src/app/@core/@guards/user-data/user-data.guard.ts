import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@shared/@services/auth/auth.service';
import { lastValueFrom } from 'rxjs';

export const userDataGuard: CanActivateFn = async (route, state) => {

  const authService = inject(AuthService)

  try {
    let currentUser = authService.currentUser

    if (!currentUser && authService.hasToken)
      authService.currentUser = await lastValueFrom(authService.getLoggedInUser())

  } catch (error) {
    authService.kickOut();
    return false;
  }

  return true;

};
