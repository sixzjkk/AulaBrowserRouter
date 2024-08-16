import { Link } from "react-router-dom";

export default function Header(){

    return(
        <header>
            <div class="linha"></div>
            <div id="header">
                <img class="logo" src="logo.png" alt="logo"/>
                <div class="paginas-link">
                    <Link to="/home">
                        <li class="paginas-textinho">Home</li>
                    </Link>

                    <Link to="/produto">
                        <li class="paginas-textinho">Produtos</li>
                    </Link>

                    <Link to="/oferta">
                        <li class="paginas-textinho">Ofertas</li>
                    </Link>
                </div>
                <img class="pesquisar" src="pesquisar.png" alt="pesquisar"/>   
            </div>
        </header>
    );
}