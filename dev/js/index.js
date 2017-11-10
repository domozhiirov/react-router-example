import React from 'react'
import {render} from 'react-dom'

import {Router, Route, Link, browserHistory, IndexRoute, IndexRedirect} from 'react-router'

// import io from 'socket.io-client';

// const socket = io('wss://wiki-meta-explorer.herokuapp.com');

// socket.on('connection', (socket) => {
//   let token = socket.handshake.query.token;
//
//   console.log(token);
// });

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        <li><Link to="/inbox/messages/111">Message 111</Link></li>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'))
