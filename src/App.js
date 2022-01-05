import Header from './components/Header'
import Main from './components/Main'
import Basket from './components/Basket'
import data from './data'
import { useState } from 'react'

function App() {
	const { products } = data
	const [cartItems, setCartItems] = useState([])

	const onAdd = product => {
		const exist = cartItems.find(item => item.id === product.id)
		if (exist) {
			setCartItems(
				cartItems.map(item =>
					item.id === product.id ? { ...exist, qnt: exist.qnt + 1 } : item
				)
			)
		} else {
			setCartItems([...cartItems, { ...product, qnt: 1 }])
		}
	}

	const onRemove = product => {
		const exist = cartItems.find(item => item.id === product.id)
		if (exist.qnt === 1) {
			setCartItems(cartItems.filter(item => item.id !== product.id))
		} else {
			setCartItems(
				cartItems.map(item =>
					item.id === product.id ? { ...exist, qnt: exist.qnt - 1 } : item
				)
			)
		}
	}

	console.log('cartItems in App.js', cartItems)
	return (
		<div className="App">
			<Header countCartItems={cartItems.length} />
			<div className="row">
				<Main products={products} onAdd={onAdd} />
				<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
			</div>
		</div>
	)
}

export default App
