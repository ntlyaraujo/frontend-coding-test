import { useTheme, View, Text} from "vcc-ui";

export const ContainerApp = () => {
  const theme = useTheme();
  return (
    <View
      padding={[1, 2]}
      spacing={2}
      direction={"column"}
      justifyContent={"flex-start"}
      height={"100vh"}
      extend={{
        background: theme.color.background.secondary,
      }}
    >
      <View
        direction={"column"}
        extend={{
          border: "1px solid grey",
        }}
      >
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
        {/* <Card>
          <CardContent>
            <Text variant="ootah">Card Component</Text>
            <Spacer />
            <Text>This is a card</Text>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Text variant="ootah">Card Component</Text>
            <Spacer />
            <Text>This is a card</Text>
          </CardContent>
        </Card> */}
      </View>
    </View>
  );
};
export default ContainerApp;
