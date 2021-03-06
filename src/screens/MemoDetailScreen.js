import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.memoHeader}>
          <View style={styles.memoheaderContent}>
            <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
            <Text style={styles.memoHeaderDate}>2020/6/8</Text>
          </View>
        </View>

        <View>
          <Text>講座のアイデアです</Text>
          <Text>2020/6/8</Text>
        </View>

        <CircleButton color = "white" style = {styles.editButton}>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContents: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#ddd',
    flex: 1,
  },
  editButton: {
    top: 75,
  },
});

export default MemoDetailScreen;
