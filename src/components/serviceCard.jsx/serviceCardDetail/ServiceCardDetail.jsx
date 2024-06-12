import { useGetSingleServiceQuery } from "../../../apiStore/serviceApi";
import {memo} from "react"

const ServiceCardDetail = memo(({ cardId, onclick }) => {
  const { data, error, isLoading } = useGetSingleServiceQuery(cardId, {
    skip: !cardId,
  });

  console.log(data, error, isLoading);

  return (
    data && (
      <>
        <h1 onClick={onclick}>{data.title}</h1>
        <p>{data.detailDescription}</p>
      </>
    )
  );
})

export default ServiceCardDetail;
