import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Cars from './components/Cars';

function App() {

    const topCars = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' }
    ]


    return (
        <>
            <Header title={'NEW header'}/>
            <Body title={'NEW body'}/>
            <Footer title={'NEW footer'}/>
            
            <Cars topCars={topCars} />

        </>
    );
}

export default App;
