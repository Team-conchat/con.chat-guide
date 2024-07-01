import GuideContent from '../../../components/GuideContent';
import GuideSection from '../../../components/GuideSection';
import CodeSnippet from '../../../components/CodeSnippet';
import Callout from '../../../components/Callout';

function ListRooms() {
  const title = 'con.listRooms()';
  const description =
    'con.listRooms() 메서드는 사용자들이 모든 대화방의 목록을 조회하는 기능을 제공합니다.';
  const code = 'con.listRooms()';

  return (
    <GuideContent title={title} description={description}>
      <Callout icon="⛔️">
        con.chat() 메서드 실행 후에 사용할 수 있습니다.
      </Callout>
      <GuideSection title="Syntax">
        <CodeSnippet language="JS" code={code} />
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

export default ListRooms;
