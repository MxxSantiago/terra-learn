import { applicationFactory } from '@core/common/factory';

import App from '@/app';

import { mainModule } from '@/modules/main/main.module';

export const { application, store } = applicationFactory({
	component: App,
	moduleTokens: [mainModule],
});
