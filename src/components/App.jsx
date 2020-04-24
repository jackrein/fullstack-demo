import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import NewBug from './NewBug.jsx';
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
    this.submitBug = this.submitBug.bind(this);
  }

  filterHandler(filter) {
    this.setState({ filter }, () => this.updateBugList());
  }

  updateBugList() {
    let filtered = this.state.bugs.filter(bug => {
      return bug.threatLevel === this.state.filter;
    });
    if (this.state.filter === 'None') {
      this.setState({ bugs: exampleData });
    } else {
      this.setState({ bugs: filtered });
    };  
  }

  submitBug(newBug) {

    this.state.bugs.concat(newBug);
    console.log(this.state.bugs);
  }
  
  render() {
    return (
      <table>
        <Nav filterHandler={this.filterHandler} />
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
        <NewBug submitBug={this.submitBug} bugs={this.state.bugs} />
      </table>
    );
  }
}

export default App;
