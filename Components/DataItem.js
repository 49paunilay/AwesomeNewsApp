import React from 'react';
import {View, Text,Image,StyleSheet,Linking, TouchableOpacity} from 'react-native';
import * as Speech from 'expo-speech'
const DataItem = (props) => {
    console.log(props.details);
    const seedetails=()=>{
        Linking.openURL(props.details.url)
    }
    const saycontent=()=>{
        Speech.speak(props.details?.description)
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={{padding:15,fontSize:17,fontWeight:21}}>Author : {props.details.author}</Text>
                <Text style={{padding:15,fontSize:17,fontWeight:21}}>Title : {props.details.title}</Text>
                <Text style={{padding:15,fontSize:17,fontWeight:21}}>Description : {props.details.description}</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <Image style={styles.image} source={{uri:props.details.urlToImage}} />
            </View>
            <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginHorizontal:15}}>
                <TouchableOpacity onPress={seedetails}>
                    <Text style={{borderRadius:10,borderColor:'white',borderWidth:2,marginBottom:5,padding:15,backgroundColor:'gray',alignSelf:'center'}}>View Details</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={saycontent}>
                    <Text style={{borderRadius:10,borderColor:'white',borderWidth:2,marginBottom:5,padding:15,backgroundColor:'gray',alignSelf:'center'}}>Speak Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default DataItem;
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:'1',
        justifyContent:'center',
        backgroundColor:'wheat',
        margin:10,
    },
    image:{
        height:200,
        width:200,
        resizeMode:'contain'
    }
})
