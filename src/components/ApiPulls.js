// + add the useEffect import
import React from 'react';
import { useState, useEffect } from 'react';
import { Component } from 'react';
import './ApiPulls.css';

class App extends Component {
    state = {
      todos: [],
      name_list: [],
    }
    componentDidMount() {
      fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=8NnStekoxJFhJSQlXFrZ4RmXW7ebm6OvQA4upeaF')
      .then(res => res.json())
      .then((data) => {
        var name_listlocal = []
        this.setState({ todos: data['data'][0]})
        
        for(let i = 0; i < this.state.todos["activities"].length; i++)
        {
          name_listlocal[i] = this.state.todos["activities"][i]["name"];
          
        }
        this.setState({name_list: name_listlocal})
        console.log(this.state.name_list.length)
       
      })
      .catch(console.log)
    }

    
  render(){ 
    return (
    
    <div>
        <div className = "NatParkData">
            <h1>{JSON.stringify(this.state.todos['fullName'])}</h1>
            <p>
            {JSON.stringify(this.state.todos["description"])}           
            </p>
            <p2>
              {this.state.name_list}
            </p2>
            
        </div>
        {console.log(this.state.name_list.length)}
        
    </div>   
      
  );
}
}
export default App