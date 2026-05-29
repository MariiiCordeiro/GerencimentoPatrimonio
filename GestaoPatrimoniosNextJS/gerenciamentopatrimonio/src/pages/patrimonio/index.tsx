import styles from "./patrimonio.module.css";
import HeaderAccountable from "@/components/headerAccountable/headerAccountable";
import ListaPatrimonio from "@/components/listaPatrimonio/listaPatrimonio";
import Pagination from "@/components/navegacao/navegacao";

const Patrimonio = () => {
    return (
        <>
            <HeaderAccountable />

            <main className={styles.pageContent}>
                <div className="layout_guide">
                    <section className={styles.pageHeader} aria-labelledby="titulo-patrimonios">
                        <h1 id="titulo-patrimonios">Patrimônios: Sala 09/10</h1>

                        <form className={styles.searchArea} role="search">
                            <label htmlFor="pesquisa-ambiente" className={styles.srOnly}>
                                Pesquisar patrimônios
                            </label>

                            <input 
                                type="search" 
                                id="pesquisa-ambiente" 
                                name="pesquisaAmbiente" 
                                placeholder="Pesquise o ambiente" 
                            />

                            <button type="button" className={styles.filterButton} aria-label="Filtrar patrimonios">
                                <i className="fa-solid fa-sliders" />
                            </button>
                        </form>
                    </section>
                </div>
                <div className="layout_guide">
                    <ListaPatrimonio />
                </div>

                <div className="layout_guide">
                     < Pagination/>
                </div>

            </main>
        </>
    );
};

export default Patrimonio;