import GuideContent from '../../../components/GuideContent';
import GuideSection from '../../../components/GuideSection';
import CodeSnippet from '../../../components/CodeSnippet';
import Callout from '../../../components/Callout';

function SearchComponents() {
  const title = 'con.searchComponents()';
  const description =
    'con.searchComponents() 메서드는 주어진 컴포넌트 이름과 일치하는 모든 Fiber 객체를 검색하여, 해당 컴포넌트의 컨테이너에 해당하는 최상위 부모 엘리먼트를 배열로 저장하여 콘솔 창에서 요소를 모두 출력합니다.';
  const code = `con.searchComponents('componentName')`;

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
          사용자는 콘솔 창에서 반환된 DOM 요소를 클릭하여 개발자 도구의 요소
          탭에서 해당 요소를 강조할 수 있습니다.
        </p>
      </GuideSection>
      <GuideSection title="Parameters">
        <dl>
          <dt className="tag-code">componentName</dt>
          <dd>
            <b>유형</b> string
          </dd>
          <dd>
            <b>필수 여부</b> O
          </dd>
          <dd>
            <b>설명</b> 검색할 컴포넌트의 이름입니다.
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

export default SearchComponents;
