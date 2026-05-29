import HeaderAccountable from "@/components/headerAccountable/headerAccountable";
import styles from "../login/login.module.css";
import ItemAmbiente from "@/components/itemAmbiente/itemAmbiente";
import ListaAmbiente from "@/components/listaAmbiente/listaAmbiente";

const Login = () => {
  return (
    <>
      <HeaderAccountable />
<ListaAmbiente />
      {/* <main className={styles.loginPage}>
        <section className={styles.loginBanner} aria-label="Apresentação do sistema">
          <img
            src="../img/loginBackground.png"
            alt="Imagem de fundo relacionada à tecnologia"
            className={styles.bannerImage}
          />
          <div className= {styles.bannerOverlay} />
          <div className= {styles.bannerContent}>
            <img
              src="../img/logoSenai.png"
              alt="Logo do SENAI"
              className={styles.senaiLogo}
            />
            <h2>Gestão de patrimônios</h2>
            <p className= {styles.bannerContentText}>
              Controle, organização e transparência do patrimônio com eficiência.
            </p>
            <p />
          </div>
        </section>
        <section className={styles.loginArea} aria-label="Formulário de login">
          <form className={styles.loginForm}>
            <h1>Login</h1>
            <div className= {styles.formGroup}>
              <label htmlFor="nif">NIF:</label>
              <input
                type="text"
                id="nif"
                name="nif"
                placeholder="Insira o seu NIF"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="senha">Senha:</label>
              <div className={styles.passwordField}>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Insira a sua senha"
                  required
                />
                <button
                  type="button"
                  aria-label="Mostrar senha"
                  className={styles.showPassword}
                >
                  👁
                </button>
              </div>
            </div>
            <button type="submit" className={styles.loginButton}>
              Entrar
            </button>
          </form>
        </section>
      </main> */}
    </>
  );
};

export default Login;
