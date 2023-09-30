import React, { useReducer, useContext, createContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          book_image: action.book_image,
          book_name: action.book_name,
          author_name: action.author_name,
          price: action.price,
          Quantity: action.Quantity,
          category: action.category,
        },
      ];
    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
    case "DROP":
      let empArray = [];
      return empArray;
    case "UPDATE":
      let arr = [...state];
      arr.find((book, index) => {
        if (book.id === action.id) {
         
          arr[index] = {
            ...book,
            Quantity: parseInt(action.Quantity) + book.Quantity,
            price: action.price + book.price,
          };
        }
        return arr;
      });
      return arr;
    default:
      console.log("Error in Reducer");
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
