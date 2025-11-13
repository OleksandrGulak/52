import { useAppSelector, useAppDispatch } from '../app/hooks.js';
import {
  cartPageContainer,
  cartContentWrapper,
  cartItemCard,
} from '../features/cart/styles/cartPageStyles.js';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../features/cart/model/cartSlice.js';

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  const isEmpty = items.length === 0;

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main style={cartPageContainer(isEmpty)}>
      {isEmpty ? (
        <h2>🛒 Ваш кошик наразі порожній</h2>
      ) : (
        <div style={cartContentWrapper}>
          <h2>🛍️ Ваші товари</h2>
          {items.map((item) => (
            <div key={item.id} style={cartItemCard}>
              <h3>{item.name}</h3>
              <p>{item.price} ₴ × {item.quantity}</p>
              <p>Разом: {item.price * item.quantity} ₴</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>–</button>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>🗑️</button>
              </div>
            </div>
          ))}
          <h3>Загальна сума: {total} ₴</h3>
        </div>
      )}
    </main>
  );
}