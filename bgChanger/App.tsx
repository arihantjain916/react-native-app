import {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App(): JSX.Element {
  const [statusColor, setStatusColor] = useState('#fffffff');

  const changeStatusColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let index = 0; index < 6; index++) {
      color = color + hexRange[Math.floor(Math.random() * hexRange.length)];
    }
    console.log(statusColor);
    setStatusColor(color);
  };
  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <View style={[styles.container, {backgroundColor: statusColor}]}>
        <TouchableOpacity style={styles.actionBtn} onPress={changeStatusColor}>
          <View>
            <Text style={styles.actionBtnTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});
