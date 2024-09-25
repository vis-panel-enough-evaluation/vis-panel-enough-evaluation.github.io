import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import People from './components/People';

import styles from "./App.module.scss";

function App() {
  return (
    <div className="App">
			<Header />
			{/* <div>
			{parse('<iframe src="https://app.sli.do/event/287tYVdXGPHsa9wxJfCAKn" height="100%" width="100%" frameBorder="0" style="min-height: 560px;" allow="clipboard-write" title="Slido"></iframe>')}
			</div> */}
			<People title="Panelists" />
			<People title="Organizers" />
			<h3 className={styles.titleWrapper}>{"Post your questions!!"}</h3>
			<div className={styles.iframeWrapper}>

				<iframe
					src="https://app.sli.do/event/287tYVdXGPHsa9wxJfCAKn"
					height="500px"
					width="100%"
				/>
			</div>
			<Footer />

    </div>
  );
}

export default App;
