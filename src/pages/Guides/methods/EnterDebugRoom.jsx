import GuideContent from '../../../components/GuideContent';
import GuideSection from '../../../components/GuideSection';
import CodeSnippet from '../../../components/CodeSnippet';
import Callout from '../../../components/Callout';

function EnterDebugRoom() {
  const title = 'con.enterDebugRoom()';
  const description =
    'con.enterDebugRoom() 메서드는 주어진 roomName과 key를 사용하여 디버깅 전용 채팅방에 입장합니다.';
  const code = `con.enterDebugRoom('roomname', 'roomkey')`;

  return (
    <GuideContent title={title} description={description}>
      <Callout icon="⛔️">
        con.chat() 메서드 실행 후에 사용할 수 있습니다.
      </Callout>
      <GuideSection title="Syntax">
        <CodeSnippet language="JS" code={code} />
        <p>
          방의 고유한 키 값이 일치할 경우, 사용자는 해당 방에 입장할 수 있으며,
          입장 성공 메시지가 출력됩니다. 키 값이 일치하지 않을 경우, 입장이
          거부되고 오류 메시지가 출력됩니다.
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
            <b>설명</b> 입장할 채팅 방의 이름입니다. 방의 고유한 키 값이 일치할
            경우, 사용자는 해당 방에 입장할 수 있으며, 키 값이 일치하지 않을
            경우, 입장이 거부되고 오류 메시지가 출력됩니다.
          </dd>
        </dl>
        <dl>
          <dt className="tag-code">roomkey</dt>
          <dd>
            <b>유형</b> string
          </dd>
          <dd>
            <b>필수 여부</b> O
          </dd>
          <dd>
            <b>설명</b> 디버그 방에 입장하기 위한 필수 키값입니다. 디버그 방에
            입장 하려면 이 키 값이 정확해야 합니다.
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

export default EnterDebugRoom;
