import GuideContent from '../../../components/GuideContent';
import GuideSection from '../../../components/GuideSection';
import CodeSnippet from '../../../components/CodeSnippet';
import Callout from '../../../components/Callout';

function ChangeText() {
  const title = 'con.changeText()';
  const description =
    'con.changeText() 메서드는 개발자 도구에서 클릭한 엘리먼트 (또는 컴포넌트)의 요소의 텍스트 내용을 설정합니다. 텍스트 내용을 설정하여 현재 텍스트 내용을 대체합니다.';
  const code = `con.changeText('text')`;

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
          con.changeText() 메서드를 통해 사용자 인터페이스의 텍스트 내용을
          동적으로 변경하고, 그 변경 사항을 실시간으로 다른 사용자에게 전송할 수
          있습니다.
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
            <b>설명</b> 설정할 텍스트 내용입니다.
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

export default ChangeText;
