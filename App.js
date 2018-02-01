import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert,FlatList } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result:'',
      num1:'',
      num2:'',
      data:[],
      guess: null,
      answer: Math.floor(Math.random()*100)+1,
      check: 'Guess a number between 1-100',
      count: 0,
      shopItem: '',
      shopList:[]
    }
  }
  onAdd=()=>{
    var number1=Number(this.state.num1);
    var number2=Number(this.state.num2);
    var add=number1+number2;
    this.setState({
      result: add,
      data:[...this.state.data,
        {id:Math.random(),
        num1:this.state.num1,
        num2:this.state.num2,
        sign:'+',
        result:add}
      ]
    });
  }

  onMinus=()=>{
    var number1=Number(this.state.num1);
    var number2=Number(this.state.num2);
    var minus=number1-number2;
    this.setState({
      result: minus,
      data:[...this.state.data,
        {id:Math.random(),
        num1:this.state.num1,
        num2:this.state.num2,
        sign:'-',
        result:minus}
      ]
    });
  }

  onGuess = () => {
    if (this.state.guess == this.state.answer){
      alert(`Your guessed the number in ${this.state.count} guesses`)
    } else if(this.state.guess > this.state.answer){
      this.setState({
        check: `Your guess ${this.state.guess} is too high`,
        count:this.state.count+1
      });
    } else {
      this.setState({
        check: `Your guess ${this.state.guess} is too low`,
        count:this.state.count+1
      });
    }
  }

  addShop = () => {
    this.setState({
      shopList:[...this.state.shopList,
        {id:Math.random(),
        name:this.state.shopItem
      }]
    });
  }

  clearShop = () => {
    this.setState({
      shopList:[]
    });
  }

  render() {
  
    return (
      <View style={styles.container}>


        <Text style={styles.headerText}>Exercise 1 + 3: Calculator</Text>
        <Text style={styles.headerText}>Result :{this.state.result}</Text>

        <TextInput
        keyboardType='numeric'
        style={styles.TextInput}
        onChangeText={(number)=>this.setState({
          num1:number
        })}
        value={this.state.num1}
        />

        <TextInput
        keyboardType='numeric'
        style={styles.TextInput}
        onChangeText={(number)=>this.setState({
          num2:number
        })}
        value={this.state.num2}
        />
        <Button
        onPress={this.onAdd}
        title='+'></Button>
        <Button
        onPress={this.onMinus}
        title="-"></Button>

        <Text style={styles.headerText}>History</Text>
        <FlatList 
          style={styles.history}
          data={this.state.data}
          renderItem={({item},index)=>
        <Text key={index}>{item.num1} {item.sign} {item.num2} = {item.result}</Text>}
          keyExtractor={({id})=>id}
        />



        <Text style={styles.headerText}>Exercise 2: Number Guessing Game</Text>
        <Text style={styles.headerText}>
          {this.state.check}</Text>

        <TextInput 
          keyboardType='numeric'
          style={styles.TextInput}
          onChangeText={(guess=>{
            this.setState({guess})
          })}
          value={this.state.guess}
        />
        <Button
        onPress={this.onGuess}
        title='MAKE GUESS'></Button>



        <Text style={styles.headerText}>Exercise 4: Shopping List</Text>

        <TextInput 
          style={styles.TextInput}
          onChangeText={(shopItem)=>{
            this.setState({shopItem})
          }}
          value={this.state.shopItem}
        />
        <Button
        onPress={this.addShop}
        title='ADD'></Button>
        <Button
        onPress={this.clearShop}
        title='CLEAR'></Button>

        <Text style={styles.headerText}>Shopping List</Text>
        <FlatList 
          style={styles.history}
          data={this.state.shopList}
          renderItem={({item},index)=>
        <Text key={index}>{item.name}</Text>}
          keyExtractor={({id})=>id}
        />

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'beige',
    marginTop:20
  },
  TextInput: {
    width:300,
    height:30,
    borderColor:'black',
    borderWidth:2,
    marginBottom:4
  },
  headerText: {
    fontSize: 26
  },
  history:{
  },
  buttonModify: {
    fontSize:20
  }
});
