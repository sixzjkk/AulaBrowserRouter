import Header from "../components/Header";
import '../globals.css';
import { useState } from "react";

export default function Produto() {

  const [listaProdutos, setProdutos] = useState([
    {
        id: 1,
        imagem: "../ProdutoImage/produto1.png",
        nome: "vestido midi estampado riad",
        preco: "R$ 379,00",
    },{
        id: 2,
        imagem: "../ProdutoImage/produto2.png",
        nome: "top reto estampado riad",
        preco: "R$ 129,90",
    },{
        id: 3,
        imagem: "../ProdutoImage/produto3.png",
        nome: "vestido curto estampado riad",
        preco: "R$ 449,90",
    },{
        id: 4,
        imagem: "../ProdutoImage/produto4-extra1.png",
        nome: "short estampado riad",
        preco: "R$ 129,90",
    },{
        id: 5,
        imagem: "../ProdutoImage/produto4.png",
        nome: "vestido curto estampado jardim classico",
        preco: "R$ 429,00",
    },{
        id: 6,
        imagem: "../ProdutoImage/produto5.png",
        nome: "vestido cropped estampado jardim classico",
        preco: "R$ 429,90",
    },{
        id: 7,
        imagem: "../ProdutoImage/produto6.png",
        nome: "macacão estampado jardim clássico",
        preco: "R$ 459,00",
    },{
        id: 8,
        imagem: "../ProdutoImage/produto7-extra2.png",
        nome: "vestido camisa estampado jardim clássico",
        preco: "R$ 498,00",
    },{
        id: 9,
        imagem: "../ProdutoImage/produto7.png",
        nome: "vestido alça estampado sevilha",
        preco: "R$ 498,00",
    },{
        id: 10,
        imagem: "../ProdutoImage/produto8.png",
        nome: "vestido curto estampado sevilha",
        preco: "R$ 429,00",
    },{
        id: 11,
        imagem: "../ProdutoImage/produto9.png",
        nome: "vestido cropped estampado sevilha",
        preco: "R$ 398,00",
    },{
        id: 12,
        imagem: "../ProdutoImage/produto10-extra3.png",
        nome: "bata estampada sevilha",
        preco: "R$ 379,00",
    },{
        id: 13,
        imagem: "../ProdutoImage/produto10.png",
        nome: "vestido bordado amazônia",
        preco: "R$ 1.298,90",
    },{
        id: 14,
        imagem: "../ProdutoImage/produto11.png",
        nome: "saia moletom amazônia",
        preco: "R$ 449,90",
    },{
        id: 15,
        imagem: "../ProdutoImage/produto12.png",
        nome: "vestido laise amazônia",
        preco: "R$ 1.498,00",
    },{
        id: 16,
        imagem: "../ProdutoImage/produto13-extra4.png",
        nome: "maxi vestido tricot estampado amazônia",
        preco: "R$ 698,90",
    },{
        id: 17,
        imagem: "../ProdutoImage/produto13.png",
        nome: "vestido curto estampado encanto tropical",
        preco: "R$ 469,90",
    },{
        id: 18,
        imagem: "../ProdutoImage/produto14.png",
        nome: "vestido alça estampado encanto tropical",
        preco: "R$ 398,00",
    },{
        id: 19,
        imagem: "../ProdutoImage/produto15.png",
        nome: "saia sarja eng estampada encanto tropical",
        preco: "R$ 449,90",
    },{
        id: 20,
        imagem: "../ProdutoImage/produto16-extra5.png",
        nome: "vestido longo estampado encanto tropical",
        preco: "R$ 598,00",
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
            <img class="imagem-principal-p" src="../ProdutoImage/image-principal-produto.jpg" alt="Banner"/>
            <div class="container-c-p">
                <p class="texto-s-p">home</p>
                <p class="quantidade-produto"> {'>'} produtos (20 produtos)</p>
            </div>
            <div class="linha-p"></div>
            <div class="container-imagem">
                {
                    listaProdutos.map((produto)=> 
                        <div key={produto.id}>
                            <img class="imagem-bloco-produto" src={produto.imagem}/>
                            <p class="info-produto-nome">{produto.nome}</p>
                            <p class="info-produto-preco">{produto.preco}</p>
                            <button class="button-adicionar-retirar" onClick={()=> adicionarPedidos(produto)}>comprar</button>
                        </div>
                    )
                }
                {
                    listaPedidos.map((produto)=> 
                        <div key={produto.id}>
                            <img class="imagem-bloco-produto" src={produto.imagem}/>
                            <p class="info-produto-nome">{produto.nome}</p>
                            <p class="info-produto-preco">{produto.preco}</p>
                            <button class="button-adicionar-retirar"onClick={() => removerItemPedidos(produto.id)}>remover</button>
                        </div>
                    )
                }
            </div>
        </header>
    )
}