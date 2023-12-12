import Head from 'next/head'
import dynamic from 'next/dynamic'
import '/public/fonts.css'
import React from 'react'
const GlobalStyle = dynamic(() => import('./GlobalStyle'))

const App = ({ Component }) => {
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
