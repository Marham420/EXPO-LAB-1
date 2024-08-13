// // import React from "react";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import { NavigationContainer } from "@react-navigation/native";
// // import SplashScreen from "./screens/SplashScreen";
// // import HomeScreen from "./screens/HomeScreen";

// // const Stack = createNativeStackNavigator();

// // export default function App () {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
// //         <Stack.Screen name="Splash" component={SplashScreen} />
// //         <Stack.Screen name="Home" component={HomeScreen} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   )
// // }
// import React from 'react';
// import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

// const { width } = Dimensions.get('window');

// // Data kendaraan
// const vehicles = [
//   { id: '1', brand: 'Brand 1', code: '12345', status: 'Available', image: require('./assets/img/1.jpeg') },
//   { id: '2', brand: 'Brand 2', code: '67890', status: 'Rented', image: require('./assets/img/2.jpeg') },
//   { id: '3', brand: 'Brand 3', code: '11223', status: 'Available', image: require('./assets/img/3.jpeg') },
//   { id: '4', brand: 'Brand 4', code: '44556', status: 'Maintenance', image: require('./assets/img/4.jpeg') },
//   { id: '5', brand: 'Brand 5', code: '77889', status: 'Available', image: require('./assets/img/5.jpeg') },
// ];

// const HomeScreen = () => (
//   <ScrollView style={styles.container}>
//     {/* Teks Selamat Datang */}
//     <View style={styles.textContainer}>
//       <Text style={styles.mainText}>Halo mau merasakan pengalaman apa hari ini?</Text>
//       <Text style={styles.subText}>Proccess Sewa</Text>
//     </View>

//     {/* Daftar Kendaraan */}
//     <View style={styles.vehicleList}>
//       {vehicles.map((vehicle) => (
//         <View key={vehicle.id} style={styles.vehicleCard}>
//           <Image source={vehicle.image} style={styles.vehicleImage} />
//           <Text style={styles.vehicleBrand}>{vehicle.brand}</Text>
//           <Text style={styles.vehicleCode}>Kode Pesanan: {vehicle.code}</Text>
//           <Text style={styles.vehicleStatus}>Status: {vehicle.status}</Text>
//         </View>
//       ))}
//     </View>
//   </ScrollView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 16,
//   },
//   textContainer: {
//     marginBottom: 20,
//   },
//   mainText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   subText: {
//     fontSize: 18,
//     color: '#555',
//   },
//   vehicleList: {
//     marginTop: 10,
//   },
//   vehicleCard: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 16,
//     elevation: 3,
//   },
//   vehicleImage: {
//     width: '100%',
//     height: 150,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   vehicleBrand: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   vehicleCode: {
//     fontSize: 14,
//     color: '#777',
//   },
//   vehicleStatus: {
//     fontSize: 14,
//     color: '#333',
//   },
// });

// export default HomeScreen;



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProcessScreen from './screens/ProccessScreen';
import SplashScreen from './screens/SplashScreen';
import MyTabs from './screens/MyTabs';
import Login from './screens/LoginPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false, // Menyembunyikan header default
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Process" component={ProcessScreen} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


