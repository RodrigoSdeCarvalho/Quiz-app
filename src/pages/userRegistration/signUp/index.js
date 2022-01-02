import React, {useState} from 'react';
import { Text, View, Pressable, TextInput, Keyboard } from 'react-native';
import styles from './style';
import {FontAwesome} from "@expo/vector-icons";
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function signUp({navigation}) {

  const [show, setShow] = useState(false)
  const [eyeImage, setEyeImage] = useState("eye")
  const [userEmail, setUserEmail] = useState('Rodrigo')
  const [userName, setUserName] = useState('rodrigosc2401@gmail.com')

  const toggleEyeImage = () => {
    setShow(!show)
    if (eyeImage == 'eye') {
      setEyeImage('eye-slash')
    } else if (eyeImage == 'eye-slash') {
      setEyeImage('eye')
    };
  };

  return (
      <><Pressable onPress={Keyboard.dismiss}><View style={{width: 48}}>
          <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}>
          <FontAwesome name='chevron-left' size={20}/>
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Cadastre-se</Text>
          <Text>Crie uma conta gratuitamente</Text>  
          <TextInput onChangeText={(value) => setUserName(value)}
            style={styles.input}
            placeholder="Nome"
            keyboardType="default" />
          <TextInput onChangeText={(value) => setUserEmail(value)}
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"/>
          <View style={{flexDirection: "row"}}>
            <View style={{alignSelf: "center", left: 0}}>
              <TextInput secureTextEntry={show}
                style={styles.input}
                placeholder="Senha"
                keyboardType="password">
              </TextInput>
            </View>
            <View style={{position:'absolute', left: 320, top:20}}>
              <TouchableOpacity onPress={() => toggleEyeImage()}>
                <FontAwesome name={eyeImage} size={20}/>
              </TouchableOpacity>
            </View>
          </View>
            <TouchableOpacity style={styles.purpleButton}
              onPress={() => navigation.navigate('Home')}>
              <Text style={{ color: '#fff', fontSize: 16 }}>Cadastrar-se</Text>
            </TouchableOpacity>
                <TouchableOpacity style={{ position: 'relative', top: 26, justifyContent: 'center', paddingBottom: 16, alignSelf: 'center' }}>
                    <Text style={styles.entrarButton} onPress={() => navigation.goBack()}>Entrar</Text>
                </TouchableOpacity>
          </View></Pressable></>
  );
}
