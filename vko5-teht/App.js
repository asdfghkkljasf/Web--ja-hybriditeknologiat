import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {DATA} from './Data';
import Row from './components/Row';

export default function App() {

  return (    
 <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Row person={item} />
          )}
        ></FlatList>
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});