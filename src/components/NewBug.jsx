import React from 'react';

const NewBug = (props) => (
  <tbody id="newBug">
  <tr className="bugTile">
    <td>{props.bugs.length + 1}</td>
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
      <button className="btn" onClick={() => props.submitBug()}>Submit</button>
    </td>
  </tr>
  </tbody>
);

export default NewBug;