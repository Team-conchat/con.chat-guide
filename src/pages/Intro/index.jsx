import { useRef, createRef } from 'react';

import CodeBlock from '../../components/CodeBlock';
import NavCategory from '../../components/NavCategory';
import IntroSection from '../../components/IntroSection';
import DescriptionWithCode from '../../components/DescriptionWithCode';

import { NAV_CATEGORY } from '../../constants/routes';

import './style.scss';

function Intro() {
  const sectionRefs = useRef(
    NAV_CATEGORY.reduce((acc, value) => {
      acc[value.id] = createRef();

      return acc;
    }, {}),
  );

  return (
    <div className="page-intro">
      <section className="section-intro">
        <div className="inner">
          <strong className="title-intro">
            Hello there!
            <br />
            Fancy a chat in the console? <br />
            Let’s debug together!
          </strong>
          <div className="area-info">
            <CodeBlock code="test" />
            <a
              href="https://github.com/Team-macoss/con.chat"
              className="link-repository"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </section>
      <section className="section-how-work">
        <div className="inner">
          <h2 className="title">How con.chat work</h2>
          <NavCategory sectionRefs={sectionRefs.current} />
          <div className="content">
            <IntroSection
              id="areaStart"
              ref={sectionRefs.current.areaStart}
              title="START"
            >
              <DescriptionWithCode
                text="채팅을 시작하고 `con.setLanguage('js' 또는 'react')`로 언어를 설정합니다."
                code="con.chat()"
              />
              <DescriptionWithCode
                text="채팅 언어를 설정합니다 ('js' 또는 'react')."
                code="con.setLanguage('language')"
              />
            </IntroSection>
            <IntroSection
              id="areaSpeak"
              ref={sectionRefs.current.areaSpeak}
              title="SPEAK"
            >
              <DescriptionWithCode
                text="모든 사용자에게 메시지를 전송합니다."
                code="con.speak('Hello, World!')"
              />
            </IntroSection>
            <IntroSection
              id="areaUser"
              ref={sectionRefs.current.areaUser}
              title="USER"
            >
              <DescriptionWithCode
                text="사용자 이름을 설정합니다."
                code="con.configuserName('userName')"
              />
            </IntroSection>
            <IntroSection
              id="areaRoom"
              ref={sectionRefs.current.areaRoom}
              title="ROOM"
            >
              <DescriptionWithCode
                text={
                  '디버깅 방을 생성합니다. \n고유한 키가 생성됩니다. 생성된 키값은 한 번만 볼 수 있습니다.\n디버깅 방에서는 사용자들간의 DOM 조작이 가능합니다.'
                }
                code="con.createDebugRoom('roomName')"
              />
              <DescriptionWithCode
                text={
                  '디버깅 방에 입장합니다.\n방 이름과 키가 일치해야 합니다. 일치하지 않으면 입장이 불가합니다.'
                }
                code="con.enterDebugRoom('roomName', 'roomKey')"
              />
              <DescriptionWithCode
                text="모든 디버깅 방의 목록을 조회합니다."
                code="con.listRooms()"
              />
              <DescriptionWithCode
                text="디버깅 방에서 나갑니다."
                code="con.leaveRoom()"
              />
            </IntroSection>
            <IntroSection
              id="areaDebug"
              ref={sectionRefs.current.areaDebug}
              title="DEBUG"
            >
              <DescriptionWithCode
                text="개발자 도구에서 클릭한 요소의 스타일을 변경합니다."
                code="con.changeStyle('color: red; background-color: yellow;')"
              />
              <DescriptionWithCode
                text="개발자 도구에서 클릭한 요소의 텍스트를 변경합니다."
                code="con.changeText('text')"
              />
              <DescriptionWithCode
                text="개발자 도구에서 클릭한 요소의 속성 값을 설정합니다."
                code="con.setAttribute('attrName', 'attrValue')"
              />
              <DescriptionWithCode
                text={
                  '개발자 도구에서 클릭한 요소의 주변으로 element를 지정된 위치에 삽입합니다.\nelement는 Javascript 문법을 사용하여 접근할 수 있습니다.\nposition : beforebegin | afterbegin | beforeend | afterend'
                }
                code="con.insertElement(element, 'position')"
              />
              <DescriptionWithCode
                text="element 또는 개발자 도구에서 클릭한 요소를 삭제합니다."
                code="con.removeElement(element)"
              />
              <DescriptionWithCode
                text="모든 DOM 변경 사항을 초기화합니다."
                code="con.clearChanges()"
              />
              <DescriptionWithCode
                text="컴포넌트를 이름으로 검색하여 DOM 요소를 확인합니다."
                code="con.searchComponents('componentName')"
              />
              <DescriptionWithCode
                text="리액트 컴포넌트 트리를 보여줍니다."
                code="con.showComponentTree()"
              />
              <DescriptionWithCode
                text="리액트 컴포넌트 트리를 비교합니다. 발신자와 수신자의 state와 props를 비교합니다."
                code="con.shareComponentTree('userName')"
              />
            </IntroSection>
            <IntroSection
              id="areaGuide"
              ref={sectionRefs.current.areaGuide}
              title="GUIDE"
            >
              <DescriptionWithCode
                text="con.chat 사용 가이드를 보여줍니다."
                code="con.showGuide()"
              />
            </IntroSection>
            <IntroSection
              id="areaClose"
              ref={sectionRefs.current.areaClose}
              title="CLOSE"
            >
              <DescriptionWithCode
                text="현재 채팅 세션을 종료합니다. 또 만나요!"
                code="con.close()"
              />
            </IntroSection>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
