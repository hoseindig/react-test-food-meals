import styles from "./MealItemForm.module.css";
import Input from "../../UI/input";

const MealsItemForm = (props) => {
  return (
    <form action="" className={styles.form}>
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealsItemForm;
