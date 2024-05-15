import { styled } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/Wrapper";
import banner from "./components/Wrapper/banner.png";
import Gallery from "./components/Gallery";
import photos from "./fotos.json";
import { useState } from "react";
import ZoomDialog from "./components/ZoomDialog";

const GradientBackground = styled.div`
	background: linear-gradient(
		174.61deg,
		#041833 4.16%,
		#04244f 48%,
		#154580 96.76%
	);
	min-height: 100vh;
	width: 100%;
`;

const ContainerApp = styled.div`
	margin: 0 auto;
	max-width: 100%;
	width: 1440px;
`;

const MainContainer = styled.main`
	display: flex;
	gap: 24px;
`;

const GalleryContent = styled.section`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const App = () => {
	const [galleryPhotos, setGalleryPhotos] = useState(photos);
	const [selectedPhoto, setSelectedPhoto] = useState(null);
	return (
		<GradientBackground>
			<GlobalStyles />
			<ContainerApp>
				<Header />
				<MainContainer>
					<Sidebar />
					<GalleryContent>
						<Wrapper
							text="A galeria mais completa de fotos do espaço!"
							backgroundImage={banner}
						/>
						<Gallery
							onPhotoSelected={photo => setSelectedPhoto(photo)}
							photos={galleryPhotos}
						/>
					</GalleryContent>
				</MainContainer>
			</ContainerApp>
			<ZoomDialog
				photo={selectedPhoto}
				onClose={() => setSelectedPhoto(null)}
			/>
		</GradientBackground>
	);
};

export default App;
