import Header from './Header';
import Banner from './Banner';
import Bio from './Bio';
import CloseUp from './CloseUp';
import Prestations from './Prestations';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

function App() {

    //const title = 'ClementDiNatale'

    return (
        <div id='main-wrapper'>
            <div id='display'>
                <Header />
                <Banner />
                <Bio />
                <CloseUp />
                <Prestations />
                <Gallery />
                <Contact />
                <Footer />
            </div>
        </div>
    )

}

export default App;
