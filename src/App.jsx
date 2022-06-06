/* eslint-disable react/no-direct-mutation-state */
import React, {Component} from 'react';
import {Posts} from './components/Posts';

class App extends Component {
	state = {
		count: 0,
		isCounting: false,
		posts: [
			{
				id: 1,
				name: 'Post 1',
			},
			{
				id: 2,
				name: 'Post 2',
			},
			{
				id: 3,
				name: 'Post 3',
			},
		],
	};

	componentDidMount() {
		const getCurrentCount = localStorage.getItem('count');
		if (getCurrentCount) {
			this.setState({count: +getCurrentCount});
		}
	}

	componentDidUpdate() {
		localStorage.setItem('count', this.state.count);
	}

	componentWillUnmount() {
		clearInterval(this.counterID);
	}

	handleStart = () => {
		this.setState({isCounting: true});
		this.counterID = setInterval(() => {
			this.setState({count: this.state.count + 1});
		}, 1000);
	};

	handleStop = () => {
		clearInterval(this.counterID);
		this.setState({isCounting: false});
	};

	handleReset = () => {
		clearInterval(this.counterID);
		this.setState({count: 0, isCounting: false});
		localStorage.setItem('count', 0);
	};

	deletePost = id => {
		this.setState({posts: this.state.posts.filter(post => post.id !== id)});
	};

	render() {
		const {posts} = this.state;

		return (
			<div className='App'>
				<div className='timer' style={timer}>
					<h2>React timer</h2>
					<h1>{this.state.count}</h1>
					{this.state.isCounting ? (
						<button className='btnStop' style={btn} onClick={this.handleStop}>
							Stop
						</button>
					) : (
						<button className='btnStart' style={btn} onClick={this.handleStart}>
							Start
						</button>
					)}
					<button className='btnReset' style={btn} onClick={this.handleReset}>
						Reset
					</button>
					<Posts posts={posts} deletePost={this.deletePost} />
				</div>
			</div>
		);
	}
}

const timer = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
};

const btn = {
	width: '5rem',
	height: '2rem',
	marginBottom: '10px',
};

export default App;
