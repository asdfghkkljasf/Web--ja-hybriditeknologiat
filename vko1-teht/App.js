import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerlimit, setLowerLimit] = useState(0);
  const [upperlimit, setUpperLimit] = useState(0);

  useEffect(() => {
    if (!age) {
      setLowerLimit(0)
      setUpperLimit(0)
      return;
    }

    const ageNumber = parseFloat(age);
    if (isNaN(ageNumber)) {
      alert('Age must be a valid number!')
      return
    }

    const lower = ((220 - ageNumber) * 0.65)
    const upper = ((220 - ageNumber) * 0.85)

    setLowerLimit(lower)
    setUpperLimit(upper)
  }, [age]);

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        placeholder='Enter your Age!'
        keyboardType='decimal-pad'
        value={age}
        onChangeText={text => setAge(text)}
        style={styles.field}
      />
      <Text style={styles.field}>HR Limits</Text>
      <Text style={styles.field}>
        {lowerlimit.toFixed(0)} - {upperlimit.toFixed(0)}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    marginBottom: 10,
  },
});
