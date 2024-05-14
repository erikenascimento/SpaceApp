import styled from "styled-components";

const StyledListItem = styled.li``;

const NavigationItem = ({
	children,
	activeIcon,
	inactiveIcon,
	active = false,
}) => {
	return (
		<StyledListItem>
			<img src={active ? activeIcon : inactiveIcon} alt="Ícone do item" />
			{children}
		</StyledListItem>
	);
};

export default NavigationItem;
