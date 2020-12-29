import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from "./components/search-box/search-box.component";
class App extends Component {
  constructor(){
    super();
    this.state = {
      users : [],
      search : ""
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({users : users}))
  }
  render() {
    const { users, search } = this.state;
    const filteredUser = users.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase())
      );
    return (
      <div className="App">
        <h1> Monsters Rolox </h1>
        <SearchBox placeholder="search users" 
        handleChange={e => {
          this.setState({search: e.target.value})
        }}/>
        <CardList users={filteredUser}>
        
        </CardList>
    </div>
    );
  }
}

export default App;
