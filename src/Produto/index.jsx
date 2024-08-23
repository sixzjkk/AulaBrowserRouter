import Header from "../components/Header";
import Footer from "../components/Footer"
import ListarProdutos from "../components/ListarProdutos"
import '../globals.css';
import { useState } from "react";

export default function Produto() {

    return(
        <header>
            <Header/>
            <img className="imagem-principal-p" src="../ProdutoImage/image-principal-produto.jpg" alt="Banner"/>
            <div className="container-c-p">
                <p className="texto-s-p">home</p>
                <p className="quantidade-produto"> {'>'} produtos (20 produtos)</p>
            </div>
            <div className="linha-p"></div>
            <ListarProdutos/>
            <Footer/>
        </header>
    )
}