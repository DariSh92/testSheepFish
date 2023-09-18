import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  price: yup
    .number()
    .typeError()
    .required(),
  description: yup.string().required(),
});

const AddProductScreen = () => {
  const navigation = useNavigation();

  const handleAddProduct = async (values) => {
    try {
      const newProduct = {
        id: Math.random().toString(), 
        title: values.title,
        price: values.price,
        description: values.description,
      };

      const existingProducts = await AsyncStorage.getItem('products');
      let updatedProducts = [];

      if (existingProducts) {
        updatedProducts = JSON.parse(existingProducts);
      }
      updatedProducts.push(newProduct);

      await AsyncStorage.setItem('products', JSON.stringify(updatedProducts));
      navigation.goBack();
    } catch (error) {
      console.error('Помилка при додаванні товару:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Додати товар</Text>
      <Formik
        initialValues={{ title: '', price: '', description: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleAddProduct(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              placeholder="Назва товару"
            />
            {touched.title && errors.title && <Text style={styles.errorText}>{errors.title}</Text>}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('price')}
              onBlur={handleBlur('price')}
              value={values.price}
              placeholder="Ціна товару"
              keyboardType="numeric"
            />
            {touched.price && errors.price && <Text style={styles.errorText}>{errors.price}</Text>}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              placeholder="Опис товару"
            />
            {touched.description && errors.description && (
              <Text style={styles.errorText}>{errors.description}</Text>
            )}

            <Button onPress={handleSubmit} title="Додати товар" />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
});

export default AddProductScreen;
