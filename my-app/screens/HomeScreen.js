import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Pastikan sudah diimpor

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Bagian Atas dengan Lokasi dan Profil */}
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={styles.locationText}>Ngangklik, Sleman</Text>
          <Ionicons name="chevron-down-outline" size={20} color="black" />
        </View>
        <TouchableOpacity>
          <Image
            source={require('../assets/img/hero-bg.webp')} // Ganti dengan path gambar profil
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* Judul Utama */}
      <Text style={styles.mainTitle}>Find your favourite vehicle.</Text>

      {/* Pencarian */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={24} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search vehicle..."
          placeholderTextColor="gray"
        />
      </View>

      {/* Top Brands */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Brands</Text>
          <Text style={styles.sectionLink}>See All</Text>
        </View>
        <View style={styles.brandContainer}>
          <BrandIcon imageUri="https://path-to-tesla-logo.jpg" brandName="Tesla" />
          <BrandIcon imageUri="https://path-to-audi-logo.jpg" brandName="Audi" />
          <BrandIcon imageUri="https://path-to-bmw-logo.jpg" brandName="BMW" />
          <BrandIcon imageUri="https://path-to-mazda-logo.jpg" brandName="Mazda" />
        </View>
      </View>

      {/* Available Near You */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Available Near You</Text>
          <Text style={styles.sectionLink}>See All</Text>
        </View>
        <View style={styles.vehicleContainer}>
          <VehicleCard
            imageUri={require('../assets/img/hero-bg.webp')}
            title="Red Mazda 6 - Elite Estate"
          />
          <VehicleCard
            imageUri={require('../assets/img/hero-bg.webp')}
            title="Red Mazda 6 - Elite Estate"
          />
        </View>
      </View>
    </ScrollView>
  );
}

// Komponen untuk ikon merek
const BrandIcon = ({ imageUri, brandName }) => (
  <TouchableOpacity style={styles.brandIcon}>
    <Image source={{ uri: imageUri }} style={styles.brandImage} />
    <Text>{brandName}</Text>
  </TouchableOpacity>
);

// Komponen untuk kartu kendaraan
const VehicleCard = ({ imageUri, title }) => (
  <View style={styles.vehicleCard}>
    <Image source={imageUri} style={styles.vehicleImage} />
    <Text style={styles.vehicleTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 8,
    fontSize: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    marginLeft: 8,
    fontSize: 16,
    flex: 1,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionLink: {
    color: '#007bff',
  },
  brandContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandIcon: {
    alignItems: 'center',
    flex: 1,
  },
  brandImage: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  vehicleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vehicleCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  vehicleImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  vehicleTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
