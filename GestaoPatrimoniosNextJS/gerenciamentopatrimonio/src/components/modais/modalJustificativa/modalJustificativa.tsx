import styles from "./modalJustificativa.module.css";

const ModalJustificativa = () => {
    return (
        <section className={styles.modalOverlay}>
            <article className={`${styles.modalContainer} ${styles.modalJustificativa}`}>
                <button type="button" className={styles.modalClose} aria-label="Fechar modal">
                    x
                </button>

                <h1 className={styles.modalTitle}>
                    Justificativa
                </h1>

                <p className={styles.modalText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veritatis, quasi distinctio! Temporibus similique expedita 
                    laboriosam, assumenda officia veritatis amet doloremque esse 
                    obcaecati repudiandae architecto in sed facilis quas harum.
                </p>
            </article>
        </section>
    );
};

export default ModalJustificativa;