import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [koszyk, setKoszyk] = useState([]);
    const [koszt, setKoszt] = useState(0);

    const dodajDoKoszyka = (item) =>{
        setKoszyk((prevKoszyk) => [...prevKoszyk, item]);
    };

    const dodajKoszta = (cena) => {
        setKoszt((prevKoszt) => prevKoszt + cena);
    };

    return(
        <CartContext.Provider value={{koszyk, koszt, dodajDoKoszyka, dodajKoszta}}>
            {children}
        </CartContext.Provider>
    );
};