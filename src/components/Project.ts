import { Component } from '../core/jo';
import {
  // gsap,
  // ScrollTrigger,
  // Draggable,
  // MotionPathPlugin,
  // ScrollToPlugin,
  Power0,
  Power1,
  Power2,
  Power3,
  Power4,
  Linear,
  Quad,
  Cubic,
  Quart,
  Quint,
  Strong,
  Elastic,
  Back,
  SteppedEase,
  Bounce,
  Sine,
  Expo,
  Circ,
  TweenLite,
  TimelineLite,
  TimelineMax,
  TweenMax,
} from 'gsap';
import {
  gsap,
  ScrollTrigger,
  Draggable,
  MotionPathPlugin,
  ScrollToPlugin,
} from 'gsap/all';
import * as ScrollMagic from 'scrollmagic';
// import { ScrollMagicPluginIndicator } from 'scrollmagic-plugins';
// import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

export default class Project extends Component {
  render() {
    this.el.classList.add('project');
    this.el.innerHTML = /* html */ `
      <h1>Project</h1>
      <div class="projectbtn">
        <div class="projectbtn_in back-to-position to-top delay-0">
          <button class="all" id="modal">All</button>
          <button class="web">Web</button>
          <button class="app">App</button>
        </div>
      </div>
      <div class="project_project">
        <div class="wrapper back-to-position to-right delay-1">

          <div class="one">
            <h2>JSH_Portfolio</h2>
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/JSH.png?raw=true" alt="Movie_app">
            <h3>개인프로젝트(Web)</h3>
            <div class="detail">조승환 포트폴리오 홈페이지 입니다.</div>
            <div class="span">
              <span>개인</span><span>반응형</span><span>퍼블리싱</span>
            </div>
          </div>

          <div class="two">
            <h2>Movie_App</h2> 
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/project/Movie-app.png?raw=true" alt="Movie_app">
            <h3>개인프로젝트(Web)</h3>            
            <div class="detail">OMDb API를 이용해 만든 영화 검색 홈페이지 입니다.</div>
            <div class="span">
              <span>개인</span><span>반응형</span><span>퍼블리싱</span>
            </div>
          </div> 

          <div class="three">
            <h2>왕가 탕후루</h2>
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/nunastudy.png?raw=true" alt="Movie_app">
            <h3>팀프로젝트(Web)</h3> 
            <div class="detail">팀 프로젝트로 진행한 왕가탕후루 클론코딩입니다.</div>
            <div class="span">
              <span>팀</span><span>반응형</span><span>클론코딩</span>
            </div>
          </div>

          <div class="four">
            <h2>Apple</h2>
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/project/apple.png?raw=true" alt="Movie_app">
            <h3>개인프로젝트(Web)</h3>
            <div class="detail">Apple 홈페이지 클론코딩입니다.</div>
            <div class="span">
              <span>개인</span><span>반응형</span><span>클론코딩</span>
            </div>
          </div>

          <div class="five">
            <h2>Starbucks</h2>
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/project/starbucks.png?raw=true" alt="Movie_app">
            <h3>개인프로젝트(Web)</h3> 
            <div class="detail">스타벅스 홈페이지 클론코딩입니다.</div>
            <div class="span">
              <span>개인</span><span>Web</span><span>클론코딩</span>
            </div>
          </div>

          <div class="six">
            <h2>PowerGraphics</h2>
            <img class="movie_img" src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/PowerGrphics.png?raw=true" alt="Movie_app">
            <h3>회사프로젝트(App)</h3> 
            <div class="detail">(주)차트연구소에서 진행한 주식프로그램 APP입니다.</div>
            <div class="span">
              <span>팀</span><span>APP</span><span>상용 프로그램</span>
            </div>
          </div>

          <div class="seven">
            <h2>이모만세</h2>
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/emomain.png?raw=true" alt="Movie_app">
            <h3>회사프로젝트(App)</h3>
            <div class="detail">상공에서 진행한 이모만세 SNS APP 입니다.</div>
            <div class="span">
              <span>팀</span><span>APP</span><span>상용 프로그램</span>
            </div>
          </div>

          <div class="eight">
            <h2>하이브리드 앱</h2>
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/sanggong.png?raw=true" alt="Movie_app">
            <h3>회사프로젝트(App)</h3> 
            <div class="detail">상공에서 진행한 여러가지 하이브리드 APP 입니다.</div>
            <div class="span">
              <span>팀</span><span>APP</span><span>상용 프로그램</span> 
            </div>
          </div>

          <div class="nine">
            <h2>Moo</h2>
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/Moo.png?raw=true" alt="Movie_app">
            <h3>개인프로젝트(App)</h3>
            <div class="detail">메모장기능과 ToDoList기능을 합친 개인일정관리 APP 입니다.</div>
            <div class="span">
              <span>개인</span><span>APP</span><span>사이드</span>
            </div>
          </div>

          <div class="ten">
            <h2>COVID19 현황판</h2>
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/COVID19.png?raw=true" alt="Movie_app">
            <h3>개인프로젝트(App)</h3> 
            <div class="detail">Corona-19 API를 이용해 코로나감염 현황판 APP 입니다.</div>
            <div class="span">
              <span>개인</span><span>APP</span><span>사이드</span>
            </div>
          </div>
        </div>
      </div>
    `;

    window.onload = function () {
      const btnEl = document.getElementById('modal');
      btnEl?.classList.add('active-button');
    };
    const allbtnEl = this.el.querySelector('.all');
    const webbtnEl = this.el.querySelector('.web');
    const appbtnEl = this.el.querySelector('.app');
    webbtnEl.addEventListener('click', () => {
      allbtnEl?.classList.remove('active-button');
    });
    appbtnEl.addEventListener('click', () => {
      allbtnEl?.classList.remove('active-button');
    });

    const btnEls = this.el.querySelector('.projectbtn');
    const projectEls = this.el.querySelector('.project_project');

    var controller = new ScrollMagic.Controller();

    var setMultipleClasses = TweenMax.to('.projectbtn', 0.5, {
      className: 'show',
    });
    var scene = new ScrollMagic.Scene({
      // duration: 100,
      // offset: 200,
      triggerElement: btnEls,
      triggerHook: 0.8,
      // reverse: false,
    });
    scene.setClassToggle(btnEls, 'show');
    // scene.setTween(setMultipleClasses);
    scene.addTo(controller);

    var scene = new ScrollMagic.Scene({
      // duration: 100,
      // offset: 200,
      triggerElement: projectEls,
      triggerHook: 0.8,
      // reverse: false,
    });
    scene.setClassToggle(projectEls, 'show');
    // scene.setTween(setMultipleClasses);
    scene.addTo(controller);
  }
}
