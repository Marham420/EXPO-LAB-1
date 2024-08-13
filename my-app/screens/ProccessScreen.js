import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const ProcessScreen = ({ route, navigation }) => {
  const { vehicle } = route.params;

  const handleRent = () => {
    // Implementasi proses penyewaan, misalnya, navigasi ke halaman pembayaran
    Alert.alert('Sewa Kendaraan', 'Proses penyewaan kendaraan berhasil!', [
      { text: 'OK', onPress: () => navigation.navigate('Home') },
    ]);
  };

  return (
    <View style={styles.container}>
      <Image source={vehicle.image} style={styles.vehicleImage} />
      <Text style={styles.vehicleBrand}>{vehicle.brand}</Text>
      <Text style={styles.vehicleCode}>Kode Pesanan: {vehicle.code}</Text>
      <Text style={styles.vehicleStatus}>Status: {vehicle.status}</Text>
      <TouchableOpacity style={styles.rentButton} onPress={handleRent}>
        <Text style={styles.rentButtonText}>Sewa Kendaraan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
    alignItems: 'center',
  },
  vehicleImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  vehicleBrand: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  vehicleCode: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  vehicleStatus: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  rentButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  rentButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProcessScreen;
