import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  const [showCardModal, setCardModal] = useState(false);
  const hideCardhandle = () => {
    setCardModal(false);
  };
  const showCardhandle = () => {
    setCardModal(true);
  };

  return (
    <Fragment>
      <Cart showModal={showCardModal} setCardModal={setCardModal} onCloseModal={hideCardhandle} />
      <Header setCardModal={setCardModal} onShowModal={showCardhandle}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
