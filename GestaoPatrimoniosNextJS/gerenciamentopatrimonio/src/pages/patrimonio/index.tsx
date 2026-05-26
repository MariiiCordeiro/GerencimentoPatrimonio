import Navegacao from "@/components/navegacao/navegacao";
import styles from "../patrimonio/patrimonio.module.css"

const Patrimonio = () => {
    return (
        <>
            <main className={styles.pageContent}>
                <section className={`${styles.pageHeader} layout_guide`} aria-labelledby="titulo-patrimonios">
                    <h1 id="titulo-patrimonios">Patrimônios: Sala 09/10</h1>

                    <form className={styles.searchArea} role="search">
                        <label htmlFor="pesquisa-ambiente" className={styles.srOnly}>Pesquisar patrimônios</label>

                        <input type="search" id="pesquisa-ambiente" name="pesquisaAmbiente" placeholder="Pesquise o ambiente" />

                        <button type="button" className={styles.filterButton} aria-label="Filtrar patrimonios">
                            <i className="fa-solid fa-sliders"></i>
                        </button>
                    </form>
                </section>

                {/* Classe dupla unificada em camelCase */}
                <section className={styles.tableSectionLayoutGuide} aria-label="Lista de patrimonios">
                    <table className={styles.environmentTable}>
                        <thead>
                            <tr>
                                <th>Patrimônio</th>
                                <th>Denominação</th>
                                <th>Tipo</th>
                                <th>Data transferência</th>
                                <th>Detalhes</th>
                                <th>Transferir</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1236808</td>
                                <td>MESA TRAPEZOIDAL DC-1987a</td>
                                <td>Mesa</td>
                                <td>11/02/26</td>
                                <td>
                                    <a href="#" aria-label="Ver detalhes do patrimonio">
                                        <i className="fa-solid fa-circle-info"></i>
                                    </a>
                                </td>
                                <td>
                                    <a href="#" aria-label="Transferir patrimonio">
                                        <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <Navegacao />
            </main>
        </>
    )

}