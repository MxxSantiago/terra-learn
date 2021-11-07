export class Registry<T> {
	private store: { [key: string]: T };

	public constructor() {
		this.store = {};
	}

	public register(key: string, value: T) {
		this.store[key] = value;
	}

	public get(key: string): T {
		return this.store[key];
	}

	public getAll() {
		return this.store;
	}
}
