import GuideContent from '../../../components/GuideContent';
import GuideSection from '../../../components/GuideSection';
import CodeSnippet from '../../../components/CodeSnippet';
import Callout from '../../../components/Callout';

function InsertElement() {
  const title = 'con.insertElement()';
  const description =
    'con.insertElement() 메서드는 콘솔 채팅에서 사용자가 개발자 도구에서 클릭한 요소 주변에 지정한 요소를 삽입할 수 합니다.';
  const code = `con.insertElement(element, 'position')`;

  return (
    <GuideContent title={title} description={description}>
      <Callout icon="⛔️">
        con.chat() 메서드 실행 후에 사용할 수 있습니다.
      </Callout>
      <Callout icon="⛔️">
        con.createDebugRoom() 또는 con.enterDebugRoom() 메서드 실행 후에 사용할
        수 있습니다.
      </Callout>
      <GuideSection title="Syntax">
        <CodeSnippet language="JS" code={code} />
        <p>
          JavaScript의 <span className="tag-code">insertAdjacentElement</span>{' '}
          와 유사하게 작동하며, 디버그 모드를 이용 중인 다른 수신자들의 DOM에도
          동일하게 적용됩니다.
        </p>
      </GuideSection>
      <GuideSection title="Parameters">
        <dl>
          <dt className="tag-code">element</dt>
          <dd>
            <b>유형</b> Node
          </dd>
          <dd>
            <b>필수 여부</b> O
          </dd>
          <dd>
            <b>설명</b> 삽입할 Element 노드입니다. 해당{' '}
            <span className="tag-code">Element</span> 는{' '}
            <span className="tag-code">con.insertElement()</span> 실행 전
            콘솔창에서 JavaScript 문법을 사용하여 접근할 수 있습니다.
          </dd>
        </dl>
        <dl>
          <dt className="tag-code">position</dt>
          <dd>
            <b>유형</b> string
          </dd>
          <dd>
            <b>필수 여부</b> X
          </dd>
          <dd>
            <b>설명</b> 삽입 위치를 지정하는 문자열입니다. 기본값은{' '}
            <span className="tag-code">‘beforeend’</span> 입니다.
            <ul>
              <li>
                <b className="tag-code">beforebegin</b>: 타겟 요소 바로 앞에
                삽입합니다.
              </li>
              <li>
                <b className="tag-code">afterbegin</b>: 타겟 요소의 첫 번째
                자식으로 삽입합니다.
              </li>
              <li>
                <b className="tag-code">beforeend</b>: 타겟 요소의 마지막
                자식으로 삽입합니다.
              </li>
              <li>
                <b className="tag-code">afterend</b>: 타겟 요소 바로 뒤에
                삽입합니다.
              </li>
            </ul>
          </dd>
        </dl>
      </GuideSection>
      <GuideSection title="Return value">
        <p>
          없음 ( <span className="tag-code">undefined</span> )
        </p>
      </GuideSection>
      <GuideSection title="Example">
        <p>없음</p>
      </GuideSection>
    </GuideContent>
  );
}

export default InsertElement;
