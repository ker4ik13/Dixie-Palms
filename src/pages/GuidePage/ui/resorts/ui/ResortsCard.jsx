import styles from "./ResortsCard.module.scss";
import YellowButton from "../../../../../shared/ui/seeButton/YellowButton";

const ResortsCard = ({ item, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img_wrapper}>
        <p className={styles.card_price}>{item.price}</p>
        <img src={img} className={styles.img} />
      </div>
      <p className={styles.card_title}>{item.title}</p>
      <div className={styles.description}>
        <p className={styles.description_title}>{item.descriptionTitle}</p>
        <p className={styles.description_text}>{item.descriptionText}</p>
        <div className={styles.button_wrapper}>
          <YellowButton text='Посмотреть' to={`/resort${item.id}`} />
        </div>
      </div>
    </div>
  );
};

export default ResortsCard;
