import { Link } from "react-router-dom";

export default function Footer(){

    return(
        <footer>
            <div className="footer"> 
            <div className="linha-f"/>
                <div className="container-f">
                    <p className="titulos-container">institucional</p>
                    <div className="conteudo-container">
                        <p className="texto-conteudo">a FARM</p>
                        <p className="texto-conteudo">nossas lojas</p>
                        <p className="texto-conteudo">trabalhe aqui</p>
                        <p className="texto-conteudo">grupo soma</p>
                        <p className="texto-conteudo">multimarcas</p>
                    </div>
                </div>
                <div className="container-f">
                    <p className="titulos-container">minha conta</p>
                    <div className="conteudo-container">
                        <p className="texto-conteudo">meus pedidos</p>
                        <p className="texto-conteudo">meus desejos</p>
                    </div>
                </div>
                <div className="container-f">
                    <p className="titulos-container">fala FARM</p>
                    <div className="conteudo-container">
                        <p className="texto-conteudo">falar via whatsapp</p>
                    </div>
                </div>
                <div className="container-f">
                    <p className="titulos-container">precisa de ajuda?</p>
                    <div className="conteudo-container">
                        <p className="texto-conteudo">meus pedidos</p>
                        <p className="texto-conteudo">troca e devolução</p>
                        <p className="texto-conteudo">entrega</p>
                        <p className="texto-conteudo">promoções e cupons</p>
                        <p className="texto-conteudo">produtos</p>
                        <p className="texto-conteudo">regulamento de promo</p>
                        <p className="texto-conteudo">políticas</p>
                        <p className="texto-conteudo">aviso de privacidade</p>
                    </div>
                </div>
                <div className="container-f">
                    <p className="titulos-container">sustentabilidade</p>
                    <div className="conteudo-container">
                        <p className="texto-conteudo">circularidade</p>
                        <p className="texto-conteudo">gente</p>
                        <p className="texto-conteudo">cultura</p>
                        <p className="texto-conteudo">natureza</p>
                        <p className="texto-conteudo">transparência</p>
                        <p className="texto-conteudo">re-FARM</p>
                        <p className="texto-conteudo">fornecedores</p>
                        <p className="texto-conteudo">canal de ética</p>
                    </div>
                </div>
                <div className="container-f">
                    <p className="titulos-container">FARM Latam</p>
                    <div className="conteudo-container">
                        <p className="texto-conteudo">Argentina</p>
                        <p className="texto-conteudo">Chile</p>
                        <p className="texto-conteudo">Colômbia</p>
                        <p className="texto-conteudo">Paraguai</p>
                        <p className="texto-conteudo">Peru</p>
                        <p className="texto-conteudo">Uruguai</p>
                        <p className="texto-conteudo">Bolívia</p>
                        <p className="texto-conteudo">Venezuela</p>
                        <p className="texto-conteudo">Panamá</p>
                        <p className="texto-conteudo">Equador</p>
                    </div>
                </div>
                <img className="redes" src="../FooterImage/redes-footer.png"/>
            </div>
        </footer>
    );
}