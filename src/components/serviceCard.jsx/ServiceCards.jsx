import { useGetAllServicesQuery } from "../../apiStore/serviceApi";
import ServiceCard from "./ServiceCard";
import { serviceCardImages } from "./serviceCardImages";

const ServiceCards = () => {
  const {data:serviceCardsData}=useGetAllServicesQuery()


  return (
    <>
      {serviceCardsData && serviceCardsData.map((card) => (
        <ServiceCard
          key={card.id}
          id={card.id}
          title={card.title}
           image={serviceCardImages[card.id-1]}
           description={card.description}
        />
      ))}
    </>
  );
};

export default ServiceCards;
