import styles from "./styles/fileItem.module.css";
import csvLogo from "../assets/csv.png";

export const FileItem = () => {
  return (
    <div className={styles.file__item}>
      <div className={styles.file__info}>
        <img src={csvLogo} width={25} className={styles.file__image} />

        <span className={styles.file__name}>Filename.csv</span>
      </div>

      <div className={styles.file__controls}>
        <span className={styles.file__size}>3.8Mb</span>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z" />
        </svg>
      </div>
    </div>
  );
};
