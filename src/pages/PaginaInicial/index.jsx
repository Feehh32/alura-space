import Banner from "Components/Banner";
import Cabecalho from "Components/Cabecalho";
import Galeria from "Components/Galeria";
import Menu from "Components/Menu";
import Populares from "Components/Populares";
import Rodape from "Components/Rodape";

import styles from './PaginaInicial.module.scss';

const PaginaInicial = () => {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    )
}

export default PaginaInicial;