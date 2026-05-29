import styles from "./detalhePatrimonio.module.css";
import HeaderAccountable from "@/components/headerAccountable/headerAccountable";
import DetalheItemHistorico from "@/components/detalheItemHistorico/detalheItemHistorico";
import ListaHistorico from "@/components/listaHistorico/listaHistorico";

const DetalhePatrimonioPage = () => {
    return (
        <>
            <HeaderAccountable />

            <main className={styles.pageContent}>
                
                <div className="layout_guide">
                    <section className={styles.pageHeader} aria-labelledby="titulo-detalhes">
                        <h1 id="titulo-detalhes">Detalhes do Patrimônio</h1>
                        
                        <a href="#" className={styles.backButton} aria-label="Voltar para a página anterior">
                            Voltar
                        </a>
                    </section>
                </div>

                <div className="layout_guide">
                    <DetalheItemHistorico />
                </div>

                <div className="layout_guide">
                    <ListaHistorico />
                </div>

            </main>
        </>
    );
};

export default DetalhePatrimonioPage;