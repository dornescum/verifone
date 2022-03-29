import Product from "./Product";

export default function Main(props) {
	const { products, onAdd } = props;
	return (
		<article className="block">
			<h2 className='m-2'>Checkout page</h2>
			<div className="flex flex-col" >
				{products.map((product) => (
					<Product key={product.id} product={product} onAdd={onAdd} />
				))}
			</div>
		</article>
	);
}
