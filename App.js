import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreens"
import CounterScreen from "./src/screens/CounterScreen";
import RandomColorScreen from "./src/screens/RandomColorScreen";
import ColorMixer from "./src/screens/ColorMixer";
import ColorMixerVariation from "./src/screens/ColorMixerVariation";
import CounterWithReducer from "./src/screens/CounterWithReducer";
import TextInputScreen from "./src/screens/TextInputScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Colors: RandomColorScreen,
    Mixer: ColorMixer,
    MixerReducer: ColorMixerVariation,
    CounterReducer: CounterWithReducer,
    Text:TextInputScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Twingling Star",
    },
  }
);

export default createAppContainer(navigator);
