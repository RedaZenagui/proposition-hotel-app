import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const HotelDetails = ({ hotel }) => {
  const { name, photos, price, rating, review_count, location, phone } = hotel;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.contentContainer}>
        <FlatList
            data={photos}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
            )}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Prix:</Text>
          <Text style={styles.value}>{price}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Note:</Text>
          <Text style={styles.value}>{rating}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Avis:</Text>
          <Text style={styles.value}>{review_count}</Text>
        </View>
      </View>
      <Text style={styles.address}>{`${location.address1}, ${location.zip_code} ${location.city}`}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.phone}>{phone}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  contentContainer: {
    flex: 0.4,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    //marginBottom: 10,
    marginRight: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  infoRow: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#888',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  address: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  phone: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default HotelDetails;
