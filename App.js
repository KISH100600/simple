
import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,
Image,Button, 
ImageBackground} from 'react-native';


const App = () => {

const [result, setresult] = useState("");

const append = (text) => {
  setresult( result+text);
}


  return (
    <View style={styles.container}>

        <View style={styles.v1}>
        
            <View style={styles.v7}><Text style={{fontSize:30,backgroundColor:'white',height:50,borderRadius:20,textAlign:'center',width:'100%',  textShadowColor: 'rgba(100,600, 10, 4)',
         textShadowOffset: {width: 2, height:4},
         textShadowRadius: 5}}>WELCOME TO THE APP</Text></View>
            
        </View>
        <View style={styles.v3}>
            
                  <View style={styles.v5}><Text style={{color:'white',fontSize:20}}>NAME</Text></View>
                  <View style={styles.v5}><Text style={{color:'white',fontSize:20}}>ADDRESS</Text></View>
                  <View style={styles.v5}><Text style={{color:'white',fontSize:20}}>CONTACT</Text></View>


        </View>
        
        <View style={styles.v2}>

        <TouchableOpacity onPress={() => append('1')} >
            <ImageBackground source={require('./assets/dr1.jpg')} 
                   style={{resizeMode:'cover',margin:20, width: '95%', height:'96%'}} />
        </TouchableOpacity>
        
        </View>
       
  
    </View>
    
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    backgroundColor: 'black'
  },
  v1:{
    flex:2,
    backgroundColor:'orange',
    margin: 2,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
   
    
  },
  ht:{
    
    backgroundColor:'white',
    margin: 2,
    fontSize:25,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    height:40,
    width:'100%',
    fontWeight:'bold'
  },
  v2:{
    flex:6,
    backgroundColor:'orange',
    margin: 10,
    alignItems:'flex-start',
    justifyContent:'center',
    
   
  } ,
  v3:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'white',
    borderRadius:20,
    margin: 2,
    
  },

  v5:{
    flex:1,
    backgroundColor:'grey',
    marginTop: 10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:55,
    height:50,
    
  } ,
  v7:{
    flex:1,
    
    marginTop: 5,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    height:30,
    
  } ,
  v6:{
    flex:1,
    backgroundColor:'green',
    margin: 2,
    alignItems:'center',
    justifyContent:'center',
    fontSize:20,
   
  } ,

  v4:{
    flex:1,
    backgroundColor:'lightgray',
    margin: 2,
    alignItems:'center',
    justifyContent:'center'
   
   
  } ,

 heading_text:{
   fontSize:20,
   fontWeight:'bold'
 }



});

export default App;

