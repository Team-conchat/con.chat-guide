import GuideContent from '../../../components/GuideContent';
import GuideSection from '../../../components/GuideSection';
import CodeSnippet from '../../../components/CodeSnippet';
import Callout from '../../../components/Callout';

function ClearChanges() {
  const title = 'con.clearChanges()';
  const description =
    'con.clearChanges() 메서드는 디버그 전용 채팅방에 입장한 후 사용할 수 있는 메서드로 지금까지의 DOM 변경 사항을 초기화합니다.';
  const code = 'con.clearChanges()';

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
        <p>없음</p>
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

export default ClearChanges;
