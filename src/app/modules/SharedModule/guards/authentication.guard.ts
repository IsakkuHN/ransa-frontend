import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../AuthModule/services/auth.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const isAuthenticated = AuthService.isUserAuthenticated();
  if (isAuthenticated) {
    return true;
  } else {
    router.navigate(['/auth']);
    return false;
  }
};
