import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';

const ProductListScreen = React.memo(({ navigation }) => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const ToproductDetails = async (productId) => {
  const productDetails = await getProductDetailsFromStorage(productId);
  if (productDetails) {
    setSelectedProduct(productDetails); 
    navigation.navigate('Деталі товару', { product: productDetails });
  } else {
    console.error('Товар не знайдено в AsyncStorage.');
  }
};

  const saveProductToStorage = async (product) => {
  try {
    await AsyncStorage.setItem(`product_${product.id}`, JSON.stringify(product));
  } catch (error) {
    console.error('Помилка при збереженні товару в AsyncStorage:', error);
  }
};

  useEffect(() => {
    const loadProductsFromStorage = async () => {
      try {
        const storedProducts = await AsyncStorage.getItem('products');
        if (storedProducts) {
          setData(JSON.parse(storedProducts));
        } else {
          fetch('https://fakestoreapi.com/products/')
            .then((response) => response.json())
            .then((data) => {
              setData(data);
              AsyncStorage.setItem('products', JSON.stringify(data));
            })
            .catch((error) => console.error('Помилка при отриманні продуктів:', error));
        }
      } catch (error) {
        console.error('Помилка при завантаженні продуктів зі сховища:', error);
      }
    };

    loadProductsFromStorage();
  }, []);



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Список товарів</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("Форма додавання товару")}

        >
      <Text style={styles.buttonText}>Додати товар</Text>
       </TouchableOpacity>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('Деталі товару', { product: item })}
          >
            
    <View style={styles.wrapper}>
      <Image
        source={{ uri: item.image }}
        style={{ width: 200, height: 200 }}
      />
        <Text style={styles.itemName}>{item.title}</Text>
        <Text style ={styles.itemPrice}>{item.price} $</Text>
    </View> 
        </TouchableOpacity>
        )}
      />
    </View>
  );

});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  header: {
    backgroundColor: "#F08080",
    borderRadius: 20,
    height: 60,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#32CD32',
    borderRadius: 10,
    // backgroundColor: '#5F9EA0',
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#32CD32',
    color: "#20232a",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
  },
  buttonText: {
    color: "#20232a",
    fontSize: 18,
    fontWeight: "bold",
  },
  wrapper: {
    backgroundColor: 'white', 
    borderRadius: 10,
    padding: 20,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: 'rgba(0, 0, 0, 0.1)', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2, 
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  itemPrice: {
    fontSize: 16,
    marginTop: 8,
    color: "#20232a", 
  },

})

export default ProductListScreen;


