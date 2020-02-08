import {createStackNavigator} from "@react-navigation/stack";
import * as React from "react";
import {Help} from '../Container';
import {TabNavigatorBottom} from "./TabNavigatorBottom";
import {View, Text} from "react-native";

const Stack = createStackNavigator();

export interface Props {

}

export const StackNavigator: React.FC<Props> = (props) => {
  return (<Stack.Navigator>
    <Stack.Screen name="TabNavigatorBottom" component={TabNavigatorBottom}
        options = {{
          header: ({ scene, previous, navigation }) => {
            console.log('x', scene)
            const { options } = scene.descriptor;
            const title =
              scene.route.params !== undefined && scene.route.params.screen !== undefined
              ? scene.route.params.screen
              : options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name;

            return (
              <View style={{backgroundColor: 'red'}}>
                <Text>{title}</Text>
              </View>
            );
          }
        }}
    />
    <Stack.Screen name="Help" component={Help} options={
      {title: 'Help screen now'}
    }/>
  </Stack.Navigator>)
};