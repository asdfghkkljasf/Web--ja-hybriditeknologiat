import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [intensity, setIntensity] = useState(1.3);
  const [gender, setGender] = useState('male');
  const [calories, setCalories] = useState(0);

  const intensities=Array();
  intensities.push({label: 'light',value: 1.3});
  intensities.push({label: 'usual',value: 1.5});
  intensities.push({label: 'moderate',value: 1.7});
  intensities.push({label: 'hard',value: 2});
  intensities.push({label: 'very hard',value: 2.2});



  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  const calculate = () => {
    let result = 0;
    if (gender === 'male') {
      result = (879 + 10.2 * weight) * intensity;
    } else {
      result = (795 + 7.18 * weight) * intensity;
    }
    setCalories(result);
  };

  return (
    <View style={styles.container}>
      <Text>Weight</Text>
      <TextInput
        placeholder="Enter weight in kilograms"
        keyboardType="numeric"
        value={weight.toString()}
        onChangeText={(text) => setWeight(text)}
      />

      <Text>Intensity</Text>
      <Picker
        style={styles.picker}
        selectedValue={intensity}
        onValueChange={(value) => setIntensity(value)}
      >
        {intensities.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>

      <Text>Gender</Text>
      <RadioForm
        style={styles.radio}
        buttonSize={10}
        radio_props={genders}
        initial={0}
        onPress={(value) => setGender(value)}
      />

      <Text>Calories: {calories.toFixed(0)}</Text>
      <Button title="CALCULATE" onPress={calculate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56,
    margin: 8,
  },
  field: {
    marginBottom: 8,
    marginTop: 8
  },
  radio: {
    marginTop: 8,
  },
  intensity: {
    alignSelf: 'stretch',
  }
});
