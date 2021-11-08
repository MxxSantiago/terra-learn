import React, { Fragment } from 'react';
import type { FC } from 'react';

interface AppProps {
	modules: { [name: string]: FC<any> };
}

const App: FC<AppProps> = ({ modules }: AppProps) => {
	const { Main } = modules;

	return (
		<Fragment>
			<Main />
		</Fragment>
	);
};

export default App;
