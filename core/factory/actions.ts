import type { Class } from '@core/types/common';

export function actionsFactory<Actions>(actions: Class<Actions>): Actions {
	return new actions();
}
