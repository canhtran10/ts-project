import {Button, Text, View} from "react-native";
import * as React from "react";
import {stylesGlobal} from "../Layout";

export interface Props {
  navigation: any
}

export const Setting: React.FC<Props> = (props) => {
  return (
    <View style={stylesGlobal.root}>
      <Text>Settings Screen</Text>
      <Button title={"Home screen"} onPress={() => props.navigation.goBack()}/>
    </View>
  );
};
