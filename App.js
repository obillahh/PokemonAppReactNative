import * as React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "./src/manager/redux/store";
import { PaperProvider } from "react-native-paper";
import AppNavigator from "./src/navigation/AppNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={{ version: 2 }}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
