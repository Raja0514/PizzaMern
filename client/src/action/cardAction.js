export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
  var cardItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient: varient,
    quantity: Number(quantity),
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };

  if (cardItem.quantity > 10) {
    alert("You can Add only 10 Pizzas");
  } else {
    if (cardItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cardItem });

      localStorage.setItem(
        "cardItems",
        JSON.stringify(getState().cardReducer.cardItems)
      );
    }
  }
};

export const deletefromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });

  const cardItems = getState().cardReducer.cardItems;

  localStorage.setItem("cardItems", JSON.stringify(cardItems));
};
