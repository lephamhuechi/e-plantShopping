import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Tổng tiền toàn giỏ
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.quantity * parseFloat(item.cost.substring(1));
    });
    return total;
  };

  // Tiếp tục mua sắm
  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  // Thanh toán
  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  // Tăng số lượng
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Giảm số lượng (về 0 thì xóa)
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Xóa
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Tổng tiền từng loại cây
  const calculateTotalCost = (item) => {
    return item.quantity * parseFloat(item.cost.substring(1));
  };

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleContinueShopping}>Continue Shopping</button>
      <button onClick={handleCheckoutShopping}>Checkout</button>
    </div>
  );
};

export default CartItem;