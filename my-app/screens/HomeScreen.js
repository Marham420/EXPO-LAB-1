import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

// Data kendaraan
const vehicles = [
  { id: '1', brand: 'Toyota', code: 'TOY123', status: 'Available', image: require('../assets/img/1.jpeg') },
  { id: '2', brand: 'Honda', code: 'HON456', status: 'Available', image: require('../assets/img/2.jpeg') },
  { id: '3', brand: 'BMW', code: 'BMW789', status: 'Unavailable', image: require('../assets/img/3.jpeg') },
  { id: '4', brand: 'Audi', code: 'AUD321', status: 'Available', image: require('../assets/img/4.jpeg') },
  { id: '5', brand: 'Mercedes', code: 'MER654', status: 'Available', image: require('../assets/img/5.jpeg') },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollViewRef, setScrollViewRef] = useState(null);

  const SLIDER_SPEED = 3000; // Waktu dalam milidetik

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef) {
        const nextSlide = (currentSlide + 1) % vehicles.length;
        scrollViewRef.scrollTo({ x: nextSlide * width, animated: true });
        setCurrentSlide(nextSlide);
      }
    }, SLIDER_SPEED);

    return () => clearInterval(interval);
  }, [currentSlide, scrollViewRef]);

  const renderDots = () => {
    return (
      <View style={styles.dotContainer}>
        {vehicles.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, { backgroundColor: index === currentSlide ? '#007bff' : '#ccc' }]}
          />
        ))}
      </View>
    );
  };

  const handlePressVehicle = (vehicle) => {
    navigation.navigate('Process', { vehicle });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Halo mau merasakan pengalaman apa hari ini?</Text>
          <Text style={styles.subTitle}>Proccess Sewa</Text>
        </View>

        {/* Slider */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={(ref) => setScrollViewRef(ref)}
          onScroll={(e) => setCurrentSlide(Math.round(e.nativeEvent.contentOffset.x / width))}
          scrollEventThrottle={16}
        >
          {vehicles.map((vehicle, index) => (
            <Image key={index} source={vehicle.image} style={styles.sliderImage} />
          ))}
        </ScrollView>
        {renderDots()}

        {/* Available Vehicles */}
        <View style={styles.vehicleGrid}>
          {vehicles.map(vehicle => (
            <TouchableOpacity
              key={vehicle.id}
              style={styles.vehicleContainer}
              onPress={() => handlePressVehicle(vehicle)}
            >
              <Image source={vehicle.image} style={styles.vehicleImage} />
              <Text style={styles.vehicleBrand}>{vehicle.brand}</Text>
              <Text style={styles.vehicleCode}>Kode Pesanan: {vehicle.code}</Text>
              <Text style={styles.vehicleStatus}>Status: {vehicle.status}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 18,
    color: '#777',
  },
  sliderImage: {
    width: width - 32,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginHorizontal: 16,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  vehicleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  vehicleContainer: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    alignItems: 'center',
  },
  vehicleImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  vehicleBrand: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  vehicleCode: {
    fontSize: 14,
    color: '#777',
  },
  vehicleStatus: {
    fontSize: 14,
    color: '#333',
  },
});

export default HomeScreen;
