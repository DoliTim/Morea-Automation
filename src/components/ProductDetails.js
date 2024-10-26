import React, { useState } from 'react';

function ProductDetails() {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const variants = [
    {
      id: "metallic-black",
      name: "Obsidian Metallic",
      price: 15,
      image: "/images/bag-holder-metallic.jpg",
      description: "A sleek metallic black finish that catches the light with sophisticated elegance. Perfect for modern, luxurious settings.",
      color: "Metallic Black",
      gradient: "bg-gradient-to-r from-gray-600 to-gray-800",
      sku: "MBH-001",
      stock: 50,
      stripeLink: "https://buy.stripe.com/eVabJC6jNgO4bQIfYZ"
    },
    {
      id: "matte-black",
      name: "Shadow Matte",
      price: 20,
      image: "/images/bag-holder-matte.jpg",
      description: "Premium stealth matte black finish for a contemporary, understated luxury look. The perfect blend of sophistication and minimalism.",
      color: "Matte Black",
      gradient: "bg-gray-900",
      sku: "MBH-002",
      stock: 50,
      stripeLink: "https://buy.stripe.com/eVabJC6jNgO4bQIfYZ"
    },
    {
      id: "rose-gold",
      name: "Aurora Rose",
      price: 15,
      image: "/images/bag-holder-rose.jpg",
      description: "Stunning rose gold finish that brings warmth and feminine elegance to any setting. A perfect blend of luxury and style.",
      color: "Rose Gold",
      gradient: "bg-gradient-to-r from-rose-300 to-rose-400",
      sku: "MBH-003",
      stock: 50,
      stripeLink: "https://buy.stripe.com/eVabJC6jNgO4bQIfYZ"
    }
  ];

  const handleQuantityChange = (action) => {
    if (action === 'increase' && quantity < variants[selectedVariant].stock) {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = variants[selectedVariant].price * quantity;
  const isEligibleForFreeShipping = totalPrice >= 30;

  const handleCheckout = () => {
    // Redirect to Stripe checkout page
    window.location.href = variants[selectedVariant].stripeLink;
  };

  return (
    <section className="py-20 bg-white" id="product-details">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src={variants[selectedVariant].image}
                alt={variants[selectedVariant].name}
                className="rounded-2xl shadow-xl w-full"
              />
              {variants[selectedVariant].stock < 10 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  Only {variants[selectedVariant].stock} left!
                </div>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {variants.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedVariant(index)}
                  className={`rounded-lg p-2 transition-all ${
                    selectedVariant === index
                      ? 'ring-2 ring-gray-800'
                      : 'hover:ring-2 hover:ring-gray-400'
                  }`}
                >
                  <img
                    src={variant.image}
                    alt={variant.name}
                    className="rounded-lg"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <div className="sticky top-8">
              <h2 className="text-3xl font-bold mb-4">MOREA Bag Holder</h2>
              <h3 className="text-2xl text-gray-800 mb-4">
                {variants[selectedVariant].name}
              </h3>
              <div className="flex items-center justify-between mb-6">
                <p className="text-2xl font-bold">
                  €{variants[selectedVariant].price}
                </p>
                <p className="text-sm text-gray-500">
                  SKU: {variants[selectedVariant].sku}
                </p>
              </div>
              
              <p className="text-gray-600 mb-6">
                {variants[selectedVariant].description}
              </p>

              {/* Color Selection */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-4">Finish</h4>
                <div className="flex space-x-4">
                  {variants.map((variant, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVariant(index)}
                      className={`
                        group relative flex flex-col items-center
                        ${selectedVariant === index ? 'opacity-100' : 'opacity-70 hover:opacity-100'}
                      `}
                    >
                      <div
                        className={`
                          w-12 h-12 rounded-full flex items-center justify-center
                          ${selectedVariant === index ? 'ring-2 ring-gray-800 ring-offset-2' : ''}
                          ${variant.gradient}
                        `}
                      />
                      <span className="mt-2 text-sm text-gray-700">
                        {variant.color}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-4">Quantity</h4>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange('decrease')}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    disabled={quantity <= 1}
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/>
                    </svg>
                  </button>
                  <span className="text-gray-900 font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange('increase')}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    disabled={quantity >= variants[selectedVariant].stock}
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <button 
                onClick={handleCheckout}
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors duration-300 mb-4"
              >
                Checkout - €{totalPrice.toFixed(2)}
              </button>

              {/* Shipping Info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <span>
                    {isEligibleForFreeShipping 
                      ? "✨ Free shipping included!" 
                      : `Add €${(30 - totalPrice).toFixed(2)} more for free shipping`}
                  </span>
                </div>
              </div>

              {/* Product Features */}
              <div className="border-t pt-6 mt-6">
                <h4 className="font-medium mb-4">Premium Features:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>High-grade aluminum construction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Scratch-resistant finish</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Soft protective padding</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Universal table edge fit</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Elegant minimalist design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;