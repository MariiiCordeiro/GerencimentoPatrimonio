import HeaderAccountable from "@/components/headerAccountable/headerAccountable";
import styles from "../ambiente/ambiente.module.css"
import Navegacao from "@/components/navegacao/navegacao";
import ListaAmbiente from "@/components/listaAmbiente/listaAmbiente";

const Ambiente = () => {
    return (
        <>
            <HeaderAccountable />
            <main className={styles.pageContent}>
                <section className={`${styles.pageHeader} layout_guide`} aria-labelledby="titulo-ambientes">
                    <h1 id="titulo-ambientes">Ambientes</h1>

                    <form className={styles.searchArea} role="search">
                        <label htmlFor="pesquisa-ambiente" className={styles.srOnly}>Pesquisar ambiente</label>

                        <input type="search" id="pesquisa-ambiente" name="pesquisaAmbiente" placeholder="Pesquise o ambiente" />

                        <button type="button" className={styles.filterButton} aria-label="Filtrar ambientes">
                            <i className="fa-solid fa-sliders"></i>
                        </button>
                    </form>
                </section>
                <section className={`${styles.tableSection} layout_guide`}>
                    <ListaAmbiente/>
                </section>
                <Navegacao />
            </main>

        </>
    )
};

export default Ambiente;