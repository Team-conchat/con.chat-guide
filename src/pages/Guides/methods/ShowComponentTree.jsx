import GuideContent from '../../../components/GuideContent';
import GuideSection from '../../../components/GuideSection';
import CodeSnippet from '../../../components/CodeSnippet';
import Callout from '../../../components/Callout';

function ShowComponentTree() {
  const title = 'con.ShowComponentTree()';
  const description =
    'con.showComponentTree() 메서드는 React 환경에서 컴포넌트의 계층 구조를 콘솔 창에 트리 다이어그램 형식으로 시각화하여 출력하는 기능을 제공합니다.';
  const code = 'con.showComponentTree()';

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
          con.ShowComponentTree() 메서드는 각 컴포넌트의 이름과 DOM 요소를 트리
          구조로 시각화하여, 콘솔 창에서 더 직관적으로 확인할 수 있게 합니다.
        </p>
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

export default ShowComponentTree;
