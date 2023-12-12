import Head from 'next/head'
import dynamic from 'next/dynamic'
import '/public/fonts.css'
import React from 'react'
import { AppProps } from 'next/app'
const GlobalStyle = dynamic(() => import('./GlobalStyle'))

const App = ({ Component }: AppProps<any>) => {
	return (
		<>
			<Head>
				<title>청첩장</title>
			</Head>
			<GlobalStyle />
			<Component />
		</>
	)
}

export default App
