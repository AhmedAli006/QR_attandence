import { View, Text } from 'react-native'
import React from 'react'
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import axios from 'axios';

const QrScanner = () => {

    const addUser = (data)=>{
      console.log(data)
  axios.post(`https://bbsultest.000webhostapp.com/QRuri.php?qr=${data}`)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    alert(error);
  });}
  return (
    <>
    <QRCodeScanner
        onRead={({data})=>{addUser(data)}}
        // flashMode={RNCamera.Constants.FlashMode.torch}
       cameraStyle={{width: 300,height: 300,}}
       cameraContainerStyle={{flex:1,justifyContent: 'center',alignItems: 'center',}}
      />
    </>
  )
}

export default QrScanner