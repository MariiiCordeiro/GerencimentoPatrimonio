import ItemAmbiente from "../itemAmbiente/itemAmbiente"
import styles from "../listaAmbiente/listaAmbiente.module.css"

const ListaAmbiente = () => {
    return (
        <>
            <table className="environmentTable">
                <thead>
                    <tr>
                        <th>Local</th>
                        <th>Responsável</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>
                <ItemAmbiente />
            </table>
        </>
    )
};

export default ListaAmbiente;