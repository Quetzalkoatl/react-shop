import {Post} from './Post';

export function Posts(props) {
	return (
		<div>
			{props.posts.map(post => {
				return (
					<Post
						key={post.id}
						id={post.id}
						name={post.name}
						deletePost={props.deletePost}
					/>
				);
			})}
		</div>
	);
}
