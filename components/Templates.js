import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, ShadowPropTypesIOS, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Task from './Task'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import {
  Card,
  CardItem,
  Textarea
} from "native-base";
const Templates = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  handleAddTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now() }])
      console.log("value",todos)
      setValue('')
    }
  }
  handleDeleteTodo = (id) => {  
    setTodos(
      todos.filter((todo) => {
        if (todo.key !== id) return true
      })
    )
  }

  return (
      <View style={styles.container}>
            <Card style={styles.card}>
                <CardItem style={styles.cardItem}>       
                  <Textarea
                    style={styles.textInput}
                    rowSpan={5}
                    placeholder="Description"
                    placeholderTextColor="#9B9B9B"
                    value={value}
                    onChangeText={(value) => setValue(value)}
                  />
                   <TouchableOpacity onPress={() => handleAddTodo()}>
                      <Icon name="plus" size={25} color="black" style={{ marginLeft: 15 }} />
                   </TouchableOpacity>
                </CardItem>
          </Card>


        <ScrollView>
          {
            todos.map((task) => (
              <Task
                text={task.text}
                key={task.key}
                delete={() => handleDeleteTodo(task.key)}
              />
            ))

          }
        </ScrollView>
      </View>
  )
}
export default Templates
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#f6f8fb'
  },
  card: {
      width: wp(90.66),
      borderRadius: 50,
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "transparent",
      elevation: 0
  },
  cardItem:{
    // width: wp(90.66),
    // height: hp(8.77),
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
    textInput:{
        marginLeft: 1,
        marginTop: "1%",
        marginBottom: "3%",
        borderRadius: 4,
        width: wp(75),
        height: hp(10),
        fontSize: 13,
        color: "#9B9B9B",
        paddingHorizontal: 0,
        backgroundColor: "#F4F5F7",
        alignSelf: "center"
    }

});