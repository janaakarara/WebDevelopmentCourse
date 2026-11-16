import { Link } from "react-router";
import NavBar from "../components/NavBar.jsx";
import "./CheckoutPage.css";

const items = [
  { id: 1, name: "Wireless Mouse", quantity: 1, price: 25 },
  { id: 2, name: "Mechanical Keyboard", quantity: 1, price: 80 },
  { id: 3, name: "USB-C Cable", quantity: 2, price: 10 },
];

function CheckoutPage() {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <NavBar />
      <main className="page checkout-page">
        <h1>Checkout</h1>

        <section className="checkout-summary">
          <h2>Order Summary</h2>
          <ul className="checkout-items">
            {items.map((item) => (
              <li key={item.id} className="checkout-item">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="checkout-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </section>

        <Link to="/" className="btn">
          ← Back to Home
        </Link>
      </main>
    </>
  );
}

export default CheckoutPage;
