import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Picker} from '@react-native-picker/picker';

const feeStructure = {
  'Exam Fee': {
    INDIAN: {
      'ALL_COURSES​': {
        'ALL_LEVEL​': {
          amount: 400,
        },
      },
    },
    FOREIGN: {
      'ALL_COURSES​': {
        'ALL_LEVEL​': {
          amount: 100,
        },
      },
    },
    NRI: {
      'ALL_COURSES​': {
        'ALL_LEVEL​': {
          amount: 600,
        },
      },
    },
    SAARC: {
      'ALL_COURSES​': {
        'ALL_LEVEL​': {
          amount: 600,
        },
      },
    },
  },
  'Application Fee': {
    INDIAN: {
      'ALL_COURSES​': {
        UG: {
          amount: 200,
        },
        'UG-DIPLOMA': {
          amount: 300,
        },
        PG: {
          amount: 500,
        },
      },
    },
    FOREIGN: {
      'ALL_COURSES​': {
        UG: {
          amount: 400,
        },
        'UG-DIPLOMA': {
          amount: 400,
        },
        PG: {
          amount: 700,
        },
      },
    },
  },
};

const App = () => {
  const [selectedFee, setSelectedFee] = useState(null);
  const [selectedNationality, setSelectedNationality] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [finalAmount, setFinalAmount] = useState(null);

  const getOptions = obj => Object.keys(obj);

  const handleFeeChange = value => {
    setSelectedFee(value);
    setSelectedNationality(null);
    setSelectedCourse(null);
    setSelectedLevel(null);
    setFinalAmount(null);
  };

  const handleNationalityChange = value => {
    setSelectedNationality(value);
    setSelectedCourse(null);
    setSelectedLevel(null);
    setFinalAmount(null);
  };

  const handleCourseChange = value => {
    setSelectedCourse(value);
    setSelectedLevel(null);
    setFinalAmount(null);
  };

  const handleLevelChange = value => {
    setSelectedLevel(value);

    // Calculate the final amount based on the selected options
    const amount =
      feeStructure[selectedFee][selectedNationality][selectedCourse][value]
        .amount;
    setFinalAmount(amount);
  };

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Fee Structure</Text>
      </View>
    );
  };

  return (
    <View>
      <Header />
      {/* First Picker for Fee Type */}
      <Picker selectedValue={selectedFee} onValueChange={handleFeeChange}>
        <Picker.Item label="Please Select Fee" value={null} />
        {getOptions(feeStructure).map(fee => (
          <Picker.Item key={fee} label={fee} value={fee} />
        ))}
      </Picker>

      {/* Second Picker for Nationality */}
      {selectedFee && (
        <Picker
          selectedValue={selectedNationality}
          onValueChange={handleNationalityChange}>
          <Picker.Item label="Select Nationality" value={null} />
          {getOptions(feeStructure[selectedFee]).map(nationality => (
            <Picker.Item
              key={nationality}
              label={nationality}
              value={nationality}
            />
          ))}
        </Picker>
      )}

      {/* Third Picker for Course */}
      {selectedNationality && (
        <Picker
          selectedValue={selectedCourse}
          onValueChange={handleCourseChange}>
          <Picker.Item label="Select Course" value={null} />
          {getOptions(feeStructure[selectedFee][selectedNationality]).map(
            course => (
              <Picker.Item key={course} label={course} value={course} />
            ),
          )}
        </Picker>
      )}

      {/* Fourth Picker for Level */}
      {selectedCourse && (
        <Picker selectedValue={selectedLevel} onValueChange={handleLevelChange}>
          <Picker.Item label="Select Level" value={null} />
          {getOptions(
            feeStructure[selectedFee][selectedNationality][selectedCourse],
          ).map(level => (
            <Picker.Item key={level} label={level} value={level} />
          ))}
        </Picker>
      )}

      {/* Display Final Amount */}
      {finalAmount !== null && (
        <Text style={styles.amount}>Final Amount: {finalAmount}</Text>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#3498db', // Example background color
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#2980b9', // Example border color
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ecf0f1', // Example text color
  },
  amount: {margin: 20, fontWeight: '800', color: '#2980b9', fontSize: 15},
});
