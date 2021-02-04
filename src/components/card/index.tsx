import { useTheme, View, Text, Inline } from "vcc-ui";
interface CardProps {
  key: string;
  header: {
    title: string;
    subtitle?: string;
    descriptionTop?: string;
  };
  content?: {
    image?: string;
    text?: string;
  };
  actions?: string[];
}
const Card = ({ header, content, actions }: CardProps) => {
  const theme = useTheme();
  return (
    <View
      direction={"column"}
      width={"35vh"}
      extend={{
        border: "1px solid grey",
      }}
    >
      <View className="card__header" direction={"column"}>
        <Text
          className="card__header__descriptionTop"
          extend={{
            color: theme.color.foreground.secondary,
          }}
          subStyle="emphasis"
        >
          {header.descriptionTop}
        </Text>
        <View direction={"row"} alignItems={"baseline"} justifyContent={"space-between"}>
          <Text
            className="card__header__title"
            variant="hillary"
            subStyle="emphasis"
          >
            {header.title}
          </Text>

          <Text
            className="card__header__subtitle"
            extend={{
              color: theme.color.foreground.secondary,
            }}
          >
            {header.subtitle}
          </Text>
        </View>
      </View>
      <View className="card__content" alignItems={"flex-start"} direction={"column"}>
      <img src={content?.image} alt="Car" width={"100%"} />
      </View>
      <View className="card__actions" direction={"row"}></View>
    </View>
  );
};

export default Card;
