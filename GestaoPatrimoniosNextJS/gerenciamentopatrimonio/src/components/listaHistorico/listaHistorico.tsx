import styles from "./listaHistorico.module.css";
import ItemHistorico from "@/components/itemHistorico/itemHistorico";

const ListaHistorico = () => {
    return (
        <section className={styles.tableSection} aria-label="Lista de histórico do patrimônio">
            <h2>Histórico</h2>

            <table className={styles.historyTable}>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Tipo de movimentação</th>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Responsável</th>
                        <th>Justificativa</th>
                    </tr>
                </thead>

                <tbody>
                    <ItemHistorico />
                </tbody>
            </table>
        </section>
    );
};

export default ListaHistorico;