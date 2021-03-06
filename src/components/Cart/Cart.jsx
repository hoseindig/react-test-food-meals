import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
const Cart = ({ showModal, setCardModal }) => {
  const list = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];
  const cardItems = (
    <ul className={styles["cart-items"]}>
      {list.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal showModal={showModal} setCardModal={setCardModal}>
      {cardItems}
      <div className={styles.totall}>
        <span>Totall amount </span>
        <span>35.2</span>
      </div>
      <div className={styles.actions}>
        <button
          onClick={() => setCardModal(false)}
          className={styles["button--alt"]}
        >
          close
        </button>
        <button
          onClick={() => setCardModal(false)}
          className={styles["button"]}
        >
          order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
