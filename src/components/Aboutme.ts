import { Component } from '../core/jo';
import {
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

export default class Aboutme extends Component {
  render() {
    this.el.classList.add('aboutme');
    this.el.innerHTML = /* html */ `
      <div class="h11">
        <h1>Work</h1>
      </div>
      <div class="work">
        <div class="work1 back-to-position to-right delay-0"> 
          <div class="work11">
            <h3>(주)차트연구소(앱개발)</h3>
            <span>2023.03 ~ 2023.10</span> 
            <div class="power">
              <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/PowerGrphics.png?raw=true" alt="power"/>
            </div>
            <div>개발팀 IOS팀</div>
            <div>(주)차트연구소 에서 진행한 프로젝트</div>
            <br/>
            <div>PowerGraphics 모바일 증권차트 솔루션</div>
            <div>제가 이 프로젝트에 포지션은 IOS 전체적인 것을 담당했으며<br/>
                기존 PowerGraphics 프로그램에서 납품된 곳에 유지보수를 하면서<br/>
                버젼을 업그레이드 하여 PowerGraphics ver3 에선 디자인과<br/>
                성능 기능 모든 것을 업그레이드 하여 <br/>
                은행, 증권사 납품 준비를 했습니다
            </div>
            <div class="skills1">
              <img class="xcode" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/xocde.png?raw=true" alt="xcode">
              <img class="swift" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/swift.png?raw=true" alt="swift">
            </div>
          </div>
        </div>

        <div class="work2 back-to-position to-left delay-1">
          <div class="work22">
            <h3>상공(앱개발)</h3>
            <span>2022.10 ~ 2023.01</span> 
            <div class="sanggong">
              <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/emomain.png?raw=true" alt="sanggong1"/>
              <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/sanggong.png?raw=true" alt="sanggong2"/>
            </div>
            <div>개발팀 앱개발팀</div>
            <div>상공 에서 진행한 프로젝트</div>
            <br/>
            <div>이모만세, 하이브리드앱</div>
            <div>제가 이 프로젝트에 포지션은 앱개발 전체적인 것을 담당했으며<br/>
                이모만세에서 IOS프론트엔드와 데이터관리<br/>
                하이브리드앱에서 Andriod, IOS 앱개발 모든것을 담당하였으며<br/>
                고객사 피드밷을 받아 유지보수하며 앱을 출시했습니다
            </div>
            <div class="skills2">
              <img class="xcode" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/xocde.png?raw=true" alt="xcode">
              <img class="swift" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/swift.png?raw=true" alt="swift">
              <img class="android" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/androidstudio.png?raw=true" alt="android">
              <img class="kotlin" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/kotlin.png?raw=true" alt="kotlin">
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <h1 class="skill_tools">Skill & Tools</h1>
      </div>

      <div class="skill">
        <div class="skillLogo">
          <div class="front_skill back-to-position to-right delay-0">
            <div class="front">Front-end</div>
            <div class="frontend">
              <div class="frontend_group">
                <img class="html" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/html.png?raw=true" alt="html">
                <img class="css" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/css.png?raw=true" alt="css">
                <img class="js" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/js.png?raw=true" alt="js">
                <img class="ts" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/ts.png?raw=true" alt="ts">
                <img class="react" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/react.png?raw=true" alt="react">
              </div>
            </div>
          </div>
          <div class="app_skill back-to-position to-right delay-0">
            <div class="ap">App</div>
            <div class="app_skill1">
              <div class="app_group">
                <img class="xcode" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/xocde.png?raw=true" alt="xcode">
                <img class="swift" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/swift.png?raw=true" alt="swift">
                <img class="android" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/androidstudio.png?raw=true" alt="android">
                <img class="kotlin" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/kotlin.png?raw=true" alt="kotlin">
              </div>
            </div>
          </div>
          <div class="cooperation_skill back-to-position to-left delay-0">
            <div class="cooperation">Cooperation</div>
            <div class="cooperation_skill1">
              <div class="cooperation_group">
                <img class="github" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/github.png?raw=true" alt="github">
                <img class="notion" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/notion.png?raw=true" alt="notion">
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const workEls = this.el.querySelector('.work');
    const skillEls = this.el.querySelector('.skill');
    var controller = new ScrollMagic.Controller();
    var setMultipleClasses = TweenMax.to('.work', 0.5, {
      className: 'show',
    });
    var scene = new ScrollMagic.Scene({
      // duration: 100,
      // offset: 200,
      triggerElement: workEls,
      triggerHook: 0.8,
      // reverse: false,
    });
    scene.setClassToggle(workEls, 'show');
    // scene.setTween(setMultipleClasses);
    scene.addTo(controller);

    var scene = new ScrollMagic.Scene({
      // duration: 100,
      // offset: 200,
      triggerElement: skillEls,
      triggerHook: 0.8,
      // reverse: false,
    });
    scene.setClassToggle(skillEls, 'show');
    // scene.setTween(setMultipleClasses);
    scene.addTo(controller);
  }
}
