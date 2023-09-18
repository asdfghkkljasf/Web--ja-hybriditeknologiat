import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , Platform} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar backgroundColor="red" style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS == 'android' ? Constants.statusBarHeight : 0,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
