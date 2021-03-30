import React from "react"
import styled from "@emotion/styled"
import { Helmet } from "react-helmet"

const PROJECT_SETTINGS = {
	name: "Name",
	meta: "Desc"
}

const Container = styled.div`
	background-color: pink;
`

function App() {
	return (
		<Container>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{PROJECT_SETTINGS.name}</title>
				<meta name="description" content={PROJECT_SETTINGS.meta} />
			</Helmet>

			<h1>Hello theres world</h1>
		</Container>
	)
}

export default App
