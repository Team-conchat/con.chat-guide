import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Intro from './pages/Intro';
import Guides from './pages/Guides';
import TryItOut from './pages/TryItOut';
import Chat from './pages/Guides/methods/Chat';
import SetLanguage from './pages/Guides/methods/SetLanguage';
import Speak from './pages/Guides/methods/Speak';
import ConfigUserName from './pages/Guides/methods/ConfigUserName';
import CreateDebugRoom from './pages/Guides/methods/CreateDebugRoom';
import EnterDebugRoom from './pages/Guides/methods/EnterDebugRoom';
import ListRooms from './pages/Guides/methods/ListRooms';
import LeaveDebugRoom from './pages/Guides/methods/LeaveDebugRoom';
import ChangeStyle from './pages/Guides/methods/ChangeStyle';
import ChangeText from './pages/Guides/methods/ChangeText';
import SetAttribute from './pages/Guides/methods/SetAttribute';
import InsertElement from './pages/Guides/methods/InsertElement';
import RemoveElement from './pages/Guides/methods/RemoveElement';
import ClearChanges from './pages/Guides/methods/ClearChanges';
import SearchComponents from './pages/Guides/methods/SearchComponents';
import ShowComponentTree from './pages/Guides/methods/ShowComponentTree';
import ShareComponentTree from './pages/Guides/methods/ShareComponentTree';
import ShowGuide from './pages/Guides/methods/ShowGuide';
import Close from './pages/Guides/methods/Close';
import MobileView from './components/MobileView';

import './styles/global.scss';
import './styles/variables.scss';
import './style.scss';

function App() {
  return (
    <div className="wrap">
      <MobileView />
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/guides" element={<Guides />}>
            <Route index element={<Navigate to="/guides/chat" />} />
            <Route path="chat" element={<Chat />} />
            <Route path="setLanguage" element={<SetLanguage />} />
            <Route path="speak" element={<Speak />} />
            <Route path="configUsername" element={<ConfigUserName />} />
            <Route path="createDebugRoom" element={<CreateDebugRoom />} />
            <Route path="enterDebugRoom" element={<EnterDebugRoom />} />
            <Route path="listRooms" element={<ListRooms />} />
            <Route path="leaveDebugRoom" element={<LeaveDebugRoom />} />
            <Route path="changeStyle" element={<ChangeStyle />} />
            <Route path="changeText" element={<ChangeText />} />
            <Route path="setAttribute" element={<SetAttribute />} />
            <Route path="insertElement" element={<InsertElement />} />
            <Route path="removeElement" element={<RemoveElement />} />
            <Route path="clearChanges" element={<ClearChanges />} />
            <Route path="searchComponents" element={<SearchComponents />} />
            <Route path="showComponentTree" element={<ShowComponentTree />} />
            <Route path="shareComponentTree" element={<ShareComponentTree />} />
            <Route path="showGuide" element={<ShowGuide />} />
            <Route path="close" element={<Close />} />
          </Route>
          <Route path="/tryitout" element={<TryItOut />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
