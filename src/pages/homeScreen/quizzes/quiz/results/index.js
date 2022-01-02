import React from "react"
import {Text, View} from 'react-native';
import styles from "./style";
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesome} from "@expo/vector-icons";

export default function Resultado({navigation, route}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}>
          <FontAwesome name='chevron-left' size={20}/>
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Resultados</Text>
      </View>
      <Text style={styles.contentTitle}>{route.params.guess?'1':'0'}/1</Text>
      <Text style={styles.title}>{route.params.guess?'Você é um mestre!':'Quase lá...'}</Text>
      <Text style={styles.description}>{route.params.guess?'Você concluiu o quiz com sucesso e guessu todas \nas perguntas. Você é realmente muito bom!'
        :'Continue estudando e tentando, uma hora você vai \ngabaritar! Eu acredito em você!'}</Text>
      <TouchableOpacity style={styles.buttonCircle}
        onPress={() => navigation.navigate('quizDetail',
          {
            image: route.params.image,
            tag: route.params.tag,
            title: route.params.title 
          })}>
        <Text style={{color:'#fff', fontSize:16}}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
} 
