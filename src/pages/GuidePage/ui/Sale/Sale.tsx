import styles from "./Sale.module.scss";
import indonesia from "./img/indonesia.jpg";
import YellowButton from "../../../../shared/ui/seeButton/YellowButton";

const Sale = (props) => {
  return (
    <div className={styles.sale}>
      <div className={styles.card}>
        <img src={indonesia} className={styles.img} />
        <div className={styles.text}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.description}>{props.description}</p>
          <YellowButton text='Посмотреть' link={props.link} />
        </div>
        <div className={styles.about}>
          <p className={styles.about_text}>{props.text1}</p>
          <p className={styles.about_text}>{props.text2}</p>
          <p className={styles.about_text}>{props.text3}</p>
        </div>
      </div>
    </div>
  );
};

export default Sale;
