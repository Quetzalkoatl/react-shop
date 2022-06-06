export function Post(props) {
	const {id, name, deletePost} = props;

	return (
		<h2>
			{name}{' '}
			<button
				onClick={() => {
					deletePost(id);
				}}
			>
				delete
			</button>
		</h2>
	);
}
