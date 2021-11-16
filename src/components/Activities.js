// + add the useEffect import
import React from 'react';
import { useState, useEffect } from 'react';
import { Component } from 'react';
import './Activities.css'
  
class App extends Component {
    
    state = {
      //todos stores ALL data from the API fetch
      todos: [],
      activities_list: [],
      //activities list is a cleaned LIST that is created by accessing values inside todos.json dictionary
      parks: [],
      parkslink: [],
      //Stores the parks associated with a search result from handlechange
    }
    
    componentDidMount() {
      
      fetch("https://developer.nps.gov/api/v1/activities/parks?id=activities&api_key=8NnStekoxJFhJSQlXFrZ4RmXW7ebm6OvQA4upeaF")
      .then(res => res.json())
      .then((data) => {
        var activities_temp = []
        var parks_temp = []
        var parkslink_temp = {}
        this.setState({ todos: data})
        var len = this.state.todos['data'].length
        var handleChanges = handleChange //trying very hard to get the input data into this component. Still cannot pull data
        console.log({handleChanges})
        for(let i = 0; i < len; i++)
        { 
          if('Biking' == this.state.todos["data"][i]["name"])//input tag does not push data into componentdidmount(), i set the search equal to 'biking' for example purposes
          {
            for(let j = 0; j < this.state.todos["data"][i]["parks"].length; j++)
            {
              parks_temp[j] = this.state.todos["data"][i]["parks"][j]["fullName"] + ", "
              parkslink_temp[j] = this.state.todos["data"][i]["parks"][j]["url"]
            }
          }
        }

        for(let i = 0; i < len; i++)
        {
          activities_temp[i] = this.state.todos["data"][i]["name"] + ", "
        }
        
        this.setState({activities_list: activities_temp})
        this.setState({parks: parks_temp})
        this.setState({parkslink: parkslink_temp})

        console.log(this.state.activities_list)
        console.log(this.state.todos)
        console.log(this.state.parks)
        console.log(this.state.parkslink)

      })
      .catch(console.log)
    }
    
  
  render(){ 
    return (
    
        <div className = 'searchbar'>
          <label>Search from this list of activities HERE</label>
          <input name = "searchresult" onChange={handleChange}></input>
          <p>{(this.state.activities_list)}</p>
            <div className = 'resultsheader'>
              <h>RESULTS for 'Biking'</h>
            </div>
          <a href = {(this.state.parkslink[0])}>{(this.state.parks)}</a>
        </div>  
  );
}
}
function handleChange(event)
//need to define outside class App, this function is called when onChange event is activated.
    {
      console.log(event.target.value)
      let inputz = event.target.value
      return inputz
//Could not figure out how to pass the value from the search input into my component mount function :(
    }
export default App