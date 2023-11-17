import {View, Text, TouchableOpacity, Image} from 'react-native';
import React,{useState} from 'react';
import axios from 'axios';
import { SvgXml } from 'react-native-svg';
const Home = () => {
const options = {
  method: 'GET',
  url: 'https://qrcodeutils.p.rapidapi.com/qrcodefree',
  params: {
    text: 'B2161009',
    
    size: '250',
    type: 'svg',
    level: 'H'
  },
  headers: {
    'X-RapidAPI-Key': 'ca2e84728bmsh1ecb9f67b8e16eep1bd2fbjsn26fc5c3f75a4',
    'X-RapidAPI-Host': 'qrcodeutils.p.rapidapi.com'
  }
};

const [pic,setpic] = useState(' ')
  const getQr = async () => {
   try {
	const response = await axios.request(options);
setpic(response.data);
	
} catch (error) {
	console.error(error);
}

  };

  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: 'lightgreen',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={getQr}>
        <Text>Home</Text>
      </TouchableOpacity>
      {/* <Image source={require(`${pic}`)}/> */}
      <SvgXml xml={pic} />
    </View>
  );
};

export default Home;
