import GoodsItem from './GoodsItem';

const GoodsList = ({goods, addToBasket = Function.prototype}) => {
	if (!goods.length) {
		return <h3>Nothing here</h3>;
	}

	return (
		<div className='goods'>
			{goods.map(item => {
				return <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />;
			})}
		</div>
	);
};

export default GoodsList;
