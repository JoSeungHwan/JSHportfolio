import { Component } from '../core/jo';
import { gsap } from 'gsap';

export default class Headline extends Component {
  render() {
    this.el.classList.add('headline');
    this.el.innerHTML = /* html */ `
      <h1 class="fade-in">
        <span>"혼자 하는 것이 아닌 같이 하는 것"</span><br/>
        다양한 프로젝트 경험으로
        협업 경험이 많은<br/>
        조승환 입니다.<br />
      </h1>
      <p class="fade-in">
      지금까진 앱, 웹 개발에 집중해 왔지만<br/>
      앱 웹 기획자로 전향을 결심 하였습니다. <br/>
      <br/>
        사용자에게 최고의 경험과 편의성을 제공할 수 있는<br/>
        사람으로 성장하겠습니다.
      </p>
      <img class="fade-in" src="https://github.com/JoSeungHwan/notepad/blob/master/img/myimg/myjo.png?raw=true" alt="user">
      <!-- <img src="" href=".../img/jo.png" alt="user">  -->
    `;

    const fadeEls = this.el.querySelectorAll('.headline .fade-in');
    // 나타날 요소들을 하나씩 반복해서 처리!
    fadeEls.forEach(function (fadeEl, index) {
      //   // 각 요소들을 순서대로(delay) 보여지게 함!
      gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7,
        opacity: 1,
      });
    });

    // const tl = gsap.timeline({
    //   repeat: 1, // 반복횟수 총 2번
    //   repeatDelay: 3, // 반복할때마다의 딜레이 3초
    //   yoyo: true, // 재시작할때는 끝부터 시작
    //   defaults: { duration: 2 }, // timeline이 공통으로 가지는 속성
    //   paused: true,
    // });
    // tl.to('.fade-in', { y: 100 });
    // tl.to('.fade-in', { x: 100 }, '-=0.5');
    // tl.to('.fade-in', { rotate: 180, borderRadius: '50%' });
    // tl.to('.headline', { background: '#aaa' }, '<');
    // tl.to('.fade-in', { border: '2px solid white' });
    // tl.to('.fade-in', { scale: 1.5 });
    // tl.to('.fade-in', { background: 'tomato' }, 2);
  }
}
