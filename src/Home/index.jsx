import Header from "../components/Header"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../globals.css';
import { useState } from "react";

export default function Home() {

  const [listaProdutos, setProdutos] = useState([
    {
        id: 1,
        imagem: "../HomeImage/image-home1.png",
    },
    {
        id: 2,
        imagem: "../HomeImage/image-home2.png",
    },
    {
        id: 3,
        imagem: "../HomeImage/image-home3.png",
    },
    {
        id: 4,
        imagem: "../HomeImage/image-home4.png",
    },
    {
        id: 5,
        imagem: "../HomeImage/image-home5.png",
    },
]);

  const [listaPedidos, setListaPedidos] = useState([]);

    return (
        <div>
          <div>
            <Header title={"Pagina"}/>
            <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight
            >
                <div>
                    <img src="https://cf.farmriosoma.farmrio.com.br/site/2024/08_AGOSTO/12_ANIVERSARIO-FARMRIO-ULTIMOS-DIAS/12-08-24-banner-tv-vitrine-aniversario-farm-rio-25-off-5-off-cupom-desktop.jpg" alt="teste1"/>
                </div>
                <div>
                    <img src="https://cf.farmriosoma.farmrio.com.br/site/2024/08_AGOSTO/07_VITRINE/desktop/07-08-24-home-banner-tv-vitrine-desktop.jpg" alt="teste2"/>
                </div>
                <div>
                    <img src="https://cf.farmriosoma.farmrio.com.br/site/2024/08_AGOSTO/07_LOJIX-REPRISE/07-08-24-home-banner-tv-lojix-reprise-desktop.jpg" alt="teste3"/>
                </div>
            </Carousel>
            <div class="explore">
                <h2 class="textinho-explore">EXPLORE OS NOSSOS DESTAQUES DA SEMANA</h2>
            </div>
          </div>
          <div class="bloco-home">
           {
              listaProdutos.map((produto)=> 
                 <div key={produto.id}>
                    <img class="imagem-bloco-home" src={produto.imagem}/>
                  </div>
              )
           }
          {
            listaPedidos.map((produto)=> 
              <div key={produto.id}>
                <p>{produto.imagem}</p>
              </div>
            )
          }
          </div>
       </div>
      );
    }