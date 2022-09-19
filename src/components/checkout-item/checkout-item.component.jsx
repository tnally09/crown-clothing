import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { 
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton
} from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
    const { imageUrl, name, quantity, price } = cartItem

    const decrementItem = () => removeItemFromCart(cartItem);
    const incrementItem = () => addItemToCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);
    
    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan> {name} </BaseSpan>
            <Quantity> 
                <Arrow onClick={decrementItem}>&#10094;</Arrow>
                <Value> {quantity} </Value>
                <Arrow onClick={incrementItem}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan> {price} </BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;