import styles from "./navegacao.module.css";

const Pagination = () => {
    return (
        <nav className={styles.pagination} aria-label="Paginação">
            <button type="button" className={styles.paginationButton} aria-label="Página anterior">
                ‹
            </button>

            <a href="#" className={`${styles.paginationLink} ${styles.current}`} aria-current="page">1</a>
            <a href="#" className={styles.paginationLink}>2</a>
            <a href="#" className={styles.paginationLink}>3</a>

            <button type="button" className={styles.paginationButton} aria-label="Próxima página">
                ›
            </button>
        </nav>
    );
};

export default Pagination;