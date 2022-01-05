import React from 'react'

function Basket(props) {
	const { cartItems, onAdd, onRemove } = props
	const itemsPrice = cartItems.reduce(
		(accumulator, currentItem) =>
			accumulator + currentItem.price * currentItem.qnt,
		0
	)
	const taxPrice = itemsPrice * 0.14
	const shippingPrice = itemsPrice > 2000 ? 0 : 50
	const totalPrice = itemsPrice + taxPrice + shippingPrice
	return (
		<aside className="block column-1">
			<h2>Cart Items</h2>
			<div>
				{/* when cart item is 0 render this <div> */}
				{cartItems.length === 0 && <div>Cart Is Empty</div>}
			</div>
			{cartItems.map(item => (
				<div key={item.id} className="row">
					<div className="column-2">{item.name}</div>
					<div className="column-2">
						<button onClick={() => onAdd(item)} className="add">
							+
						</button>
						<button onClick={() => onRemove(item)} className="remove">
							-
						</button>
					</div>
					<div className="column-2 text-right">
						{item.qnt} x £{item.price.toFixed(2)}
					</div>
				</div>
			))}
			{cartItems.length != 0 && (
				<>
					<hr></hr>
					<div className="row">
						<div className="column-2">Item Price</div>
						<div className="column-1 text-right">£{itemsPrice.toFixed(2)}</div>
					</div>
					<div className="row">
						<div className="column-2">Tax Price</div>
						<div className="column-1 text-right">£{taxPrice.toFixed(2)}</div>
					</div>
					<div className="row">
						<div className="column-2">Shipping Price</div>
						<div className="column-1 text-right">
							£{shippingPrice.toFixed(2)}
						</div>
					</div>
					<div className="row">
						<div className="column-2">
							<strong>Total Price</strong>
						</div>
						<div className="column-1 text-right">
							<strong>£{totalPrice.toFixed(2)}</strong>
						</div>
					</div>
					<hr />
					<div className="row">
						<button onClick={() => alert('Implement Checkout')}>
							Checkout
						</button>
					</div>
				</>
			)}
		</aside>
	)
}

export default Basket
