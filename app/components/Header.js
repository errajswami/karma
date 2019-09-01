import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { defaultStyles } from '../styles/defaults'

export class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Got Question?</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: "#3949AB",
    alignItems: "flex-start",
    justifyContent: "center",
    borderBottomWidth: 5,
    borderBottomColor: "#ddd",
    paddingTop:20
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 20
  },
})