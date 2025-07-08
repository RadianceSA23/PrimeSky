// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './src/redux/store';
// import { StatusBar, useColorScheme, StyleSheet } from 'react-native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import HomeScreen from './src/screens/HomeScreen';

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';
// console.log("colorTheme is isDarkMode: "+isDarkMode)
//   return (
//     <Provider store={store}>
//       <SafeAreaProvider>
//       <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
//         <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//         <HomeScreen />
//       </SafeAreaView>
//       </SafeAreaProvider>
      
//     </Provider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './src/redux/store';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const theme = isDarkMode ? MD3DarkTheme : MD3LightTheme;

  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
        <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <HomeScreen />
          </SafeAreaView>
        </SafeAreaProvider>
      </PaperProvider>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
