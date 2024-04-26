import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
});

const schema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Password should be at least 4 characters long')
    .max(20, 'Password should be at most 20 characters long')
    .required("Password can't be empty"),
});

const PasswordCom = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [isNumeric, setIsNumeric] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);

  const generatePass = (passLen: number) => {
    let charList = '';

    const upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
    const numberChar = '0123456789';
    const symbolChar = '!@#$%^&*()_+';

    if (lowercase) charList += lowerCaseChar;
    if (uppercase) charList += upperCaseChar;
    if (isNumeric) charList += numberChar;
    if (symbols) charList += symbolChar;

    const passwordResult = createPass(charList, passLen);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPass = (char: string, passLen: number) => {
    let result = '';
    for (let i = 0; i < passLen; i++) {
      const charIndex = Math.round(Math.random() * char.length);
      result += char.charAt(charIndex);
    }
    return result;
  };

  const resetPass = () => {
    setPassword('');
    setIsPassGenerated(false);
    setIsNumeric(false);
    setSymbols(false);
    setLowercase(true);
    setUppercase(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={schema}
            onSubmit={(values) => {
              generatePass(+values.passwordLength);
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Password Length"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckbox
                    isChecked={isNumeric}
                    onPress={() => setIsNumeric(!isNumeric)}
                    fillColor="#C9A0DC"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#EC80A5"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lowercase</Text>
                  <BouncyCheckbox
                    isChecked={lowercase}
                    onPress={() => setLowercase(!lowercase)}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase</Text>
                  <BouncyCheckbox
                    isChecked={uppercase}
                    onPress={() => setUppercase(!uppercase)}
                    fillColor="#FED85D"
                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={handleSubmit}>
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPass();
                    }}>
                    <Text style={styles.secondaryBtnTxt}> Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPassGenerated && (
          <View style={styles.card}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            <Text selectable style={styles.generatedPassword}>
              {password}
            </Text>
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default PasswordCom;
