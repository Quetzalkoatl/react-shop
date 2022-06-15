import {useEffect, useState} from 'react';
import {API_KEY, API_URL} from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';

const Shop = () => {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState([]);
	const [isBasketShow, setBasketShow] = useState(false);

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

	const addToBasket = item => {
		const itemIntex = order.findIndex(orderItem => orderItem.id === item.id);

		if (itemIntex < 0) {
			const newItem = {
				...item,
				quantity: 1,
			};

			setOrder([...order, newItem]);
		} else {
			const newOrder = order.map((orderItem, index) => {
				if (index === itemIntex) {
					return {
						...orderItem,
						quantity: orderItem.quantity + 1,
					};
				} else {
					return orderItem;
				}
			});

			setOrder(newOrder);
		}
	};

	const removeFromBasket = itemId => {
		const newOrder = order.filter(item => item.id !== itemId);

		setOrder(newOrder);
	};

	const handleBasketShow = () => {
		setBasketShow(!isBasketShow);
	};

	const incQuantity = itemId => {
		const newOrder = order.map(elem => {
			if (elem.id === itemId) {
				const newQuantity = elem.quantity + 1;
				return {
					...elem,
					quantity: newQuantity,
				};
			} else {
				return elem;
			}
		});

		setOrder(newOrder);
	};

	const decQuantity = itemId => {
		const newOrder = order.map(elem => {
			if (elem.id === itemId) {
				const newQuantity = elem.quantity - 1;
				return {
					...elem,
					quantity: newQuantity > 0 ? newQuantity : 0,
				};
			} else {
				return elem;
			}
		});

		setOrder(newOrder);
	};

	return (
		<main className='container content'>
			<Cart
				quantity={order.length || '0'}
				handleBasketShow={handleBasketShow}
			/>
			{loading ? (
				<Preloader />
			) : (
				<GoodsList goods={goods} addToBasket={addToBasket} />
			)}
			{isBasketShow && (
				<BasketList
					order={order}
					handleBasketShow={handleBasketShow}
					removeFromBasket={removeFromBasket}
					incQuantity={incQuantity}
					decQuantity={decQuantity}
				/>
			)}
		</main>
	);
};

export default Shop;
