import { Link } from "react-router-dom";

export default function Header(){

    return(
        <header className="header"> 
            <div id="header">
                <img className="logo" src="../HomeImage/logo.png" alt="logo"/>
                <div className="paginas-link">
                    <Link to="/home">
                        <li className="paginas-textinho">Home</li>
                    </Link>

                    <Link to="/produto">
                        <li className="paginas-textinho">Produtos</li>
                    </Link>

                    <Link to="/oferta">
                        <li className="paginas-textinho">Ofertas</li>
                    </Link>
                </div>
                <img className="pesquisar" src="../HomeImage/pesquisar.png" alt="pesquisar"/>   
            </div>
        </header>
    );
}