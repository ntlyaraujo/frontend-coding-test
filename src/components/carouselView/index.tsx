import { View } from "vcc-ui";
import Carousel from "react-elastic-carousel";
import './style.css'

interface CarouselViewProps {
  children: React.ReactNode;
  isRTL: boolean;
  itemsToShow: number;
}
const CarouselView = ({ children, isRTL, itemsToShow }: CarouselViewProps) => {
  return (
    <View
      padding={[1, 2]}
      spacing={2}
      direction={"row"}
      justifyContent={"flex-start"}
      extend={{
        border: "1px solid grey",
      }}
      
    >
      <Carousel isRTL={isRTL} itemsToShow={itemsToShow} breakPoints={[
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2},
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4 },
        { width: 1450, itemsToShow: 4 },
        { width: 1750, itemsToShow: 4 },
      ]}> 
        {children}
      </Carousel>
    </View>
  );
};
export default CarouselView;
