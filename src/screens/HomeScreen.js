import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image,TextInput } from 'react-native';
import { getHotelProposals } from '../services/hotelService';
import HotelItem from '../components/HotelItem';
import HotelDetailsScreen from './HotelDetailsScreen';
import ProfileScreen from './ProfileScreen';

const HomeScreen = () => {
  const [hotelProposals, setHotelProposals] = useState([]);
  const [activeScreen, setActiveScreen] = useState('home');
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');


  useEffect(() => {
    const fetchHotelProposals = async () => {
      const proposals = await getHotelProposals();
      setHotelProposals(proposals);
    };

    fetchHotelProposals();
  }, []);

  const handleHotelPress = (hotelId) => {
    setSelectedHotelId(hotelId);
    setActiveScreen('detail');
  };

  const handleProfilePress = () => {
    setActiveScreen('profil');
  };

  const handleGoBack = () => {
    setActiveScreen('home');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleHotelPress(item.id)}>
      <HotelItem
        name={item.name}
        price={item.price}
        rating={item.rating}
        image={item.image_url}
        id={item.id}
      />
    </TouchableOpacity>
  );

  const renderScreen = () => {
    //ON A UTILISE CETTE METHODE AU LIEU
    //DE REACT-NAVIGATION CAR LA LIBRAIRIE
    //AINSI QUE SES DEPENDENCES
    //AVAIT DES PROBLEMES AVEC LA VERSION
    //DU GRADLE ET DE REACT
    //ON A PAS SU RESOUDRE LE PROBLEME
    //CE QUI NOUS A MENE VERS CETTE SOLUTION
    switch (activeScreen) {
      case 'detail':
        //Cas écran hotel détail
        return <HotelDetailsScreen hotelId={selectedHotelId} goBack={handleGoBack} />;
      case 'profil':
        //Cas profil
        return <ProfileScreen goBack={handleGoBack} />;
      default:
        //Pour tout autre cas, on retourne l'écran home
        const filteredHotels = hotelProposals.filter(hotel =>
          hotel.name.toLowerCase().includes(searchKeyword.toLowerCase())
        );
  
        return (
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Liste des Hôtels</Text>
              <TouchableOpacity onPress={handleProfilePress}>
                <Image source={require('../assets/profile-image.jpg')} style={styles.profileImage} />
              </TouchableOpacity>
            </View>
            <View style={styles.searchBarContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Rechercher un hôtel..."
                placeholderTextColor="#999"
                value={searchKeyword}
                onChangeText={setSearchKeyword}
              />
              <TouchableOpacity style={styles.searchButton} onPress={() => setSearchKeyword('')}>
                <Text style={styles.searchButtonText}>Effacer</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={filteredHotels}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContainer}
            />
          </View>
        );        
    }
  };  

  return renderScreen();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    color: '#333',
  },
  searchButton: {
    backgroundColor: '#333',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#eee',
  },
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});


export default HomeScreen;
