import { Link } from "react-router-dom";
import "./Error404.css";

const Error404Page = () => {
    return (
        <main>
            <section>
                <h1> Erreur 404 </h1>
                <p>Votre demande ne peut aboutir</p>

                <Link to={"/"}> Retour à la page principale </Link>
            </section>
        </main>
    );
};
export default Error404Page;
