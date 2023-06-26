import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const HotelItem = ({ name, price, rating, image }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: image }} style={styles.image}>
        <View style={styles.overlay} />
        <View style={styles.contentContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>Prix : {price} €</Text>
          <Text style={styles.price}>Note : {rating}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  contentContainer: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
});

export default HotelItem;
