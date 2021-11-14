import { moduleContext } from '@core/context/module';
import type { Class } from '@core/types/common';

export function providersFactory(providers: Array<Class>, imports: Array<string>) {
	const localProviders = providers.reduce((prev, provider) => {
		return {
			...prev,
			[provider.name]: new provider(),
		};
	}, {});

	const importedProviders = imports.reduce((prev, _import) => {
		const { exports } = moduleContext.get(_import);
		return {
			...prev,
			...exports,
		};
	}, {});

	return {
		...localProviders,
		...importedProviders,
	};
}
