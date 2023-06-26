import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ProfileInfos from '../components/ProfileInfos';

const ProfileScreen = ({ goBack }) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        </View>
        <ProfileInfos />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
    header: {
      backgroundColor: '#eee',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    backButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#ccc',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    backButtonText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
  });


export default ProfileScreen;