import type { FC, Component } from 'react';

export interface Index<Value = any> {
	[key: string]: Value;
}

export type Class<C = any> = {
	new (...args: any[]): C;
};

export interface AppDefaultProps {
	modules: Index<FC & Component>;
}
