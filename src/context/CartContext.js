import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [koszyk, setKoszyk] = useState([]);

    const dodajDoKoszyka = (item) =>{
        setKoszyk((prevKoszyk) => [...prevKoszyk, item]);
    };
    return(
        <CartContext.Provider value={{koszyk, dodajDoKoszyka}}>
            {children}
        </CartContext.Provider>
    );
};