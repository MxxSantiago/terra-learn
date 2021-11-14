import { Index } from '@core/types/common';

export class Context<T> {
	private store: Index<T>;

	public constructor() {
		this.store = {};
	}

	public set(key: string, value: T) {
		this.store[key] = value;
	}

	public get(key: string): T {
		return this.store[key];
	}

	public getAll() {
		return this.store;
	}
}
