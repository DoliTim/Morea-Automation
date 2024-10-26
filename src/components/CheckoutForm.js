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
          {/* ... (keep the existing product image section) ... */}

          {/* Product Info */}
          <div className="lg:w-1/2">
            <div className="sticky top-8">
              {/* ... (keep the existing product info section) ... */}

              {/* Checkout Button */}
              <button 
                onClick={handleCheckout}
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors duration-300 mb-4"
              >
                Checkout - €{totalPrice.toFixed(2)}
              </button>

              {/* ... (keep the existing shipping info and product features sections) ... */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;