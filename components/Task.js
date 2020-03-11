import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";
import {
    Card,
    CardItem,
  } from "native-base";
import Icon from 'react-native-vector-icons/Feather';
        const Task = (props) => (
                <Card style={styles.container}>
                    <CardItem style={styles.cardItem} >
                     <Icon
                        name={props.checked ? "check-square" : "square"}
                        size={24}
                        color="black"
                        style={{ marginLeft: 5,marginRight:15 }}
                        onPress={props.setChecked}
                    />       
                        <TouchableOpacity onPress={() => {props.myfunc()}}>
                            <Text style={styles.task}>{props.text}</Text>
                        </TouchableOpacity>
                        <Icon
                            name="trash-2"
                            size={22}
                            color="black"
                            style={{ marginLeft: 'auto' }}
                            onPress={props.delete}
                        />
                    </CardItem>
                </Card>
        )

export default Task

const styles = StyleSheet.create({
    container:{
        width: wp(90.66),
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "transparent",
        elevation: 0
    },
    cardItem:{
        width: wp(90.66),
        // height: hp(8.77),
        borderRadius: 4,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"

    },
    task: {
        width: wp(60),
        fontSize: 16,
        color: "#00B0EB",
        fontWeight: "500"
    },
})