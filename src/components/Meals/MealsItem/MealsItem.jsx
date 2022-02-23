import styles from "./MealItem.module.css";
const MealsItem = ({ name, description, price }) => {
  const textPrice = `$${price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{textPrice}</div>
      </div>
      <div>
          
      </div>
    </li>
  );
};

export default MealsItem;
