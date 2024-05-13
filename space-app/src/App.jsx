import { styled } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";

const FundoGradiente = styled.div`
	background: linear-gradient(
		174.61deg,
		#041833 4.16%,
		#04244f 48%,
		#154580 96.76%
	);
	min-height: 100vh;
	width: 100%;
`;

function App() {
	return (
		<>
			<FundoGradiente>
				<GlobalStyles></GlobalStyles>
			</FundoGradiente>
		</>
	);
}

export default App;
