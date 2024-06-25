// import React from 'react'
// import { useCart } from '../context/CartContext'

// const Cart = () => {
//     const { cartState, cartDispatch } = useCart()
//     const products = [
//         { id: 1, name: 'product 1' },
//         { id: 2, name: 'product 2' },
//         { id: 3, name: 'product 3' },
//         { id: 4, name: 'product 4' },
//     ]

//     const addtocart = (item) => {
//         const existingCartitem = cartState.cartitems.find((cartitem) => cartitem.id === item.id)
        
//         if (existingCartitem) {
//             cartDispatch({
//                 type: 'UPDATE_QUANTITY', payload: {
//                     id: item.id, quantity:
//                         existingCartitem.quantity + 1
//                 }
//             })
//         } else {
//             cartDispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity: 1 } })
//         }
//     }


//     const updatequantity = (itemid, quantity) => {
//         if (quantity > 0) {
//             cartDispatch({
//                 type: 'UPDATE_QUANTITY', payload: {
//                     id: itemid, quantity
//                 }
//             })

//         }
//     }


//     const removecart = (itemid) => {
//         cartDispatch({ type: 'REMOVE_FROM_CART', payload: itemid })
//     }


//     return (
//         <>
//             <hr />
//             <h1>Cart</h1>
//             <ul>
//                 {cartState.cartitems.map((item) => (
//                     <li key={item.id}>{item.name} - {item.quantity}
//                         <button onClick={() => updatequantity(item.id, item.quantity + 1)}>+</button>
//                         <button onClick={() => removecart(item.id)}>Remove</button>
//                         <button onClick={() => updatequantity(item.id, item.quantity - 1)}>-</button>
//                     </li>
//                 ))}
//             </ul>

//             <br />
//             <hr />
//             <h2>Product list</h2>
//             <ul>
//                 {
//                     products.map((product) => (
//                         <li key={product.id}>
//                             {product.name}
//                             <button onClick={() => addtocart(product)}>Add to cart</button>
//                         </li>
//                     ))
//                 }
//             </ul>
//         </>
//     )
// }

// export default Cart


import React from 'react';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';

const Container = styled.div`
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
`;

const Section = styled.section`
    margin: 20px 0;
`;

const Title = styled.h1`
    font-size: 1.8em;
    color: #333;
`;

const SubTitle = styled.h2`
    font-size: 1.5em;
    color: #555;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 10px 0;
`;

const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9f9f9;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
`;

const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    margin: 0 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }

    &:focus {
        outline: none;
    }
`;

const Cart = () => {
    const { cartState, cartDispatch } = useCart();
    const products = [
        { id: 1, name: 'product 1' },
        { id: 2, name: 'product 2' },
        { id: 3, name: 'product 3' },
        { id: 4, name: 'product 4' },
    ];

    const addtocart = (item) => {
        const existingCartItem = cartState.cartitems.find((cartItem) => cartItem.id === item.id);
        
        if (existingCartItem) {
            cartDispatch({
                type: 'UPDATE_QUANTITY', payload: {
                    id: item.id, quantity: existingCartItem.quantity + 1,
                },
            });
        } else {
            cartDispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity: 1 } });
        }
    };

    const updateQuantity = (itemId, quantity) => {
        if (quantity > 0) {
            cartDispatch({
                type: 'UPDATE_QUANTITY', payload: {
                    id: itemId, quantity,
                },
            });
        }
    };

    const removeCart = (itemId) => {
        cartDispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    };

    return (
        <Container>
            <Section>
                <Title>Cart</Title>
                <List>
                    {cartState.cartitems.map((item) => (
                        <ListItem key={item.id}>
                            {item.name} - {item.quantity}
                            <div>
                                <Button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                                <Button onClick={() => removeCart(item.id)}>Remove</Button>
                                <Button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                            </div>
                        </ListItem>
                    ))}
                </List>
            </Section>

            <Section>
                <SubTitle>Product List</SubTitle>
                <List>
                    {products.map((product) => (
                        <ListItem key={product.id}>
                            {product.name}
                            <Button onClick={() => addtocart(product)}>Add to cart</Button>
                        </ListItem>
                    ))}
                </List>
            </Section>
        </Container>
    );
};

export default Cart;
