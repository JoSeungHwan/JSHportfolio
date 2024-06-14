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
                  <h3>프론트엔드로 전향한 이유?</h3>
                  <div class='turn4'>
                    앱 개발을 하면서 프론트엔드에 흥미를 가졌고<br>
                    웹사이트의 아름답고 파워풀한 동적인 사용자 인터페이스를 보고<br>
                    저도 저런 파워풀한 사용자 인터페이스를 만들고 싶다는 생각으로 전향을 결심하였습니다<br>
                    다양한 프레임워크와 라이브러리를 도입해 사용자에게 다양한 서비스를 선보이고 싶습니다.
                    
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
                    제가 사용자 입장에서 생각하는 개발을 추구합니다.<br>
                    보기 쉬운 UI와 최고의 퍼포먼스로<br>다양한 사용자들이 편리하게 서비스를 이용할 수 있도록 기여하고자 합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='myself'>
            <div class='myself1 back-to-position to-right delay-0'>
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
      triggerElement: myselfEls,
      triggerHook: 0.8,
      // reverse: false,
    });
    scene.setClassToggle(myselfEls, 'show');
    // scene.setTween(setMultipleClasses);
    scene.addTo(controller);
  }
}
