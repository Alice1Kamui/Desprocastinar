import React, { useState } from "react";
import AddInput from "./Components/AddInput";
import { View, StatusBar, FlatList } from "react-native";
import styled from 'styled-components/native'
import TodoList from "./components/TodoList";
import Header from "./components/Header";

export default function App() {
const [data, setData] = useState([]);

const submitHandler = (value) => {
 setData((prevTodo) => {
   return [
     {
       value: value,
       key: Math.random().toString(),
     },
     ...prevTodo,
   ];
 });
 }

 const deleteItem = (key)=>{
    setData((prevTodo)=>{
      return prevTodo.filter((todo)=>todo.key != key);
    })
 }

return (
     <ComponentContainer>
       <View>
         <StatusBar barStyle="light-content"
            backgroundColor="midnightblue" />
       </View>
      <View>
        <FlatList 
          data={data}
          ListHeaderComponent={()=> <Header />}
          keyExtractor={(item)=> item.key}
          renderItem={({item})=>(
            <TodoList item={item} deleteItem={deleteItem}/>
          )}
        />
      </View>
       <View>
         <AddInput submitHandler={submitHandler} />
       </View>
     </ComponentContainer>
   );
}


const ComponentContainer = styled.View`
 background-color: midnightblue;
 height: 100%;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;
