import { Component } from '../core/jo';
import { gsap } from 'gsap';
import * as ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginIndicator } from 'scrollmagic-plugins';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

export default class Introduction extends Component {
  render() {
    this.el.classList.add('intro');
    this.el.innerHTML = /* html */ `
      <h1>Introduction</h1>

      <div class='introinner'>
        <div class='introinner1'>
          
          <div class='turn'>
            <div class='turn1 back-to-position to-right delay-0'>
              <div class='turn2'>
                <div class='turn3'>
                  <h3>간단한 자기소개를 해주세요</h3>
                  <div class='turn4'>
                  저는 끊임없는 열정과 새로운 기술을 배우는 것을 즐기는 조승환입니다. 
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='work'>
            <div class='work1 back-to-position to-left delay-0'>
              <div class='work2'>
                <div class='work3'>
                  <h3>일에 있어 가장 중요하게 생각하는 것이 있다면?</h3>
                  <div class='work4'>
                  일에 있어 같이 일하는 팀원들과 팀워크와<br/>
                  우리가 해내어야 할 결과에 대해 의논하고 서로 조율하며 <br/>
                  완벽한 결과를 얻을 수 있도록 노력하는 것이 제일 중요하다고 생각합니다 <br/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='forte'>
            <div class='forte1 back-to-position to-right delay-0'>
              <div class='forte2'>
                <div class='forte3'>
                  <h3>당신만의 강점이 있다면?</h3>
                  <div class='forte4'>
                    여러 사회생활 경험과 활발한 인간관계경험으로 <br/>
                    어떤 상황이든 유연하게 대처할 수 있으며 팀에 잘 녹아들어 적응을 잘 할 수있습니다<br/>
                    그리고 전 문제 해결능력이 뛰어납니다<br/>
                    여러가지 일을 하며 다양한 문제를 경험하고 해결함으로 <br/>
                    앞으로도 유동적이고 매우 효율적인 방법으로 문제 해결을 할 수 있습니다.<br/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='myself'>
            <div class='myself1 back-to-position to-left delay-0'>
              <div class='myself2'>
                <div class='myself3'>
                  <h3>더 자세한 저를 알고 싶어요!</h3>
                  <div class='myself4'>
                    더 자세한 내용은 노션에 자세히 정리 해놨습니다<br>
                    한번 들려주셔서 구경한번 해주신다면 감사하겠습니다!
                  </div>
                  <div class='myselfbtn'>
                    <a href='https://south-kicker-499.notion.site/Developer-e65fa672d22e45d3885e09503206a495?pvs=4' target='_blank'>
                      <button class='btn'>notion</button>
                    </a>
                    <a href='https://github.com/JoSeungHwan' target='_blank'>
                      <button class='btn'>github</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;

    const turnEls = this.el.querySelector('.turn');
    const workEls = this.el.querySelector('.work');
    const forteEls = this.el.querySelector('.forte');
    const myselfEls = this.el.querySelector('.myself');
    var controller = new ScrollMagic.Controller();
    // var setMultipleClasses = TweenMax.to('.work', 0.5, {
    //   className: 'show',
    // });
    var scene = new ScrollMagic.Scene({
      // duration: 100,
      // offset: 200,
      triggerElement: turnEls,
      triggerHook: 0.8,
      // reverse: false,
    });
    scene.setClassToggle(turnEls, 'show');
    // scene.setTween(setMultipleClasses);
    scene.addTo(controller);

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
      triggerElement: forteEls,
      triggerHook: 0.8,
      // reverse: false,
    });
    scene.setClassToggle(forteEls, 'show');
    // scene.setTween(setMultipleClasses);
    scene.addTo(controller);

    var scene = new ScrollMagic.Scene({
      // duration: 100,
      // offset: 200,
      triggerElement: myselfEls,
      triggerHook: 0.8,
      // reverse: false,
    });
    scene.setClassToggle(myselfEls, 'show');
    // scene.setTween(setMultipleClasses);
    scene.addTo(controller);
  }
}
