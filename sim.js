import React,{Component} from 'react';
import {StyleSheet,View,Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state={username:'',password:'',macaddress:''};

  }
  InsertRecord=()=>
  {
    var username=this.state.username;
    var password=this.state.password;
    var macaddress=this.state.macaddress;
    if(username.length==0 || password.length==0 || macaddress.length==0)
    {
      alert("Fill all the fields");
    }
    else
    {
      alert("no");
    }
  }
  render()
  {
    return(
      <View style={styles.ViewStyle}>
        <TextInput style={styles.TextStyle}
        placeholder={"Staff id"}
        placeholderTextColor={"red"}
        onChangeText={username=>this.setState({username})}
        />
        <TextInput style={styles.TextStyle}
        placeholder={"Password"}
        placeholderTextColor={"red"}
        onChangeText={password=>this.setState({password})}
        />
        <TextInput style={styles.TextStyle}
        placeholder={"Mac"}
        placeholderTextColor={"red"}
        onChangeText={macaddress=>this.setState({macaddress})}
        />
        <Button
        title={"Submit"}
        color={"blue"}
        onpress={this.InsertRecord}
        />
      </View>
    );
  }
}
const simpleDialog = () =>
  Alert.alert("Welcome", "Welcome to toyAlert!", [{ text: "OK" }], {
    cancelable: true,
  });
 const styles = StyleSheet.create({
  ViewStyle:
  {
    flex:1,
    padding:20,
    marginTop:20
  },
  TextStyle:
  {
    borderBottomWidth:2,
    borderBottomColor:'yellow',
    marginBottom:20
  }
 });