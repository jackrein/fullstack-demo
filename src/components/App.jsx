import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import exampleData from '../example-data/exampleData';

import '../styles/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'None',
      bugs: exampleData,
    };
    this.filterHandler = this.filterHandler.bind(this);
  }

  filterHandler(filter) {
    this.setState({ filter }, () => this.updateBugList());
  }

  updateBugList() {
    let filtered = exampleData.filter(bug => {
      return bug.threatLevel === this.state.filter;
    });
    this.setState({ bugs: filtered });
  }
  
  render() {
    return (
      <table>
        <Nav
          filterHandler={this.filterHandler}
        />
        {this.state.bugs.map((bug) => (
          <BugTile
            bugName={bug.bugName}
            bugDescription={bug.bugDescription}
            reportedBy={bug.reportedBy}
            createdDate={bug.createdDate}
            assignedTo={bug.assignedTo}
            threatLevel={bug.threatLevel}
            key={bug.bugName}
          />
        ))}
        <tbody id="newBug">
          <tr className="bugTile">
            <td>{this.state.bugs.length + 1}</td>
            <td><input type="text" placeholder="Describe the problem"></input></td>
            <td><input type="text" placeholder="Your name"></input></td>
            <td><input type="date"></input></td>
            <td>
              <select>
                <option value="None"></option>
                <option value="Bailey">Bailey</option>
                <option value="Daniel">Daniel</option>
                <option value="Surj">Surj</option>
                <option value="Teddi">Teddi</option>
              </select>
            </td>
            <td>
              <select>
                <option value="None"></option>
                <option value="Low-Priority">Low-Priority</option>
                <option value="Important">Important</option>
                <option value="Critical">Critical</option>
              </select>
              <button className="btn">  Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default App;
