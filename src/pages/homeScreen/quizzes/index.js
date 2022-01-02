import React, {Fragment} from "react"
import {Text, View, TextInput, ScrollView, FlatList} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from "./style";
import QuizItems from "./quizItems";

const quizItem = [
  {
    key: 'slide1',
    title: 'HTML e CSS ',
    description: 'Usando estilos inline no HTML',
    image: require('../../../img/quiz_2.png'),
    tag: 'FÁCIL',
  },
  {
    key: 'slide2',
    title: 'UI',
    description: 'Questões sobre interface',
    image: require('../../../img/quiz_3.png'),
    tag: 'FÁCIL',
  },
  {
    key: 'slide3',
    title: 'Swift',
    description: 'Advanced iOS apps',
    image: require('../../../img/quiz_4.png'),
    tag: 'FÁCIL',
  },
  {
    key: 'slide4',
    title: 'HTML básico ',
    description: 'Testes seus conhecimentos em tags básicas...',
    image: require('../../../img/quiz_1.png'),
    tag: 'FÁCIL',
  },
  {
    key: 'slide5',
    title: 'Scrum',
    description: 'Advanced project organization course',
    image: require('../../../img/quiz_5.png'),
    tag: 'MÉDIO',
  },
];

export default function quizzes({navigation}) {
  return (
      <View style={styles.home}>
          <Text style={styles.hello}>Hello,</Text>
          <Text style={styles.name}>Rodrigo</Text>
          <TextInput style={styles.pesquisa} keyboardType='default' placeholder='Pesquisar quiz'>
          </TextInput>
          <FontAwesome style={styles.icon} name='search' size={20}></FontAwesome>
      <Fragment>
        <View style={styles.filters}>
          <TouchableOpacity
            style={styles.buttonQuery}
            onPress={()=>{}}>
            <Text style={styles.textButtonQuery}>#HTML</Text>    
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonQuery}
            onPress={()=>{}}>
            <Text style={styles.textButtonQuery}>#UX</Text>    
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonQuery}
            onPress={()=>{}}>
            <Text style={styles.textButtonQuery}>#Swift</Text>    
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonQuery}
            onPress={()=>{}}>
            <Text style={styles.textButtonQuery}>#UI</Text>    
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.listaQuiz}>
          <FlatList
            data={quizItem}
            renderItem={({item})=>{
              return <TouchableOpacity onPress={() => navigation.navigate('quizDetail',
              {
                image: item.image,
                title: item.title,
                tag: item.tag
              }
              )}><QuizItems image={item.image} title={item.title} description={item.description} tag={item.tag}/></TouchableOpacity>
              }}
            />
        </ScrollView>
      </Fragment>
      </View>
    );
}
