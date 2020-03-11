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
} from "native-base";
const Campaign = ({navigation}) => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  handleAddTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }])
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
  function gotoTemplates() {
    navigation.navigate("Templates");
  }
  handleChecked = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === id) todo.checked = !todo.checked;
        return todo;
      })
    )
    console.log("Checked",todos)
  }

  return (
      <View style={styles.container}>
        <Card style={styles.card}>
        <CardItem style={styles.cardItem}  >       
          <TextInput
            style={{width:"90%", height: 40, borderColor: 'gray' }}
            multiline={true}
            onChangeText={(value) => setValue(value)}
            value={value}
            placeholder={'Enter Campaign'}
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
                checked={task.checked}
                setChecked={() => handleChecked(task.key)}
                myfunc={() => gotoTemplates()}
                delete={() => handleDeleteTodo(task.key)}
              />

              
            ))

          }
        </ScrollView>
      </View>
  )
}
export default Campaign
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
    width: wp(90.66),
    // height: hp(8.77),
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"

},

});