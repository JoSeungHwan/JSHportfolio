import { Component } from '../core/jo';

export default class Project extends Component {
  render() {
    this.el.classList.add('project');
    this.el.innerHTML = /* html */ `
      <h1>Project</h1>
      <div>App</div>
      <div>Front-end</div>

    `;
  }
}
