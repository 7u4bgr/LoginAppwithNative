import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import HomeScreen from './component/HomeScreen';
import DashboardScreen from './pages/DashboardScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header'ı burada tutuyoruz */}
      <Header />
      
      {/* Navigation'ı burada tutuyoruz */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* Footer'ı burada tutuyoruz */}
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
