import { styled } from "styled-components";
import TextField from "../TextField";

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 60px 0;

	img {
		max-width: 212px;
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<img src="/images/logo.png" alt="Logo do SpaceApp" />
			<TextField></TextField>
		</StyledHeader>
	);
};

export default Header;
