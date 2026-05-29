import styles from "./ambiente.module.css";
import HeaderAccountable from "@/components/headerAccountable/headerAccountable";
import ListaAmbiente from "@/components/listaAmbiente/listaAmbiente";
import Pagination from "@/components/navegacao/navegacao";


const ListaLocais = () => {
    return (
        <>
            <HeaderAccountable />

            <main className={styles.pageContent}>
                <div className="layout_guide">
                    <section className={styles.pageHeader} aria-labelledby="titulo-ambientes">
                        <h1 id="titulo-ambientes">Ambientes</h1>

                        <form className={styles.searchArea} role="search">
                            <label htmlFor="pesquisa-ambiente" className={styles.srOnly}>
                                Pesquisar ambiente
                            </label>

                            <input 
                                type="search" 
                                id="pesquisa-ambiente" 
                                name="pesquisaAmbiente" 
                                placeholder="Pesquise o ambiente" 
                            />

                            <button type="button" className={styles.filterButton} aria-label="Filtrar ambientes">
                                <i className="fa-solid fa-sliders" />
                            </button>
                        </form>
                    </section>
                </div>

                {/* 2. O componente da tabela já está isolado, mas vamos garantir que ele seja envelopado pela classe global */}
                <div className="layout_guide">
                    <ListaAmbiente />
                </div>

                {/* 3. Paginação */}
                <div className="layout_guide">
                    < Pagination/>
                </div>

            </main>
        </>
    );
};

export default ListaLocais;