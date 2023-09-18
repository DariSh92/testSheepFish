import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import AddProductScreen from './screens/AddProductScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Список товарів"
          component={ProductListScreen}
        />
        <Stack.Screen
          name="Деталі товару"
          component={ProductDetailsScreen}
        />
         <Stack.Screen
          name="Форма додавання товару"
          component={AddProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;






