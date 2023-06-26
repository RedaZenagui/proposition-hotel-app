import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileInfos = () => {
    //
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/profile-image.jpg')}
        style={styles.profileImage}
      />

      <Text style={styles.name}>Jérémy Mathieu</Text>
      <Text style={styles.description}>Développeur Full Stack</Text>
      <Text style={styles.email}>Jérémy.Mathieu@gmail.com</Text>
      <Text style={styles.location}>Paris, France</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#888',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#888',
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
    color: '#888',
  },
  location: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProfileInfos;