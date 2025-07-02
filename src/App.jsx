import React, { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "MacBook Pro",
    price: 152994.0,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRtxrGwtAEGBOkG0Ou-3_SlNfNey4hTEp5zlXfJ6-8pir4nt9FP-dRXF2POSWfinOFAsZXjenI68Y7oXWpStyUzyEDhHu-RwX7lHH_WXtld4cxEcjH30M4lvA",
    description: "Apple MacBook Pro 16-inch with M1 Pro chip, 16GB RAM, 512GB SSD",
  },
  {
    id: 2,
    name: "MacBook Air",
    price: 95000.0,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTY60dhCYprovjjBy-h3pUwUDyUTMPMYlvWMemf18hcaYK1FoFyfpme863hAkYN3h537dlxvggpiAeOQk8F0YKsjfDOzbX28u2aa7lv_drlzp3_fCi9HU8O5A",
    description: "Apple MacBook Air M1, 8GB RAM, 256GB SSD, Gold",
  },
  {
    id: 3,
    name: "MacBook Pro M4",
    price: 169000.0,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQpHaCU4B0jTiIMCB-7kM6ETH11-_m5v06YCBcUXoOMiRlkd-1rxfuPrkuaN6z4mRYOo0V28f5BlI40zmVm-cDpQD9w3fY6kpOmF_rzNgjLn3UL3TKGprvdgX3zl1r5sFAcLvNWcmQ&usqp=CAc",
    description: "14-inch MacBook Pro with M4 chip, 16GB RAM, 512GB SSD",
  },
  {
    id: 4,
    name: "iPhone 14 Pro",
    price: 129900.0,
    image : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQFxbLFcE-AAJs5xBuq2ssNsczdOxtPOS6aEy3oNFnTjBbI-b1uK2BjhZwcBVMVEpeVnrYS0oFhzRamNQxVMQobGxBOXl47tQo9uhSBduwpsbVJF56IPJ-Y",
    description: "iPhone 14 Pro, 128GB, Deep Purple",
  },
  {
    id: 5,
    name: "iPhone 16 Plus",
    price: 82400.0,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSMKICtSTFTnhXY9PMWxJeVv9ya3c1ryx3hzKpljAooTCs3jmsNDBBEj854Xd7C3NU9Beimgzs9zK7O1SveViNGGtXrIpx_KFAw3pt4SH_kwsA5J9fEaATmzuG8b2DF1YRTbnXNbMoy6M4&usqp=CAc",
    description: "iPhone 16 Plus, 128GB, Blue",
  },
  {
    id: 6,
    name: "iPhone 13",
    price: 40000.0,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSwmVjUrSmcKRDP7nt1BfcVGW3RNojZ28eHplS5qnN-7SZ-19X3sWULxseJlAonDVqcm3QQtKiP-1i9uVXWKXcjqnxlMY5lpglsVX9iiBbtvpKAx-8fyhPN",
    description: "iPhone 13, 128GB, Starlight",
  },
  {
    id: 7,
    name: "Apple Watch Series 8",
    price: 79000.0,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRSSxrfLGNHDXAVMOh2Ft4xsyRkWn-zD3uB856IsQb504g1rhQfp_qqkN1E6WaZz4EU7g57oHKgsNNOIAD9WIkBkEEyvL6yCE8l6jpTE8KfnQzwr85c7RpEQQ",
    description: "Apple Watch Series 8, GPS, 41mm, Starlight",
  },
  {
    id: 8,
    name: "Apple Watch Ultra",
    price: 60000.0,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT5rJIeD2V9OUNxqcGql6RX3jE4cnlyypyU6UsjWJJ6-kjOB6Pu4de2zqJl8aSDVVb1ewWxBxjZcQkDAF9vCj7oWn6qpmXD5xtiBXx7ih6rbuZF9Tt5SsOw",
    description: "Watch Ultra, 49mm, Titanium Case with Trail Loop",
  },
  {
    id: 9,
    name: "Apple Watch Series 10 Case Sport Band",
    price: 55000.0,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRaQJJN42wBUh89X94wSLNfRY8GuqjUVuXdZmsD1PbaKI7o0bSPRl72z2EtrGAPkf-4xe1_rzr9f4ckB9hByT-cGKQeTcUrsarnJVL0Lm4",
    description: "Apple Watch Series 10, 41mm, Silver Aluminum Case with Sport Band",
  },
  {
    id: 10,
    name: "Apple AirPods 4",
    price: 15000.0,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR45bo1jeXrfM3xqB9M38iNTbA9PEARdnMt0x4LULy8r5lt1TJqzG_4KW7c4qMA6-TkgYvw_8JpO9IL7_-UpN6wKYpvijyyaCo0_UC5ILvmag2qAifYFEcalCk",
    description: "AirPods 4th Gen, Wireless Earbuds",
  },
  {
    id: 11,
    name: "AirPods Max",
    price: 69000.0,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSVZNMGB1B_GbYZcGRNuYe1teE51gPCpi4RF13HvZiqse1r13FyBJGlNWY5iLV36pzt6SsDWw2WBvlYNPTgH6FtuHkN5vSlx4YcT1K87SK7OVfEwBiX7iJ0Mjs",
    description: "Over-Ear Headphones with Active Noise Cancellation",
  },
  {
    id: 12,
    name: "AirPods Pro",
    price: 12900.0,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTHyLJ4ZHLgVmOZlE0WhlYqGk5bkmN3oE4_G6LsJh4rjN_5gelrfuK62pq2xTN7xWu1qG0WZlqRHEqbvYeQPqThAXzC6iEs-zCajMyCvNc5aeLo9dOnqQpW",
    description: "AirPods Pro with Wireless Charging Case",
  },
   {
    id: 13,
    name: "Apple 11 ipadPro",
    price: 99900.0,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFLHstffFzTDEA8_EI5FPL545IkMpBmY3HaYHM81sJlnUF-rDHvD7k_IrSrpxEu3PBR4MtWxrQ003pSFLAf12h6LfAHXTNDHaE4SbNNv_h9lrVCECIfXI3aSgWdrgsdGTOIVh1RPY&usqp=CAc",
    description: "Apple iPad Pro 11-inch, M2 chip, 128GB, Wi-Fi, Space Gray",
  },
  {
    id: 14,
    name: "Apple 11 ipad",
    price: 34900.0,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRM9wzqA9n7Jr4aahjaf6LJTIc8YLKRGpTi71EfzfmrtPdh9I-oG-LcANt3M8aSGWk9_RYAMDcudTUxnb0dlJSdeIYpilLPgdzjJO0WXLS8PnRgIPVI0ig2r7D4FcyORpqo7HaD-Nk&usqp=CAc",
    description: "Apple iPad 11-inch, A14 Bionic chip, 64GB, Wi-Fi, Silver",
  },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      
    }
  };
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };
  const updateQty = (productId, delta) => {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.id === productId ? { ...item, qty: item.qty + delta } : item
      )
      .filter((item) => item.qty > 0) // Removes item if qty goes below 1
  );
};
const clearCart = () => setCart([]);


  return (
    <>
      <h1 className="h1">🛍️ Apple Shopping Cart</h1>
      <div className="container">
        <h2>🛒Products</h2>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-cart">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>₹{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>

        <h2>🧾 Cart</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          
<>
  <div className="cart">
    {cart.map((item) => (
      <div key={item.id} className="cart-item">
        <span>
          {item.name } - ₹{item.price} x {item.qty}
        </span>
        <div style={{ marginTop: "10px" }}>
                <button onClick={() => updateQty(item.id, -1)}
                  style={{
                    padding: "8px 20px",
                    marginRight: "5px",
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: "#ff5252",
                    borderRadius: "5px",
                    borderBlockColor: "#ff5252",
                    borderlayout: "fixed",
                    boxShadow: "0 2px 4px rgba(157, 132, 132, 0.1)",
                  }}
                  
                >
                  -
                </button>
                <button onClick={() => updateQty(item.id, 1)}
                  style={{
                    padding: "8px 20px",
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: "#238b45",
                    borderRadius: "5px",
                    borderlayout: "fixed",
                    borderBlockColor: "#238b45",
                    borderBottomStyle: "solid",
                    boxShadow: "0 2px 4px rgba(22, 178, 64, 0.1)",
                  }}
                >
                  +
                </button>
        </div>
      </div>
      
      
    ))}
    <h3>
    Total: ₹
    {cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}
  </h3>
  </div>
  <button onClick={clearCart} className="clear-btn">Clear Cart</button>

  {/* The following <img> references 'product', which is not defined in this scope. If you want to show images for cart items, you should map over cart items and show their images. Otherwise, you can remove this <img> or adjust as needed. */}
</>

        )}
      </div>
    </>
  );
}
