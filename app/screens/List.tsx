import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import {FIRESTORE_DB } from '../../firebaseConfig';

const List = ({navigation}:any) => {
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState("");

  const addTodo = async()=>{
    const doc = await addDoc(collection(FIRESTORE_DB, 'todos'), {title:'I am a test', done:false});
    console.log(doc);


  }
  return (
    <View>
      {/* <Text>List</Text> */}
      <TextInput placeholder='add new todo' onChangeText={(text:string)=>setTodo(text)} value={todo}/>
      <Button onPress={addTodo} title="add todo"/>
    </View>
  )
}

export default List