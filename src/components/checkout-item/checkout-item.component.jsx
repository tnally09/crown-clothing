import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

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
    const { imageUrl, name, quantity, price } = cartItem
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const decrementItem = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const incrementItem = () => dispatch(addItemToCart(cartItems, cartItem));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    
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