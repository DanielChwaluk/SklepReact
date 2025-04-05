import React from "react";
import Stopka from "./Stopka";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Koszyk = () => {

  const { koszyk } = useContext(CartContext);
  const { koszt } = useContext(CartContext);

  return(

    <main className="bg-dark text-light py-2 h-100">
      <hr></hr>
      <h1>Twój koszyk</h1>
      <div className="container h-100 w-100">
      {koszyk.length === 0 ? (
      <p>Koszyk jest pusty!</p>
      ):(
        <div className="row gy-4">
          <h4>Liczba przedmiotów: {koszyk.length}</h4>
          {koszyk.map((e) => (
            <div className="col-4">
              <h3>{e.nazwa}</h3>
              <img className="img-fluid" style={{ width: "300px", height: "300px", objectFit: "cover" }} src={e.zdj} alt={e.nazwa} />
              <h5>{e.opis}</h5>
              <h1 className="text-warning">{e.cena}zł</h1>
            </div>
          ))}
        </div>
      )
    }
        <div className="container">
          <h4>Łączna kwota: {koszt} zł</h4>
        </div>
      </div>
      <Stopka />
    </main>
  )
};

export default Koszyk;