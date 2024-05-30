import { Component } from './core/jo';
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import Widget from './components/Widget';

export default class App extends Component {
  render() {
    const theHeader = new TheHeader().el;
    const theFooter = new TheFooter().el;
    const routerView = document.createElement('router-view');
    const widget = new Widget().el;

    this.el.append(theHeader, routerView, theFooter, widget);
  }
}
