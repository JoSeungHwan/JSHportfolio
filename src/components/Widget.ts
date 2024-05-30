import { Component } from '../core/jo';
import 'material-icons/iconfont/material-icons.css';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default class Widget extends Component {
  render() {
    this.el.classList.add('widget');
    this.el.innerHTML = /* html */ `  
      <div id="to-top">
        <div class="material-icons-outlined">arrow_upward</div>
      </div>
    `;

    const badgeEl = document.querySelector('headline .badges');
    const toTopEls = this.el.querySelector('#to-top');

    toTopEls.addEventListener('click', () => {
      // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
      // gsap.to(window, 0.7, {
      //   scrollTo: 0,
      // });
      window.scrollTo({
        top: 0,
        // left: 100,
        behavior: 'smooth',
      });
      console.log('Hello');
    });

    // const scroll = () => {
    //   if (window.scrollY !== 0) {
    //     setTimeout(() => {
    //       window.scrollTo(0, window.scrollY - 50);
    //       scroll();
    //     }, 0.9);
    //   }
    // };

    // toTopEls.addEventListener('click', scroll);
  }
}
