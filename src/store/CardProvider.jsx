import CardContext from "./card-context";

const CardProvider = (props) => {
  const addItemHandler = (item) => {};
  const deleteItemHandler = (id) => {};
  const cardContext = {//helper
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    deleteitem: deleteItemHandler,
  };
  return (
    <CardContext.Provider value={cardContext}>
      {props.chidren}
    </CardContext.Provider>
  );
};

export default CardProvider;
