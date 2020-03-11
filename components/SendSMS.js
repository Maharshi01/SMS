
import React, { useState } from 'react';
import SmsAndroid from 'react-native-get-sms-android';
// var SmsAndroid = require('react-native-android-sms');

import { View,Button,Alert,PermissionsAndroid,StyleSheet } from 'react-native';
 

const SendSMS = ({navigation})=>{

    const [phoneNumbers,setPhone]=useState(["+919567257670", "+918593822424","+918129126304"]);
    const [templates,setMsg]=useState(["One","Two","Fission"])

      function proceed() {
        Alert.alert('You can use the Camera');
      }



      function send(){
          async function requestCameraPermission() {
              //Calling the permission function
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.SEND_SMS,
                {
                  title: 'AndoridPermissionExample App Camera Permission',
                  message: 'AndoridPermissionExample App needs access to your camera ',
                }
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //  console.log("PhoneNumbers",JSON.stringify(phoneNumbers))
                //  console.log("templates",JSON.stringify(templates))

                        for(let i=0;i<phoneNumbers.length;i++){

                      var item = templates[Math.floor(Math.random() * phoneNumbers.length)]

                      console.log("i & Item",phoneNumbers[i],item)

                        SmsAndroid.autoSend(
                          JSON.stringify(phoneNumbers[i]),
                          item,
                        (fail) => {
                          console.log('Failed with this error: ' + fail);
                        },
                        (success) => {             
                          console.log('SMS sent successfully to');
                        },
                      );

                }

              
              } else {
                Alert.alert('CAMERA Permission Denied.');
              }
            } 

            if (Platform.OS === 'android') {
              requestCameraPermission();
            } else {
              proceed();
            }


      }

    return (
    <View style={styles.container}>
               
         <Button
          title="Import Contacts"
          onPress={() => Alert.alert('Pressed Contacts')}
        />
         <Button
          title="Select Campaign"
          onPress={() =>navigation.navigate('Campaigns')
        }
        />
        <Button
          title="Send SMS"
          onPress={() => send()}
        /> 
    </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"column",
      justifyContent:'space-evenly',
      alignItems:"center"
    },
 
  });

export default SendSMS;
   