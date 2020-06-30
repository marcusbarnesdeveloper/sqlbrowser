import React from 'react';
import Request from './utils/Request';
import LoginComponent from './components/LoginComponent';
import ExecuteQueryComponent from './components/ExecuteQueryComponent';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      queryName: '',
      queries: [],
      showError: false,
      fetching: false,
      isLoggedIn: false,
      username:'',
      password: '',
      id:'',
      pastQueries: [],
      loginError: false
    }
    this.setQuery = this.setQuery.bind(this);
    this.executeQuery = this.executeQuery.bind(this);
    this.signUserUp = this.signUserUp.bind(this);
    this.logUserIn = this.logUserIn.bind(this);
    this.getUserQuery = this.getUserQuery.bind(this);
  }

  setQuery(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  async executeQuery(){
    this.setState({fetching: true,showError: false,queries:[]});
    try {
      const res = await Request.post('query',{query:this.state.query});
      const saveQuery = await Request.post('savequery',{id:this.state.id,queryName: this.state.queryName});
      const getquery = await this.getUserQuery(this.state.id);
      this.setState({query: '',queries:res.data,fetching: false,pastQueries:getquery.data,queryName:''});
    } catch (error) {
      this.setState({query: '',fetching: false,showError: true,queryName:''});
    }
  }
  async signUserUp() {
    try {
      const res = await Request.post('signup',{username: this.state.username, password: this.state.username});
      this.setState({username: '',password: ''});
    } catch (error) {
      this.setState({isLoggedIn: false, loginError: true});
    }
  }
  async getUserQuery(id){
    return Request.get('getquery',id);
  }
  async logUserIn() {
    try {
      const res = await Request.post('login',{username: this.state.username, password: this.state.password});
      const getquery = await this.getUserQuery(res.data);
      this.setState({isLoggedIn: true, id: res.data,pastQueries:getquery.data,loginError: true});
    } catch (error) {
      this.setState({isLoggedIn: false, loginError: true});
    }
  }
  render(){
    const mainPage = <ExecuteQueryComponent queryName={this.state.queryName}setQuery={this.setQuery} query={this.state.query} executeQuery={this.executeQuery} queries={this.state.queries} pastQueries={this.state.pastQueries} queryName={this.state.queryName} loginError={this.state.loginError}/>
    const loginPage = <LoginComponent loginError={this.state.loginError}login={this.logUserIn}signup={this.signUserUp}username={this.state.username} password={this.state.password} change={this.setQuery}/>;
    const page = this.state.isLoggedIn ? mainPage : loginPage;
    return (
      <div className='main-container'>
        {page}
      </div>
    )
  }
}

export default App;