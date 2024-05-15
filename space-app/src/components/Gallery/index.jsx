import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Populars from "./Populars";
import Image from "./Image";

const GalleryContainer = styled.div`
	display: flex;
`;

const FluidSection = styled.section`
	flex-grow: 1;
`;

const ImagesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Gallery = ({ photos = [], onPhotoSelected }) => {
	return (
		<>
			<Tags />
			<GalleryContainer>
				<FluidSection>
					<Title>Navegue pela galeria</Title>
					<ImagesContainer>
						{photos.map(photo => (
							<Image
								onZoomRequired={onPhotoSelected}
								key={photo.id}
								photo={photo}
							/>
						))}
					</ImagesContainer>
				</FluidSection>
				<Populars />
			</GalleryContainer>
		</>
	);
};

export default Gallery;
