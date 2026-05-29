import styles from "./modalImportar.module.css";

const ModalImportar = () => {
    return (
        <section className={styles.modalOverlay}>
            <article className={styles.modalContainer}>
                <button type="button" className={styles.modalClose} aria-label="Fechar modal">
                    x
                </button>

                <h1 className={styles.modalTitle}>
                    Importar novos patrimônios
                </h1>

                <form className={styles.modalForm}>
                    <div className={styles.modalField}>
                        <label htmlFor="numeroPatrimonio">
                            Número do patrimônio
                        </label>
                        <input 
                            type="text" 
                            id="numeroPatrimonio"
                            placeholder="1245769"
                        />
                    </div>

                    <div className={styles.modalField}>
                        <label htmlFor="denominacaoPatrimonio">
                            Denominação
                        </label>
                        <input 
                            type="text"
                            id="denominacaoPatrimonio"
                            placeholder="CADEIRA GIRATÓRIA EM POLIPROPILENO PRETO"
                        />
                    </div>

                    <button type="submit" className={styles.modalButton}>
                        IMPORTAR
                    </button>
                </form>
            </article>
        </section>
    );
};

export default ModalImportar;