import { useGetSingleServiceQuery } from "../../../apiStore/serviceApi";
import { memo } from "react";
import styles from "./SDetail.module.css";
import LogoX from "../../../assets/icons/close.png";

const ServiceCardDetail = memo(({ cardId, onclick }) => {
  const { data } = useGetSingleServiceQuery(cardId, {
    skip: !cardId,
  });

  return (
    data && (
      <div className={styles.backdrop} onClick={onclick}>
        <div className={styles.modalContainer}>
          <img
            className={styles.closeButton}
            src={LogoX}
            alt={LogoX}
            onClick={onclick}
          />
          <h3>{data.title}</h3>
          <p>{data.detailDescription}</p>
        </div>
      </div>
    )
  );
});

export default ServiceCardDetail;
