import { moduleContext } from '@core/context/module';

export function getActions<T = any>(moduleToken: string): T {
	const { actions } = moduleContext.get(moduleToken);
	return actions;
}

export function getSelector<T = any>(moduleToken: string): T {
	const { selectors } = moduleContext.get(moduleToken);
	return selectors;
}
