import { Metadata } from '@core/common/enums';

export function Inject(): PropertyDecorator {
	return function (target: any, key: string | symbol) {
		const designType = Reflect.getMetadata(Metadata.DESIGN_TYPE, target, key);
		const keys = Reflect.getMetadata(Metadata.PROVIDER_PROPERTIES, target) || [];
		Reflect.defineMetadata(Metadata.PROVIDER_PROPERTIES, [...keys, { key, designType }], target);
	};
}
