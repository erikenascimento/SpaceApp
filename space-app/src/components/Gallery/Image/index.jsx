import styled from "styled-components";
import IconButton from "../../IconButton";

const StyledFigure = styled.figure`
	width: ${props => (props.$expanded ? "90%" : "460px")};
	max-width: 100%;
	margin: 0;
	display: flex;
	flex-direction: column;
	& > img {
		max-width: 100%;
		border-radius: 20px 20px 0 0;
	}
	figcaption {
		background-color: #001634;
		border-radius: 0px 0px 20px 20px;
		color: white;
		box-sizing: border-box;
		padding: 12px;
		h3 {
			font-family: "GandhiSansBold";
		}
		h4 {
			flex-grow: 1;
		}
		h3,
		h4 {
			margin: 0;
			font-size: 16px;
		}
	}
`;

const StyledFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Image = ({
	photo,
	expanded = false,
	onZoomRequired,
	onFavoriteToggle,
}) => {
	return (
		<StyledFigure $expanded={expanded} id={`photo-${photo.id}`}>
			<img src={photo.path} alt={photo.alt} />
			<figcaption>
				<h3>{photo.titulo}</h3>
				<StyledFooter>
					<h4>{photo.fonte}</h4>
					<IconButton onClick={() => onFavoriteToggle(photo)}>
						<img src="/icons/favorito.png" alt="Icone de favorito" />
					</IconButton>
					{!expanded && (
						<IconButton
							aria-hidden={expanded}
							onClick={() => onZoomRequired(photo)}
						>
							<img src="/icons/expandir.png" alt="Icone de expandir" />
						</IconButton>
					)}
				</StyledFooter>
			</figcaption>
		</StyledFigure>
	);
};

export default Image;
