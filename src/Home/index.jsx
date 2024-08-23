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
                <video src="../HomeImage/video-carrossel1.mp4" width="100%" height="auto"></video>
                </div>
                <div>
                <video src="../HomeImage/video-carrossel2.mp4" width="100%" height="auto" class="sc-ipEyDJ iSrHvC"></video>
                </div>
            </Carousel>
            <video src="https://cf.farmriosoma.farmrio.com.br/site/2024/08_AGOSTO/20-VITRINE/desktop/20-08-24-home-banner-sec-vestidos-desktop.mp4" class="sc-ipEyDJ eHILdL" width="100%" height="auto "></video>
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
          <img width="100%" height="auto" src="../HomeImage/image-bazar-home.png"/>
       </div>
      );
    }