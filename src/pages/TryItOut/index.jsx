import MobileView from '../../components/MobileView';
import Header from '../../components/SampleLayout/Header';
import Container from '../../components/SampleLayout/Container';
import Sidebar from '../../components/SampleLayout/Sidebar';
import Section from '../../components/SampleLayout/Section';
import Title from '../../components/SampleLayout/Title';
import Game from '../../components/SampleLayout/Game';
import Footer from '../../components/SampleLayout/Footer';

import './style.scss';

const SIDEVAR_LIST = [
  { id: 'red', className: 'type-red' },
  { id: 'orange', className: 'type-orange' },
  { id: 'yellow', className: 'type-yellow' },
  { id: 'green', className: 'type-green' },
  { id: 'blue', className: 'type-blue' },
  { id: 'navy', className: 'type-navy' },
  { id: 'purple', className: 'type-purple' },
];

function TryItOut() {
  return (
    <>
      <MobileView />
      <div className="page-try">
        <div className="inner">
          <Header />
          <Container>
            <Sidebar title="Menu" items={SIDEVAR_LIST} />
            <Section>
              <Title />
              <Game />
            </Section>
          </Container>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default TryItOut;
