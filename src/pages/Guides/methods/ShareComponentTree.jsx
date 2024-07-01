import GuideContent from '../../../components/GuideContent';
import GuideSection from '../../../components/GuideSection';
import CodeSnippet from '../../../components/CodeSnippet';
import Callout from '../../../components/Callout';

function ShareComponentTree() {
  const title = 'con.shareComponentTree()';
  const description =
    'con.shareComponentTree() 메서드는 React 애플리케이션에서 컴포넌트 트리를 시각적으로 나타내고, 발신자와 수신자 간의 state와 props를 비교하기 위해 사용됩니다.';
  const code = `con.shareComponentTree('username')`;

  return (
    <GuideContent title={title} description={description}>
      <Callout icon="⛔️">
        con.chat() 메서드 실행 후에 사용할 수 있습니다.
      </Callout>
      <Callout icon="⛔️">
        con.createDebugRoom() 메서드 또는 con.enterDebugRoom() 메서드가 반드시
        실행된 후 사용할 수 있습니다.
      </Callout>
      <Callout icon="⛔️">react 환경에서만 사용할 수 있습니다.</Callout>
      <GuideSection title="Syntax">
        <CodeSnippet language="JS" code={code} />
        <p>
          con.shareComponentTree() 메서드는 발신자가 실행하면, 수신자의 트리
          정보를 가져와, 발신자의 콘솔창에 트리구조가 출력이 되고 해당
          컴포넌트의 state와 props의 차이가 있는 경우에만 컴포넌트 하단에 정보를
          확인할 수 있습니다.
        </p>
      </GuideSection>
      <GuideSection title="Parameters">
        <dl>
          <dt className="tag-code">username</dt>
          <dd>
            <b>유형</b> string
          </dd>
          <dd>
            <b>필수 여부</b> O
          </dd>
          <dd>
            <b>설명</b> 컴포넌트 트리를 비교할 수신자의 이름입니다.
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

export default ShareComponentTree;
