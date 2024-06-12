import ServiceCards from "./serviceCard.jsx/ServiceCards";
import styles from "./Service.module.css"
const Service = () => {
  return (
    <div className={styles.service_section}>
      <div className="serviceText-container">
        <p>Сервис</p>
        <p>От идеи до незабываемого и измеримого результата.</p>

        <div className="stick-container"></div>
        <p>
          Интеграция безупречного производства, передовых технологий и
          тщательного измерения производительности
        </p>
      </div>
      <ServiceCards />
    </div>
  );
};

export default Service;
