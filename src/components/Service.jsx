import ServiceCards from "./serviceCard.jsx/ServiceCards";
import styles from "./Service.module.css";
import Line from "../assets/icons/line.png";
const Service = () => {
  return (
    <div className={`${styles.service_section} container`}>
      <div className={styles.serviceText_container}>
        <p className={styles.h1}>Сервис</p>
        <p className={styles.h4}>От идеи до незабываемого и измеримого результата.</p>

        <div className="line-image">
          <img src={Line} alt={Line} />
        </div>
        <p className={styles.h5}>
          Интеграция безупречного производства, передовых технологий и
          тщательного измерения производительности
        </p>
      </div>
      <div className={styles.card_container}>
        <ServiceCards />
      </div>
    </div>
  );
};

export default Service;
