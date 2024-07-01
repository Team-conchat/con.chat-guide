import GuideContent from '../../../components/GuideContent';
import GuideSection from '../../../components/GuideSection';
import CodeSnippet from '../../../components/CodeSnippet';
import Callout from '../../../components/Callout';

function LeaveDebugRoom() {
  const title = 'con.leaveRoom()';
  const description =
    'con.leaveRoom() 메서드는 개발자 도구 console 창에서 채팅 기능을 활성화 시킵니다.';
  const code = 'con.leaveRoom()';

  return (
    <GuideContent title={title} description={description}>
      <Callout icon="⛔️">
        주의사항: 이번 주 금요일은 시스템 점검으로 인해 모든 서비스가 일시
        중지됩니다.
      </Callout>
      <GuideSection title="Syntax">
        <CodeSnippet language="JS" code={code} />
        <p>
          이 메서드는 채팅을 시작할 때 안내 메시지를 출력하며, JavaScript와
          React 환경에서 채팅이 가능함을 알립니다. 사용자가 사용하는 언어를
          설정하기 위해 con.setLanguage("js" 또는 "react") 명령을 입력하도록
          요청합니다. con.chat() 메서드를 처음에 실행해야 con.chat이 지원하는
          모든 메서드를 실행할 수 있습니다.
        </p>
      </GuideSection>
      <GuideSection title="Parameters">
        <div className="section-content">
          <p>없음</p>
        </div>
      </GuideSection>
      <GuideSection title="Return value">
        <div className="section-content">
          <p>없음</p>
        </div>
      </GuideSection>
      <GuideSection title="Example">
        <p>없음</p>
      </GuideSection>
    </GuideContent>
  );
}

export default LeaveDebugRoom;
