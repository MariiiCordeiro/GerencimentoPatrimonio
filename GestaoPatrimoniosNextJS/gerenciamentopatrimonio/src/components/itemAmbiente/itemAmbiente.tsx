import styles from "../itemAccountable/itemAccountable.module.css"

const ItemAmbiente = () => {
    return (
        <>
            <tbody>
                <tr className={styles.item}>
                    <td>Sala 30/31 (anfiteatro)</td>
                    <td>Samanta Melissa</td>
                    <td>
                        <a href="#" aria-label="Ver detalhes da Sala 30/31">
                            <i></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default ItemAmbiente;