import { Component } from '../core/jo';
import Headline from '../components/Headline';
import Aboutme from '../components/Aboutme';
import Project from '../components/Project';

export default class Home extends Component {
  render() {
    const headline = new Headline().el;
    const aboutme = new Aboutme().el;
    const project = new Project().el;

    this.el.classList.add('container');
    this.el.append(headline, aboutme, project);
  }
}
