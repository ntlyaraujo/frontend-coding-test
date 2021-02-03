import React from "react";
import ContainerApp from "../../components/containerApp";
import useCar from '../../core/useCar'
import { CarResponse } from "../../core/types";
import { Card, CardContent, Text, Spacer} from "vcc-ui";

const HomePage = (props: any) => {
  const { data, isPending, errorCode } = useCar();

  const renderRow = (data: CarResponse) => {
    const { cars } = data;
    return cars.map((item) => (
        <Card>
        <CardContent>
          <Text variant="ootah">Card Component</Text>
          <Spacer />
          <Text>{item.modelName}</Text>
        </CardContent>
      </Card>
    )
    );
  };
  return (
      <ContainerApp>
      {data?renderRow(data):null}
      </ContainerApp>
  );
};

export default HomePage;
