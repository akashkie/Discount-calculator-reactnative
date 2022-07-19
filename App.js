import { StyleSheet, Text, View ,SafeAreaView, TextInput, TouchableOpacity} from 'react-native'
import React, { useState}   from 'react' 

const App = () => {
  const [amount,setAmount]=useState("");
  const[ discount,setDiscount]=useState("");
  const[result,setResult]=useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems:'center',marginTop:40,}}>
      <Text style={{fontSize:25,}}>Discount Calculator</Text>
      </View>
      <View style={{marginHorizontal:40,marginBottom:20,marginTop:40,}}>
      <Text style={{marginBottom:10,}}>Amount</Text>
      <TextInput
      style={{
        backgroundColor:'white',
        paddingVertical:20,
        borderRadius:10,
        borderColor:'black',
        borderWidth:1,
        fontSize:20,
        textAlign:'center'
      }}
      onChangeText={(text)=>setAmount(text)}
      />     
      </View>
      <View style={{marginHorizontal:40,}}>
      <Text style={{marginBottom:10,}}>Discount %</Text>
      <TextInput
      style={{
        backgroundColor:'white',
        paddingVertical:20,
        borderRadius:10,
        borderColor:'black',
        borderWidth:1,
        fontSize:20,
        textAlign:'center'
      }}
      onChangeText={(text)=>setDiscount(text)}
      />     
      </View>
      <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btn}
          onPress={()=>{setResult(amount*discount/100)}}>
        <Text style={{color:'white'}}>Calculate</Text>
      </TouchableOpacity>
      </View>
     <Text style={styles.result}> Amount After Discount is :</Text>
     <Text style={styles.result}>{ amount-result}</Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor:'lightblue',
  },
  result:{
    color:'green',
    fontSize:25,
    textAlign:'center',
    marginTop:20,
  },
  btn:{
    backgroundColor:'blue',
    height:60,
    width:100,
     justifyContent:'center',
     alignItems:'center',
     marginTop:60,
     borderRadius:10,
  },
  btnContainer:{
    
    alignItems:'center',
  }
  

})