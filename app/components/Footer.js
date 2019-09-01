import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'


export class Footer extends React.Component {

  render() {
    return (
        <View style={styles.footer}>
        <TextInput
          onChangeText={this.props.addText}
          value={this.props.noteText}
          style={styles.textInput}
          placeholder="Enter Note"
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={styles.noteAdd} onPress={this.props.addNote}>
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#7986CB"
      },
      textInput: {
        alignSelf: "stretch",
        color: "white",
        padding: 20,
        fontSize: 16,
        alignItems: "center",
        justifyContent: "center",
      },
      addButtonText: {
        color: "white",
        fontSize: 24,
      },
      noteAdd:{
        position:'absolute',
        justifyContent:'center',
        alignItems: 'center',
        color:'white',
        backgroundColor:'#5C6BC0',
        padding:20,
        bottom:0,
        top:0,
        right:0,
    },
})