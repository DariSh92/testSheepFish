// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Provider, useSelector, useDispatch } from 'react-redux';
// import { configureStore, createSlice } from '@reduxjs/toolkit';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Список товарів" component={ProductListScreen} />
//         <Stack.Screen name="Деталі товару" component={ProductDetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



// App.js

// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './redux/productStore';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import ProductList from './components/ProductList';

// // const store = configureStore();

// const Stack = createStackNavigator();

// const App = () => {
//   // const title = "Список товарів";
//   // const products = []; 
//   // const AddProduct = () => {

//   return (
//     <Provider store={store}>
//        <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Список товарів" component={ProductListScreen} />
//         <Stack.Screen name="Деталі товару" component={ProductDetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//     </Provider>
//   );
// };

// export default App;


import React from 'react';
import { Provider } from 'react-redux';
import store  from './redux/productStore';
import Navigation from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;