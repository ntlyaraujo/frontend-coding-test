export const REQUEST_CARS = "REQUEST_CARS";

export interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}
export interface CarResponse {
  cars: Car[];
}

interface RequestCarsAction {
  type: typeof REQUEST_CARS;
  payload: CarResponse;
}

export type RequestActionTypes = RequestCarsAction;
