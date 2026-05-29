import styles from "./detalheItemHistorico.module.css";

const DetalheItemHistorico = () => {
    return (
        <article className={styles.detailCard}>
            <div className={styles.infoColumn}>
                <dl>
                    <dt>Nº Patrimônio</dt>
                    <dd>1236808</dd>
                </dl>
                <dl>
                    <dt>Denominação</dt>
                    <dd>MESA TRAPEZOIDAL DC-1987a</dd>
                </dl>
                <dl>
                    <dt>Tipo</dt>
                    <dd>Mesa</dd>
                </dl>
                <dl>
                    <dt>Local Atual</dt>
                    <dd>Sala 09/10</dd>
                </dl>
            </div>

            <div className={styles.infoColumn}>
                <dl>
                    <dt>Marca</dt>
                    <dd>Desconhecida</dd>
                </dl>
                <dl>
                    <dt>Modelo</dt>
                    <dd>DC-1987a</dd>
                </dl>
                <dl>
                    <dt>Data de Aquisição</dt>
                    <dd>14/05/2018</dd>
                </dl>
                <dl>
                    <dt>Status Atual</dt>
                    <dd><span className={styles.status}>Ativo</span></dd>
                </dl>
            </div>
        </article>
    );
};

export default DetalheItemHistorico;