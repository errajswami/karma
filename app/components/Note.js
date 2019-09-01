import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity
} from 'react-native';

export default class Note extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>

        <TouchableOpacity style={styles.noteDelete} onPress={this.props.deleteNote}>
            <Text style={styles.deleteText}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}




const styles = StyleSheet.create({
    note: {
        position: 'relative',
        borderBottomWidth: 0,
        borderBottomColor: '#3F51B5',
        color: 'black',
        backgroundColor:'white',
        borderLeftWidth: 10,
        borderLeftColor:'#304FFE',
        padding:10,
        elevation:5,
        zIndex:8,
        marginBottom: 5,
        marginLeft:2,
        marginRight:2,
    },
    noteText:{
        paddingLeft: 5,
    },  
    noteDelete:{
        position:'absolute',
        justifyContent:'center',
        alignItems: 'center',
        color:'black',
        backgroundColor:'#B71C1C',
        padding:15,
        bottom:0,
        top:0,
        right:0,
    },
    deleteText: {
        color:'white'
    }


});
