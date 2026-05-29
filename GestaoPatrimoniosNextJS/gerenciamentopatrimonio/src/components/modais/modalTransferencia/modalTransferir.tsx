import styles from "./modalTransferir.module.css";

const ModalTransferir = () => {
    return (
        <section className={styles.modalOverlay}>
            <article className={styles.modalContainer}>
                <button type="button" className={styles.modalClose} aria-label="Fechar modal">
                    x
                </button>

                <h1 className={styles.modalTitle}>
                    Transferir os patrimônios
                </h1>

                <form className={styles.modalForm}>
                    <div className={styles.modalField}>
                        <label htmlFor="ambienteTransferencia">
                            Ambiente
                        </label>
                        <select id="ambienteTransferencia">
                            <option>Manutenção</option>
                            <option>Sala XX</option>
                            <option>Sala XX</option>
                        </select>
                    </div>

                    <div className={styles.modalField}>
                        <label htmlFor="motivoTransferencia">
                            Motivo da transferência
                        </label>
                        <textarea 
                            id="motivoTransferencia"
                            placeholder="Lorem"
                        />
                    </div>

                    <button type="submit" className={styles.modalButton}>
                        TRANSFERIR
                    </button>
                </form>
            </article>
        </section>
    );
};

export default ModalTransferir;