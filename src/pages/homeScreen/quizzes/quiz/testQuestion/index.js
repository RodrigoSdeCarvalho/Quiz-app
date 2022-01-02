import React, {useState} from "react"
import {Text, View, Image} from 'react-native';
import styles from "./style";
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesome} from "@expo/vector-icons";

export default function testQuestion({navigation, route}) {

  const [border1, setBorder1] = useState('#BEBAB3')
  const [border2, setBorder2] = useState('#BEBAB3')
  const [border3, setBorder3] = useState('#BEBAB3')
  const [click, setClick] = useState(false)
  const [guess, setguess] = useState(null)

  function checkAnswer (chosenAnswer) {
    if (!click){
        setClick(true);
    };
    if (chosenAnswer == 1) {
        setBorder1('#EF4949')
        setBorder2('#BEBAB3')
        setBorder3('#BEBAB3')
        setguess(false)
    } else if (chosenAnswer == 2) {
        setBorder1('#BEBAB3')
        setBorder2('#EF4949')
        setBorder3('#BEBAB3')
        setguess(false)
    } else if (chosenAnswer == 3) {
        setBorder1('#BEBAB3')
        setBorder2('#BEBAB3')
        setBorder3('#228b22')
        setguess(true)
    };
  }

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.goBackButton}>
            <FontAwesome name='chevron-left' size={20}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.pageNumber}>1 de 1</Text>
        <Text style={styles.title}>Qual tag é usada {"\n"}para fazer títulos grandes</Text>
        <View style={styles.card}>
          <Image style={styles.image} source={route.params.image}/>
        </View>
        <TouchableOpacity style={{
          width: 343,
          height: 58,
          marginTop: 16,
          marginLeft: 16,
          borderWidth: 1,
          borderRadius: 16,
          borderColor: border1,
          backgroundColor: '#fffff'}}
          onPress={() => {checkAnswer(1)}}>
        <Text style={styles.option}>{"A.  <h5>"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: 343,
          height: 58,
          marginTop: 16,
          marginLeft: 16,
          borderWidth: 1,
          borderRadius: 16,
          borderColor: border2,
          backgroundColor: '#fffff'}}
          onPress={() => {checkAnswer(2)}}>
        <Text style={styles.option}>{"B.  <p>"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: 343,
          height: 58,
          marginTop: 16,
          marginLeft: 16,
          borderWidth: 1,
          borderRadius: 16,
          borderColor: border3,
          backgroundColor: '#fffff'}}
          onPress={() => {checkAnswer(3)}}>
          <Text style={styles.option}>{"C.  <h1>"}</Text>
        </TouchableOpacity>

        {click? <TouchableOpacity style={styles.buttonCircle}
          onPress={() => navigation.navigate('results',
            {
              guess: guess,
              image: route.params.image,
              tag: route.params.tag,
              title: route.params.title
            })}>
            <Text style={{color:'#fff', fontSize:16}}>Continuar</Text>
            </TouchableOpacity>: <View/>}
      </View>
  );
}
