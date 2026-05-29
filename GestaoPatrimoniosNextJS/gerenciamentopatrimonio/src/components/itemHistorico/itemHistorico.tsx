import styles from "./itemHistorico.module.css";

const ItemHistorico = () => {
    return (
        <tr className={styles.itemRow}>
            <td data-label="Data">11/02/2026</td>
            <td data-label="Tipo de movimentação">
                <span className={styles.statusBadge}>Transferência</span>
            </td>
            <td data-label="Origem">Sala 07/08</td>
            <td data-label="Destino">Sala 09/10</td>
            <td data-label="Responsável">Gustavo Lima</td>
            <td data-label="Justificativa">
                <a href="#" aria-label="Ver justificativa da transferência">
                    <i className="fa-solid fa-circle-info" />
                </a>
            </td>
        </tr>
    );
};

export default ItemHistorico;