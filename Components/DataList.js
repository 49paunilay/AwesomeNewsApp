import React, { useEffect, useState } from 'react';
import {View, StyleSheet,Text, FlatList} from 'react-native';
import shortid from 'shortid';
import DataItem from './DataItem';

const DataList = () => {
    const [extractedData,setExdata]  =useState([])
    const getData=()=>{
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=25a911c33c9747ad965eae6348f799f8').then((res)=>res.json()).then((data)=>setExdata(data.articles))
    }
    useEffect(getData,[])
    return (
        <>
        {
            extractedData.length==0?(<Text>Loading </Text>):(
                <FlatList
                data={extractedData}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=><DataItem details = {item}/>}
                />
            )
        }
        </>
    );
}

const styles = StyleSheet.create({})

export default DataList;
