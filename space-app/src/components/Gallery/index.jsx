import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Populars from "./Populars";

const GalleryContainer = styled.div`
	display: flex;
`;

const FluidSection = styled.section`
	flex-grow: 1;
`;

const Gallery = () => {
	return (
		<>
			<Tags></Tags>
			<GalleryContainer>
				<FluidSection>
					<Title>Navegue pela galeria</Title>
				</FluidSection>
				<Populars />
			</GalleryContainer>
		</>
	);
};

export default Gallery;
