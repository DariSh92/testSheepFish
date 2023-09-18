import React  from 'react';
import { View, Text, Image, StyleSheet,  } from 'react-native';



const ProductDetailsScreen = React.memo(({ route }) => {
  const { product } = route.params; 

  return (
    <View style={styles.container}>
    <View style={styles.imageWrapp}></View>
    <Image
      source={{ uri: product.image }}
      style={{ width: 200, height: 200, borderRadius: 10 }}
    />
    <Text style={styles.productName}>{product.title}</Text>
    <Text style={styles.productPrice}>{product.price} $</Text>
    
  </View>
  ); 
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', 
    borderRadius: 90,
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
 
  productName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 20,
  },
  productPrice: {
    fontSize: 20,
    color: "#20232a", 
  },
});

export default ProductDetailsScreen;
