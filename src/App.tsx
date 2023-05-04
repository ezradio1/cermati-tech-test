import HighlightPanel from 'components/HighlightPanel';
import HeaderAndHeroShot from './components/HeaderAndHeroShot';
import NotificationPanel from './components/NotificationPanel';
import Footer from 'components/Footer';
import Newsletter from 'components/Newsletter';

function App() {
  return (
    <div>
      <NotificationPanel />
      <HeaderAndHeroShot />
      <HighlightPanel />
      <Footer />
      <Newsletter />
    </div>
  );
}

export default App;
