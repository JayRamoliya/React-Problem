import React from 'react'
import { useCart } from '../context/CartContext'

const Cart = () => {
    const { cartState, cartDispatch } = useCart()
    const products = [
        { id: 1, name: 'product 1' },
        { id: 2, name: 'product 2' },
        { id: 3, name: 'product 3' },
        { id: 4, name: 'product 4' },
    ]

    const addtocart = (item) => {
        const existingCartitem = cartState.cartitems.find((cartitem) => cartitem.id === item.id)
        
        if (existingCartitem) {
            cartDispatch({
                type: 'UPDATE_QUANTITY', payload: {
                    id: item.id, quantity:
                        existingCartitem.quantity + 1
                }
            })
        } else {
            cartDispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity: 1 } })
        }
    }


    const updatequantity = (itemid, quantity) => {
        if (quantity > 0) {
            cartDispatch({
                type: 'UPDATE_QUANTITY', payload: {
                    id: itemid, quantity
                }
            })

        }
    }


    const removecart = (itemid) => {
        cartDispatch({ type: 'REMOVE_FROM_CART', payload: itemid })
    }


    return (
        <>
            <hr />
            <h1>Cart</h1>
            <ul>
                {cartState.cartitems.map((item) => (
                    <li key={item.id}>{item.name} - {item.quantity}
                        <button onClick={() => updatequantity(item.id, item.quantity + 1)}>+</button>
                        <button onClick={() => removecart(item.id)}>Remove</button>
                        <button onClick={() => updatequantity(item.id, item.quantity - 1)}>-</button>
                    </li>
                ))}
            </ul>

            <br />
            <hr />
            <h2>Product list</h2>
            <ul>
                {
                    products.map((product) => (
                        <li key={product.id}>
                            {product.name}
                            <button onClick={() => addtocart(product)}>Add to cart</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Cart