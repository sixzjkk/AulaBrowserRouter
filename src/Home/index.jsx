import Header from "../components/Header"
import Footer from "../components/Footer"
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
                <video src="../HomeImage/video-carrossel1.mp4" width="100%" height="auto" 
                autoPlay
                muted
                loop>
                </video>
                </div>
                <div>
                <video src="../HomeImage/video-carrossel2.mp4" width="100%" height="auto" 
                autoPlay
                muted
                loop>
                </video>
                </div>
            </Carousel>
            <video src="https://cf.farmriosoma.farmrio.com.br/site/2024/08_AGOSTO/20-VITRINE/desktop/20-08-24-home-banner-sec-vestidos-desktop.mp4" width="100%" height="auto "
            autoPlay
            muted
            loop
            ></video>
            <div className="container-2-i">
              <img className="image-1-2" src="../HomeImage/image-1-de-2.png"/>
              <img className="image-1-2"src="../HomeImage/image-2-de-2.png"/>
            </div>
            <div className="explore">
                <h2 className="textinho-explore">EXPLORE OS NOSSOS DESTAQUES DA SEMANA</h2>
            </div>
          </div>
          <div className="bloco-home">
           {
              listaProdutos.map((produto)=> 
                 <div key={produto.id}>
                    <img className="imagem-bloco-home" src={produto.imagem}/>
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
          <video src="../HomeImage/video3.mp4" width="100%" height="auto" 
          autoPlay
          muted
          loop/>
        <Footer/>
       </div>
      );
    }