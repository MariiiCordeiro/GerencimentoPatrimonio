import styles from "./listaPatrimonio.module.css";
import ItemPatrimonio from "../itemPatrimonio/itemPatrimonio";

const ListaPatrimonio = () => {
    return (
        <section className={styles.tableSection} aria-label="Lista de patrimonios">
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
                    <ItemPatrimonio />
                </tbody>
            </table>
        </section>
    );
};

export default ListaPatrimonio;