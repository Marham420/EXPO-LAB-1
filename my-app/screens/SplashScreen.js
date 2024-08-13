import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

export default function SplashScreen({ navigation }) {
    const [fontLoaded] = useFonts({
        'MetroBold' : require('../assets/fonts/Metropolis-Bold.otf')
    })

    if(!fontLoaded) return (
        <View><Text>Font tidak ditemukan...</Text></View>
    )
  return (
    <ImageBackground
      source={require('../assets/img/bg.webp')} 
      style={styles.backgroundImage}
    >
      {/* Overlay to darken the background image */}
      <View style={styles.darkOverlay} />

      <View style={styles.overlay}>
        <Text style={styles.title}>Find and rental car in easy steps.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>LET'S GO!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: 'auto%',
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  overlay: {
    padding: 20,
    alignItems: 'center',
    bottom:30
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'flex-start',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    width: '100%'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign:'center',
    fontFamily:'MetroBold'
  },
});
