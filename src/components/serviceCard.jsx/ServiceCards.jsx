import { useGetAllServicesQuery } from "../../apiStore/serviceApi";
import ServiceCard from "./ServiceCard";
import { serviceCardImages } from "./serviceCardImages";

const ServiceCards = () => {
  const { data: serviceCardsData, isLoading, error } = useGetAllServicesQuery();
  if (isLoading) return <h1>Loading services...</h1>;
  if (error) return <h1>Error loading services.</h1>;

  return (
    <>
      {serviceCardsData &&
        serviceCardsData.map((card) => (
          <ServiceCard
            key={card.id}
            id={card.id}
            title={card.title}
            image={serviceCardImages[card.id - 1]}
            description={card.description}
          />
        ))}
    </>
  );
};

export default ServiceCards;
