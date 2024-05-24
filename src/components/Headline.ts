import { Component } from '../core/jo';

export default class Headline extends Component {
  render() {
    this.el.classList.add('headline');
    this.el.innerHTML = /* html */ `
      <h1>
        <span>Front-End</span><br />
        프론트엔드 개발자<br/>
        조승환 입니다.<br />
      </h1>
      <p>
        사용자에게 최고의 경험과 편의성을 제공할 수 있는<br/>
        개발자로 성장하겠습니다.
      </p>
      <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/myimg/jo.png?raw=true" alt="user">
    `;
  }
}
