import GuideContent from '../../../components/GuideContent';
import GuideSection from '../../../components/GuideSection';
import CodeSnippet from '../../../components/CodeSnippet';
import Callout from '../../../components/Callout';

function CreateDebugRoom() {
  const title = 'con.createDebugRoom()';
  const description =
    'con.createDebugRoom() 메서드는 디버깅 전용 대화방을 생성하는 기능을 제공합니다.';
  const code = `con.createDebugRoom('roomname')`;

  return (
    <GuideContent title={title} description={description}>
      <Callout icon="⛔️">
        con.chat() 메서드 실행 후에 사용할 수 있습니다.
      </Callout>
      <GuideSection title="Syntax">
        <CodeSnippet language="JS" code={code} />
        <p>
          채팅방은 고유한 키 값을 가지며, 해당 키 값을 알고 있는 사용자만 입장할
          수 있습니다. 이 메서드를 통해 채팅방을 만든 사용자는 생성된 방의 키
          값을 받고, 해당 방으로 자동으로 입장합니다.
        </p>
      </GuideSection>
      <GuideSection title="Parameters">
        <dl>
          <dt className="tag-code">roomname</dt>
          <dd>
            <b>유형</b> string
          </dd>
          <dd>
            <b>필수 여부</b> O
          </dd>
          <dd>
            <b>설명</b> 생성할 디버깅 방의 이름입니다. 유일한 식별자여야 합니다.
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

export default CreateDebugRoom;
