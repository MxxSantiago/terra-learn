import { Actions } from '@core/common/classes';
import { Inject } from '@core/decorators/inject';
import type { AuthService } from '../auth/auth.service';

export class MainActions extends Actions {
	@Inject()
	private authService: AuthService;
}
