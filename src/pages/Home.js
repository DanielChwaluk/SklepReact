import React, { useState } from "react";
import { Soundtracki, Gry, Filmy } from "../Dane.js";
import Stopka from './Stopka.js';
import './home.css';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const Home = () => {

    const { dodajDoKoszyka} = useContext(CartContext);
    const { dodajKoszta, koszt} = useContext(CartContext);

    const [produkty, setProdukty] = useState([...Soundtracki, ...Gry, ...Filmy]);

    function Dodaj(e){
        dodajDoKoszyka(e);
        dodajKoszta(e.cena);
    }

    function UstawKatGry(){
        setProdukty(Gry);
    }
    function UstawKatFilmy(){
        setProdukty(Filmy);
    }
    function UstawKatSound(){
        setProdukty(Soundtracki);
    }
    function UstawKatAll(){
        setProdukty([...Soundtracki, ...Gry, ...Filmy]);
    }

    return(
    <div className="text-white bg-dark">
        <h1>Sklep u Chwaluka</h1>
        <div className="container d-flex justify-content-center align-items-center gap-3 py-4">
            <button onClick={UstawKatAll} className="btn btn-info fs-3">Wszystko</button>
            <button onClick={UstawKatGry} className="btn btn-info fs-3">Gry</button>
            <button onClick={UstawKatSound} className="btn btn-info fs-3">Soundtrack</button>
            <button onClick={UstawKatFilmy} className="btn btn-info fs-3">Filmy</button>
        </div>
        <div className="row gy-4 m-3 p-2">
            {produkty.map(e =>(
                <div className="col-4 text-center" key={e.id}>
                <h3 className="text-light">{e.nazwa}</h3>
                <div className="d-flex justify-content-center">
                    <img className="img-fluid" style={{ width: "300px", height: "300px", objectFit: "cover" }} src={e.zdj} alt={e.nazwa} />
                </div>
                <h5 className="text-light">{e.opis}</h5>
                <div className="d-flex gap-3 justify-content-center">
                    <button className="btn btn-success" onClick={()=>Dodaj(e)}>Dodaj do koszyka</button>
                    <h3 className="text-warning">{e.cena}zł</h3>
                </div>
            </div>
            
            ))}
        </div>
        <Stopka />
    </div>
    )
  };
  
  export default Home;