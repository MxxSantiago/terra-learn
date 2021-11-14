import type { Class } from '@core/types/common';

export function selectorsFactory<Selectors>(selectors: Class<Selectors>): Selectors {
	return new selectors();
}
