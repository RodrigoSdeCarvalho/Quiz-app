import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome} from "@expo/vector-icons";
import signUp from './src/pages/userRegistration/signUp/index';
import Intro from './src/intro';
import login from '../quiz-app/src/pages/userRegistration/login/index';
import forgotPassWord from '../quiz-app/src/pages/userRegistration/forgotPassword/index';
import quizzes from '../quiz-app/src/pages/homeScreen/quizzes/index';
import QuizDetail from '../quiz-app/src/pages/homeScreen/quizzes/quiz/quizDetaill/index'
import testQuestion from './src/pages/homeScreen/quizzes/quiz/testQuestion';
import settings from '../quiz-app/src/pages/homeScreen/settings/index';
import profile from '../quiz-app/src/pages/homeScreen/profile/index';
import results from '../quiz-app/src/pages/homeScreen/quizzes/quiz/results/index';

const stack = createStackNavigator();
const tab = createBottomTabNavigator();

function tabs(){
  return(
    <tab.Navigator
    screenOptions = {{
      tabBarStyle: styles.tab,
      headerShown: false,
      tabBarActiveTintColor: '#82327E',
      inactiveTintColor: '#BEBAB3',
    }}>
      <tab.Screen name = "Quizzes" component = {quizzes}
       options = {{
         tabBarIcon: ({ color, size }) => (
          <FontAwesome name='book' size={20} color={color}/>
        ),
      }}/>
      <tab.Screen name = "Profile" component = {profile}
       options = {{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name='user' size={20} color={color}/>
        )}}/>
      <tab.Screen name = "Settings" component = {settings}
       options={{     
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name='cog' size={20} color={color}/>
        )}}/>
      </tab.Navigator>
  );
};

export default function App() {
  const [showRealApp, setShowRealApp] = useState(false);
  const skip = () => {setShowRealApp(true)};

  return (
    <>
      {showRealApp ? (
      <NavigationContainer>
        <stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
          <stack.Screen name="login" component={login}/>
          <stack.Screen name="signUp" component={signUp}/>
          <stack.Screen name="forgotPassword" component={forgotPassWord}/>
          <stack.Screen name="Home" component={tabs}/>
          <stack.Screen name="quizDetail" component={QuizDetail}/>
          <stack.Screen name="testQuestion" component={testQuestion}/>
          <stack.Screen name="results" component={results}/>
        </stack.Navigator>
      </NavigationContainer>
      ):(<Intro skip={skip}/>)}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  tab:{
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width:390,
    alignSelf: 'center'
  }
});
