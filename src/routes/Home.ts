import { Component } from '../core/jo';
import Headline from '../components/Headline';
import Aboutme from '../components/Aboutme';

export default class Home extends Component {
  render() {
    const headline = new Headline().el;
    const aboutme = new Aboutme().el;

    this.el.classList.add('container');
    this.el.append(headline, aboutme);
  }
}
