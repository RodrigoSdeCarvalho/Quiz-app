import React, {useState} from 'react';
import {Text, View, Pressable, TextInput, Keyboard} from 'react-native';
import styles from "../login/style";
import {FontAwesome} from "@expo/vector-icons";
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function login({navigation}) {
    const [show, setShow] = useState(false)
    const [eyeImage, setEyeImage] = useState("eye")
    const [userEmail, setUserEmail] = useState('')

    const toggleEyeImage = () => {
      setShow(!show)
      if (eyeImage == 'eye') {
        setEyeImage('eye-slash')
      } else if (eyeImage == 'eye-slash') {
        setEyeImage('eye')
      };
    };

    return (
        <>
        <View style={styles.loginContainer}>
            <Pressable onPress={Keyboard.dismiss}>
              <Text style={styles.loginText}>Entrar</Text>
            </Pressable>
        </View>
        <View style={{top:258}}>
          <Pressable onPress={Keyboard.dismiss}>
            <TextInput onChangeText={(value) => setUserEmail(value)}
              style={{        
                width: 343,
                height: 53,
                borderRadius: 12,
                borderColor: '#BEBAB3',
                borderWidth: 1,
                height: 40,
                margin: 12,
                padding: 8,
                left: 22
              }}
              placeholder= "E-mail"
              keyboardType="email-address"
            />
            <View style={{flexDirection: "row"}}>
              <View style={{alignSelf: "center", left: 22}}>
                <TextInput secureTextEntry={show}
                  style={styles.input}
                  placeholder="Senha"
                  keyboardType="password">
                </TextInput>
              </View>
              <View style={{position:'absolute', left: 340, top:20}}>
                <TouchableOpacity onPress={() => toggleEyeImage()}>
                  <FontAwesome name={eyeImage} size={20}/>
                </TouchableOpacity>
              </View>
            </View>
              <TouchableOpacity style={{position:'relative', top: -8}} onPress={() => navigation.navigate('forgotPassword')}>
                  <Text style={styles.grayButton}>Esqueceu sua senha?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonCircle} onPress={() => navigation.navigate('Home')}>
                  <Text style={{color:'#fff', fontSize:16}}>Entrar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{top: 26, justifyContent: 'center', paddingBottom:16, alignSelf:'center'}}
                onPress={() => navigation.navigate('signUp')}>
                <Text style={styles.grayButton}>Crie uma conta</Text>
              </TouchableOpacity>
          </Pressable>
        </View>
        </>
    );
}
