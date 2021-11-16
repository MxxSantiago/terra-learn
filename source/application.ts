import { applicationFactory } from '@core/common/application';

import App from '@/app';
import { mainModule } from '@/modules/main/main.module';
import { authModule } from '@/modules/auth/auth.module';

export const { application, store } = applicationFactory({
	component: App,
	moduleTokens: [mainModule, authModule],
});
