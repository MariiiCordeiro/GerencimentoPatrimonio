import styles from "./itemPatrimonio.module.css";
import Script from "next/script";

const ItemPatrimonio = () => {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/193783e0a6.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <tr className={styles.item}>
        <td>1236808</td>
        <td>MESA TRAPEZOIDAL DC-1987a</td>
        <td>Mesa</td>
        <td>11/02/26</td>
        <td>
          <a href="#" aria-label="Ver detalhes do patrimonio">
            <i className="fa-solid fa-circle-info" />
          </a>
        </td>
        <td>
          <a href="#" aria-label="Transferir patrimonio">
            <i className="fa-solid fa-arrow-right-arrow-left" />
          </a>
        </td>
      </tr>
    </>
  );
};

export default ItemPatrimonio;
