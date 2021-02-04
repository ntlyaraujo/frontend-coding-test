import React from "react";
import ContainerApp from "../../components/containerApp";
import useCar from "../../core/useCar";
import { CarResponse } from "../../core/types";
import CarouselView from "../../components/carouselView";
import Card from "../../components/card";
import { Spinner } from "vcc-ui";

const HomePage = (props: any) => {
  const { data, isPending } = useCar();

  const renderCardList = (data: CarResponse) => {
    console.log("data: ", data);
    const { cars } = data;
    return cars.map((item) => (
      <Card
        key={item.id}
        header={{
          title: item.modelName,
          subtitle: item.modelType,
          descriptionTop: item.bodyType,
        }}
        content={{
            image: item.imageUrl,
          }}
      />
    ));
  };

  return (
    <div>
      {!isPending && data ? (
        <div>
          <ContainerApp
            children={
              <CarouselView
                isRTL={false}
                itemsToShow={4}
                children={renderCardList(data)}
              />
            }
            title={"All Recharge models "}
          />
        </div>
      ) : (
        <Spinner size={60} color="blue" />
      )}
    </div>
  );
};

export default HomePage;
