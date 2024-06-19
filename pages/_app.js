import ReactDOM from 'react-dom';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faS, faChartSimple, faHeart, faHeartCircleBolt, faHouse, faUser} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css';


config.autoAddCss = false
library.add(fab, faEnvelope, faS, faChartSimple, faHeart, faHeartCircleBolt, faHouse, faUser)

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
// kindacode.com