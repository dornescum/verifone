import React from 'react';

const Basket = (props) => {
	const { cartItems, onAdd, onRemove } = props;
	const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

	console.log(typeof itemsPrice);
	return (
		<div>
			{cartItems.length === 0 && <div>Cart is empty</div>}
			{cartItems.map((item) => (
				<div key={item.id} className="">
					<div className="">{item.name}</div>
					<div className="">
						<button onClick={() => onRemove(item)} className="remove">
							-
						</button>{' '}
						<button onClick={() => onAdd(item)} className="add">
							+
						</button>
					</div>

					<div className=" text-right">
						{item.qty} x ${item.price.toFixed(2)}
					</div>
				</div>
			))}

			{cartItems.length !== 0 && (
				<>
					<hr></hr>
					<div className="">
						<div className="">Items Price</div>
						<div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
					</div>



					<div className="">
						<div className="">
							<strong>Total Price</strong>
						</div>
						<div className="col-1 text-right">
							{/*<strong>${totalPrice.toFixed(2)}</strong>*/}
						</div>
					</div>
					<hr />

				</>
			)}
		</div>
	);
};

export default Basket;
