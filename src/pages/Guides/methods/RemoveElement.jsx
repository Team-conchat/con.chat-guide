import GuideContent from '../../../components/GuideContent';
import GuideSection from '../../../components/GuideSection';
import CodeSnippet from '../../../components/CodeSnippet';
import Callout from '../../../components/Callout';

function RemoveElement() {
  const title = 'con.removeElement()';
  const description =
    'con.removeElement() 메서드는 개발자 도구에서 클릭한 엘리먼트 (또는 컴포넌트)를 직접 삭제하거나 인자로 전달한 요소를 삭제합니다. 상대방의 DOM 에도 동일한 변경을 적용합니다.';
  const code = 'con.removeElement([element])';

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
        <p>con.removeElement()</p>
      </GuideSection>
      <GuideSection title="Parameters">
        <dl>
          <dt className="tag-code">element</dt>
          <dd>
            <b>유형</b> Node
          </dd>
          <dd>
            <b>필수 여부</b> X
          </dd>
          <dd>
            <b>설명</b> 삭제할 요소입니다.
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

export default RemoveElement;
