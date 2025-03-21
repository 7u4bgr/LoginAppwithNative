import { SafeAreaView, StyleSheet, View } from 'react-native';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import HomeScreeen from './component/HomeScreen';


export default function App() {
  return (
    <SafeAreaView style={styles.containers}>
      <Header />
      <HomeScreeen />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
});
