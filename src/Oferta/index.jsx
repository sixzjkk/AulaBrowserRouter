import Header from "../components/Header";
import '../globals.css';
import { useState } from "react";

export default function Oferta(){

    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            imagem: "../ProdutoImage/produto1.png",
            nome: "vestido midi estampado riad",
            preco: "R$ 379,00",
            desconto: "R$ 189,00",
        },{
            id: 2,
            imagem: "../ProdutoImage/produto2.png",
            nome: "top reto estampado riad",
            preco: "R$ 129,90",
            desconto: "R$ 65,00",
        },{
            id: 3,
            imagem: "../ProdutoImage/produto4.png",
            nome: "vestido curto estampado jardim classico",
            preco: "R$ 429,00",
            desconto: "R$ 214,00",
        },{
            id: 4,
            imagem: "../ProdutoImage/produto5.png",
            nome: "vestido cropped estampado jardim classico",
            preco: "R$ 429,90",
            desconto: "R$ 214,90",
        },{
            id: 5,
            imagem: "../ProdutoImage/produto7.png",
            nome: "vestido alça estampado sevilha",
            preco: "R$ 498,00",
            desconto: "R$ 245,00",
        },{
            id: 6,
            imagem: "../ProdutoImage/produto8.png",
            nome: "vestido curto estampado sevilha",
            preco: "R$ 429,00",
            desconto: "R$ 215,00",
        },{
            id: 7,
            imagem: "../ProdutoImage/produto10.png",
            nome: "vestido bordado amazônia",
            preco: "R$ 1.298,90",
            desconto: "R$ 649,00",
        },{
            id: 8,
            imagem: "../ProdutoImage/produto11.png",
            nome: "saia moletom amazônia",
            preco: "R$ 449,90",
            desconto: "R$ 225,00",
        },{
            id: 9,
            imagem: "../ProdutoImage/produto13.png",
            nome: "vestido curto estampado encanto tropical",
            preco: "R$ 469,90",
            desconto: "R$ 235,00",
        },{
            id: 10,
            imagem: "../ProdutoImage/produto14.png",
            nome: "vestido alça estampado encanto tropical",
            preco: "R$ 398,00",
            desconto: "R$ 199,00",
        },
    ]); 

    const [listaPedidos, setListaPedidos] = useState([]);
  
    const adicionarPedidos = (objeto) => {
      alert("produto adicionado")
      setListaPedidos([...listaPedidos, objeto]);
  }
  
   const removerItemPedidos = (id) => {
      let removeu = false
      let listaAux = listaPedidos.filter((produto) => {
      if (removeu == false) {
          if (produto.id !== id) {
              return produto
          } else {
              removeu = true
              return null
          }
      } else {
          return produto
      }});
      setListaPedidos(listaAux);
  }
  
  
    return(
        <header>
            <Header/>
            <img class="imagem-principal-p" src="../OfertaImage/image-principal-oferta.png" alt="Banner"/>
            <div class="container-c-p">
                <p class="texto-s-p">home</p>
                <p class="quantidade-produto"> {'>'} ofertas (10 produtos)</p>
            </div>
            <div class="linha-p"></div>
            <div class="container-imagem">
                {
                    listaProdutos.map((produto)=> 
                        <div key={produto.id}>
                            <img class="imagem-bloco-produto" src={produto.imagem}/>
                            <p class="info-produto-nome">{produto.nome}</p>
                            <div class="preco-desconto">
                                <p class="info-produto-preco-oferta">{produto.preco}</p>
                                <p class="info-produto-preco-desconto">{produto.desconto}</p>
                            </div>
                            <button class="button-adicionar-retirar" onClick={()=> adicionarPedidos(produto)}>comprar</button>
                        </div>
                    )
                }
                {
                    listaPedidos.map((produto)=> 
                        <div key={produto.id}>
                            <img class="imagem-bloco-produto" src={produto.imagem}/>
                            <div class="preco-desconto">
                                <p class="info-produto-preco-oferta">{produto.preco}</p>
                                <p class="info-produto-preco-desconto">{produto.desconto}</p>
                            </div>
                            <button class="button-adicionar-retirar"onClick={() => removerItemPedidos(produto.id)}>remover</button>
                        </div>
                    )
                }
            </div>
        </header>
    )
}