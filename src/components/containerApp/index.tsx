import { FunctionComponent } from "react";
import { useTheme, View, Text } from "vcc-ui";

const ContainerApp: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  return (
    <View
      padding={[1, 2]}
      spacing={2}
      direction={"column"}
      justifyContent={"center"}
      height={"100vh"}
      extend={{
        background: theme.color.background.secondary,
      }}
    >
      <View direction={"column"} alignSelf={"center"}>
        <Text variant="hillary" subStyle="emphasis">
          All Recharge models
        </Text>
      </View>

      <View
        direction={"row"}
        padding={[1, 2]}
        spacing={2}
        extend={{
          border: "1px solid grey",
        }}
      >
        {children}
      </View>
    </View>
  );
};
export default ContainerApp;
