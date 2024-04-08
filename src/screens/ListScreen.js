import React from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native'

const ListScreen = () => {

    const family = [
        {name: 'Ethan', age: 5},
        {name: 'nikhil', age: 35},
        {name: 'Jovita', age: 34},
        {name:'test 1', age : 1},
        {name:'test 2', age : 1},
        {name:'test 3', age : 1},
        {name:'test 4', age : 1},
        {name:'test 5', age : 1},
        {name:'test 6', age : 1},
        {name:'test 7', age : 1},
        {name:'test 8', age : 1},
        {name:'test 9', age : 1},
        {name:'test 10', age : 1},
        {name:'test 11', age : 1},
        {name:'test 12', age : 1},
        {name:'test 13', age : 1},
        {name:'test 14', age : 1},
        {name:'test 15', age : 1},
        {name:'test 16', age : 1},
    ]
    return (
        <View>
            <Text style={styles.heading}>My Family</Text>
        <FlatList
        keyExtractor = {family.name}
        data = {family}
        renderItem = {({item}) =>{
        return <Text style={styles.listItemText}>{item.name} - age is {item.age}</Text>
        }}
        />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        listItemText: {
            marginVertical :10,
            color: 'green',
            padding: 10
        },
        heading:{
            color: 'white',
            fontSize: 24,
            backgroundColor: 'blue',
            padding: 20
        }
    }
)

export default ListScreen