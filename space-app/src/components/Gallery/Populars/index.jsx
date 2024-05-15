import { styled } from "styled-components";
import Title from "../../Title";

import photos from "./fotos-populares.json";

const PhotosColumn = styled.section`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const StyledImage = styled.img`
	max-width: 212px;
	border-radius: 20px;
`;

const StyledButton = styled.button`
	background-color: transparent;
	color: #fff;
	border: 2px solid;
	border-color: #c98cf1;
	padding: 12px 20px;
	font-size: 20px;
	border-radius: 10px;
	cursor: pointer;
	width: 100%;
	margin-top: 16px;
`;

const Populars = () => {
	return (
		<section>
			<Title $alignment="center">Populares</Title>
			<PhotosColumn>
				{photos.map(photo => (
					<StyledImage key={photo.id} src={photo.path} alt={photo.alt} />
				))}
			</PhotosColumn>
			<StyledButton>Ver mais</StyledButton>
		</section>
	);
};

export default Populars;
