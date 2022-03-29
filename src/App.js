import React, {useEffect, useState} from "react";
import Products from "./components/Products";
import Basket from "./components/Basket";

function App() {
	const [products, setProducts] =useState([])
	const [cartItems, setCartItems] = useState([]);

	const URL = 'http://private-32dcc-products72.apiary-mock.com/product';
	const getData = async () => {
		const res = await fetch(URL);
		const data = await res.json();
		setProducts(data);

	};
	useEffect(() => {
		getData();
	}, []);


	const onAdd = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist) {
			setCartItems(
				cartItems.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
				)
			);
		} else {
			setCartItems([...cartItems, { ...product, qty: 1 }]);
		}
	};
	const onRemove = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist.qty === 1) {
			setCartItems(cartItems.filter((x) => x.id !== product.id));
		} else {
			setCartItems(
				cartItems.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
				)
			);
		}
	};

	return (
		<main className="pt-40 bg-slate-50 min-h-screen font-rubik">
			<section className="mx-96  mt-4 mb-4 flex flex-col md:flex-row  justify-center items-center">
				<div className="basis-1/2">
					<Products products={products} onAdd={onAdd}/>
				</div>
				<div className="basis-1/2 ">
					<Basket
					    cartItems={cartItems}
					    onAdd={onAdd}
					    onRemove={onRemove}
					/>
				</div>

			</section>
		</main>
	);
}

export default App;
