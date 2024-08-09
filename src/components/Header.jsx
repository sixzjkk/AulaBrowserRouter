import { Link } from "react-router-dom";

export default function Header(){

    return(
        <header>
            <Link to="/home">
                <li>Home</li>
            </Link>

            <Link to="/produto">
                <li>Produtos</li>
            </Link>

            <Link to="/oferta">
                <li>Ofertas</li>
            </Link>
        </header>
    );
}