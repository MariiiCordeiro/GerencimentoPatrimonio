import styles from "../itemAmbiente/itemAmbiente.module.css";
import Script from "next/script";

const ItemAmbiente = () => {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/193783e0a6.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <tr className={styles.item}>
        <td>Sala 30/31 (anfiteatro)</td>
        <td>Samanta Melissa</td>
        <td>
          <a href="#" aria-label="Ver detalhes da Sala 30/31">
            <i className="fa-solid fa-circle-info" />
          </a>
        </td>
      </tr>
    </>
  );
};

export default ItemAmbiente;
