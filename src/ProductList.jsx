import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const CartItems = useSelector((state) => state.cart.items);

  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(true);
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produces oxygen at night, improving air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Filters formaldehyde and xylene from the air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description: 'Removes mold spores and purifies the air.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
          description: 'Adds humidity to the air and removes toxins.',
          cost: '$20',
        },
        {
          name: 'Rubber Plant',
          image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description: 'Easy to care for and effective at removing toxins.',
          cost: '$17',
        },
        {
          name: 'Aloe Vera',
          image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'Purifies the air and has healing gel for burns.',
          cost: '$14',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1589296986498-28cd9406425d?w=500',
          description: 'Calming scent, used in aromatherapy.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?w=500',
          description: 'Sweet fragrance, promotes relaxation.',
          cost: '$18',
        },
        {
          name: 'Rosemary',
          image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description: 'Invigorating scent, often used in cooking.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
          description: 'Refreshing aroma, used in teas and cooking.',
          cost: '$12',
        },
        {
          name: 'Lemon Balm',
          image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
          description: 'Citrusy scent, relieves stress and anxiety.',
          cost: '$14',
        },
        {
          name: 'Catnip',
          image: 'https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg',
          description: 'Fragrant herb that cats love.',
          cost: '$13',
        },
      ],
    },
    {
      category: 'Medicinal Plants',
      plants: [
        {
          name: 'Echinacea',
          image: 'https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg',
          description: 'Boosts the immune system.',
          cost: '$16',
        },
        {
          name: 'Peppermint',
          image: 'https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg',
          description: 'Relieves digestive issues and headaches.',
          cost: '$13',
        },
        {
          name: 'Chamomile',
          image: 'https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg',
          description: 'Soothing tea for sleep and stress relief.',
          cost: '$15',
        },
        {
          name: 'Calendula',
          image: 'https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg',
          description: 'Heals skin wounds and reduces inflammation.',
          cost: '$14',
        },
        {
          name: 'Marigold',
          image: 'https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg',
          description: 'Anti-inflammatory and good for skin care.',
          cost: '$12',
        },
        {
          name: 'Basil',
          image: 'https://cdn.pixabay.com/photo/2015/09/09/17/38/basil-932079_1280.jpg',
          description: 'Has antibacterial properties, also used in cooking.',
          cost: '$10',
        },
      ],
    },
  ];

  // ---------- Điều hướng ----------
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onHomeClick) onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
    setShowPlants(false);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true);
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
    setShowPlants(true);
  };

  // ---------- Giỏ hàng ----------
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  const calculateTotalQuantity = () => {
    return CartItems ? CartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  // ---------- Style navbar ----------
  const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
  };
  const styleObjUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
  };
  const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
  };

  return (
    <div>
      {/* Navbar: hiển thị cả ở trang Plants lẫn trang Cart */}
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <a href="/" onClick={handleHomeClick} style={{ textDecoration: 'none', color: 'white' }}>
              <div>
                <h3 style={{ color: 'white', margin: 0 }}>Paradise Nursery</h3>
                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>

        <div style={styleObjUl}>
          <div>
            <a href="#" onClick={handlePlantsClick} style={styleA}>Plants</a>
          </div>
          <div style={{ position: 'relative' }}>
            <a href="#" onClick={handleCartClick} style={styleA}>
              <h1 className="cart" style={{ margin: 0, position: 'relative' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="IconChangeColor"
                  height="68"
                  width="68"
                >
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                    fill="none"
                    stroke="#faf9f9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                    id="mainIconPathAttribute"
                  ></path>
                </svg>
                <span
                  className="cart_quantity_count"
                  style={{
                    position: 'absolute',
                    top: '9px',
                    left: '0',
                    right: '0',
                    textAlign: 'center',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    color: '#faf9f9',
                  }}
                >
                  {calculateTotalQuantity()}
                </span>
              </h1>
            </a>
          </div>
        </div>
      </div>

      {/* Trang danh sách cây */}
      {showPlants && (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1>
                <div>{category.category}</div>
              </h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                    />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-cost">{plant.cost}</div>
                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                      style={
                        addedToCart[plant.name]
                          ? { backgroundColor: '#999', cursor: 'not-allowed' }
                          : {}
                      }
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Trang giỏ hàng */}
      {showCart && <CartItem onContinueShopping={handleContinueShopping} />}
    </div>
  );
}

export default ProductList;