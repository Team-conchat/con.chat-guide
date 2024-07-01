import GuideContent from '../../../components/GuideContent';
import GuideSection from '../../../components/GuideSection';
import CodeSnippet from '../../../components/CodeSnippet';

function Chat() {
  const title = 'con.chat()';
  const description =
    'con.chat() 메서드는 개발자 도구 console 창에서 채팅 기능을 활성화 시킵니다.';
  const code = 'con.chat()';

  return (
    <GuideContent title={title} description={description}>
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
        <p>없음</p>
      </GuideSection>
      <GuideSection title="Return value">
        <p>없음</p>
      </GuideSection>
      <GuideSection title="Example">
        <p>없음</p>
      </GuideSection>
    </GuideContent>
  );
}

export default Chat;
