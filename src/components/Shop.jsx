import {useEffect, useState} from 'react';
import {API_KEY, API_URL} from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';

const Shop = () => {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState([]);

	useEffect(function getGoods() {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then(resp => resp.json())
			.then(data => {
				data.featured && setGoods(data.featured);
				setLoading(false);
			});
	}, []);

	return (
		<main className='container content'>
			<Cart quantity={order.length || '0'} />
			{loading ? <Preloader /> : <GoodsList goods={goods} />}
		</main>
	);
};

export default Shop;
