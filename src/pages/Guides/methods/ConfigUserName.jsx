import GuideContent from '../../../components/GuideContent';
import GuideSection from '../../../components/GuideSection';
import CodeSnippet from '../../../components/CodeSnippet';
import Callout from '../../../components/Callout';

function ConfigUserName() {
  const title = 'con.configUserName()';
  const description =
    'con.configUsername() 메서드는 채팅을 시작할 때 사용자 이름을 설정하는 기능을 제공합니다.';
  const code = `con.configUserName('username')`;

  return (
    <GuideContent title={title} description={description}>
      <Callout icon="⛔️">
        con.chat() 메서드 실행 후에 사용할 수 있습니다.
      </Callout>
      <GuideSection title="Syntax">
        <CodeSnippet language="JS" code={code} />
        <p>
          사용자가 지정한 이름을 설정하고, 설정된 이름을 확인합니다. 중복된
          이름은 설정이 불가합니다.
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
            <b>설명</b> 설정할 사용자 이름입니다. 이 이름은 고유해야 하며,
            중복된 이름이 있으면 변경 요청 메시지가 출력됩니다.
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

export default ConfigUserName;
