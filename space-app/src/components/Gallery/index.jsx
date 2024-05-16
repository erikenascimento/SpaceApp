import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Populars from "./Populars";
import Image from "./Image";

const GalleryContainer = styled.div`
	display: flex;
	gap: 24px;
`;

const FluidSection = styled.section`
	flex-grow: 1;
`;

const ImagesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 24px;
`;

const Gallery = ({ photos = [], onPhotoSelected, onFavoriteToggle }) => {
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
								onFavoriteToggle={onFavoriteToggle}
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
