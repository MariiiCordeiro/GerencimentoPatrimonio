import styles from "../headerAccountable/headerAccountable.module.css"

const HeaderAccountable = () => {
    return (
        <>
            <header className={styles.topbar}>
                <nav className={`${styles.navbar} layout_guide`} aria-label="Menu principal">
                    <a href="#" className={styles.logoLink} aria-label="Página inicial">
                        <img src="../img/logoSenai.png" alt="Logo SENAI" className={styles.logo} />
                    </a>

                    <ul className={styles.menuList}>
                        <li>
                            <a href="#" className={styles.menuLink}>
                                Ambientes
                                <i className="fa-solid fa-chevron-down" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.menuLink}>
                                Patrimônios
                            </a>
                        </li>
                    </ul>

                    <section className={styles.userArea} aria-label="Informações do usuário">
                        <button className={styles.userIcon} aria-label="Abrir perfil do usuário">
                            <i className="fa-solid fa-user" />
                        </button>
                        <div className={styles.userInfo}>
                            <strong>Késsia Milena</strong>
                            <span>kessia@sp.senai.br</span>
                        </div>
                        <button className={styles.arrowButton} aria-label="Abrir opções da conta">
                            <i className="fa-solid fa-chevron-down" />
                        </button>
                    </section>

                    <button className={styles.opcoes} aria-label="Abrir opções de menu ">
                        <i className="fa-solid fa-bars" />
                    </button>
                </nav>
            </header>
        </>
    )
}

export default HeaderAccountable;