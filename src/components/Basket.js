import React from 'react';

const Basket = (props) => {
	const {cartItems, onAdd, onRemove} = props;
	const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

	return (
		<div className="p-8 m-4 bg-zinc-100 border">
			<h3>Products in your shopping cart</h3>
			{/*{cartItems.length === 0 && <div>Cart is empty</div>}*/}

			<table className="table-auto w-full">
				<thead className="border-b">
				<tr>
					<th className="text-left">Product</th>
					<th className="text-right">Quantity</th>
					<th className="text-right">Value</th>
				</tr>
				</thead>
				<tbody>
				{/*{cartItems.map((item) => (*/}
				{/*	<tr className="" key={item.id}>*/}
				{/*		<td>{item.name}</td>*/}
				{/*		<td className="text-right">*/}
				{/*			<div className='bg-white'>*/}
				{/*				{item.qty} x ${item.price.toFixed(2)}*/}
				{/*				<button onClick={() => onRemove(item)} className="remove">-</button>*/}
				{/*				<button onClick={() => onAdd(item)} className="remove">+</button>*/}
				{/*			</div>*/}


				{/*			</td>*/}
				{/*		/!*<td className="text-right"><input type="number"  placeholder={item.qty}*!/*/}
				{/*		/!*								  onKeyDown={() => onRemove(item)}/></td>*!/*/}


				{/*		<td className="text-right">${itemsPrice.toFixed(2)}</td>*/}
				{/*	</tr>*/}
				{/*))}*/}
				</tbody>
			</table>

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
						{/*<div className="">*/}
						{/*	<strong>Total Price</strong>*/}
						{/*</div>*/}
						<div className="col-1 text-right">
							{/*<strong>${totalPrice.toFixed(2)}</strong>*/}
						</div>
					</div>
					<hr/>

				</>
			)}
		</div>
	);
};

export default Basket;
