import	React	from	'react';
import	Head	from	'next/head';

import	'style/Default.css';
import	'tailwindcss/tailwind.css';

function	MyApp(props) {
	const	{Component, pageProps} = props;
	
	return (
		<>
			<Head>
				<title>{'Building With Yearn - Explained'}</title>
				<link rel={'icon'} href={'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💙</text></svg>'} />
				<meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
				<meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
				<meta name={'description'} content={'Experimental Experiments Registry'} />
				<meta name={'msapplication-TileColor'} content={'#FFB800'} />
				<meta name={'theme-color'} content={'rgb(19,38,75)'} />
				<meta charSet={'utf-8'} />
				<meta name={'robots'} content={'index,nofollow'} />
				<meta name={'googlebot'} content={'index,nofollow'} />
				<meta charSet={'utf-8'} />
			</Head>

			<main aria-label={'app'} id={'app'}>
				<Component
					element={props.element}
					router={props.router}
					{...pageProps} />
			</main>
		</>
	);
}

export default MyApp;
