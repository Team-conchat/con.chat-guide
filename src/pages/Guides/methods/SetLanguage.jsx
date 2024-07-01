import GuideContent from '../../../components/GuideContent';
import GuideSection from '../../../components/GuideSection';
import CodeSnippet from '../../../components/CodeSnippet';
import Callout from '../../../components/Callout';

function SetLanguage() {
  const title = 'con.setLanguage()';
  const description =
    'con.setLanguage() 메서드는 사용자가 채팅에서 사용할 언어를 설정합니다.';
  const code = `con.setLanguage('language')`;

  return (
    <GuideContent title={title} description={description}>
      <Callout icon="⛔️">
        con.chat() 메서드 실행 후에 사용할 수 있습니다.
      </Callout>
      <GuideSection title="Syntax">
        <CodeSnippet language="JS" code={code} />
        <p>
          JavaScript 또는 React 언어를 설정할 수 있으며, 설정된 언어는 채팅에서
          사용됩니다.
        </p>
      </GuideSection>
      <GuideSection title="Parameters">
        <dl>
          <dt className="tag-code">language</dt>
          <dd>
            <b>유형</b> string
          </dd>
          <dd>
            <b>필수 여부</b> O
          </dd>
          <dd>
            <b>설명</b> 설정할 언어를 지정합니다. 유효한 값은{' '}
            <span className="tag-code">'js'</span> 또는{' '}
            <span className="tag-code">'react'</span> 입니다.
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

export default SetLanguage;
