const ZoomDialog = ({ photo }) => {
	return (
		<>
			<dialog open={!!photo}>
				<p>Greeting</p>
				<form method="dialog">
					<button>Ok</button>
				</form>
			</dialog>
		</>
	);
};

export default ZoomDialog;
