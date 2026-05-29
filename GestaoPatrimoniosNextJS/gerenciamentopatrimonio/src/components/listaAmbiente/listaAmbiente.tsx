import styles from "./listaAmbiente.module.css";
import ItemAmbiente from "../itemAmbiente/itemAmbiente";

const ListaAmbiente = () => {
    return (
        <section className={styles.tableSection} aria-label="Lista de ambientes">
            <table className={styles.environmentTable}>
                <thead>
                    <tr>
                        <th>Local</th>
                        <th>Responsável</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>

                <tbody>
                    <ItemAmbiente />
                </tbody>
            </table>
        </section>
    );
};

export default ListaAmbiente;