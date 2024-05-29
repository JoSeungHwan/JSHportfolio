import { Component } from '../core/jo';
import aboutStore from '../store/about';

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer',
    });
  }
  render() {
    const { github, repository } = aboutStore.state;
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/JoSeungHwan/JSHportfolio">
          GitHub Repository.
        </a>
      </div>
      <div>
        <a href="https://github.com/JoSeungHwan">
          ${new Date().getFullYear()}
          JoSeungHwan GitHub
        </a>
      </div>
    `;
  }
}
