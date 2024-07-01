import GuideContent from '../../../components/GuideContent';
import GuideSection from '../../../components/GuideSection';
import CodeSnippet from '../../../components/CodeSnippet';
import Callout from '../../../components/Callout';

function ChangeStyle() {
  const title = 'con.changeStyle()';
  const description =
    'con.changeStyle() 메서드는 디버깅 전용 대화방을 생성하는 기능을 제공합니다.';
  const code = `con.changeStyle('styleCode')`;

  return (
    <GuideContent title={title} description={description}>
      <Callout icon="⛔️">
        con.chat() 메서드 실행 후에 사용할 수 있습니다.
      </Callout>
      <Callout icon="⛔️">
        con.createDebugRoom() 메서드 또는 con.enterDebugRoom() 메서드가 반드시
        실행된 후 사용할 수 있습니다.
      </Callout>
      <GuideSection title="Syntax">
        <CodeSnippet language="JS" code={code} />
        <p>
          con.changeStyle('styleCode') 메서드는 개발자 도구에서 클릭한 엘리먼트
          (또는 컴포넌트)의 스타일을 변경하고 상대방의 DOM에도 동일한 변경을
          적용합니다. 이 메서드를 통해 사용자 인터페이스의 스타일을 동적으로
          변경하고, 그 변경 사항을 실시간으로 다른 사용자에게 전송할 수
          있습니다. <br />
          con.changeStyle() 메서드에서 스타일 코드는 특정 형식을 따릅니다. 이
          형식은 CSS 스타일 속성과 값을 문자열로 전달하며, 각각의 속성-값 쌍은
          콜론(':')으로 구분되고, 여러 속성-값 쌍은 세미콜론(';')으로
          구분됩니다.
        </p>
      </GuideSection>
      <GuideSection title="Parameters">
        <dl>
          <dt className="tag-code">styleCode</dt>
          <dd>
            <b>유형</b> string
          </dd>
          <dd>
            <b>필수 여부</b> O
          </dd>
          <dd>
            <b>설명</b> 변경할 스타일 속성과 값. 예를 들어, "color: red"와 같은
            형식으로 전달됩니다.
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

export default ChangeStyle;
