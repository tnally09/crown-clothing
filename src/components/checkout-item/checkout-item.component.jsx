import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { CheckoutItemContainer } from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
    const { imageUrl, name, quantity, price } = cartItem

    const decrementItem = () => removeItemFromCart(cartItem);
    const incrementItem = () => addItemToCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);
    
    return(
        <CheckoutItemContainer>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'> 
                <div className='arrow' onClick={decrementItem}>&#10094;</div>
                <span className='value'> {quantity} </span>
                <div className='arrow' onClick={incrementItem}>&#10095;</div>
            </span>
            <span className='price'> {price} </span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;