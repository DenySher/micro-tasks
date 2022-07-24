import './App.css';
import { useState } from 'react';
import ShowButton from './components/Button/ShowButton';
import ShowtCars from './components/Cars/ShowCars'
import UseState from './components/UseState/UseState';
import ShowFilter from './components/Filter/ShowFilter';

function App() {

    return (
        <div>
            <h2>Monday first week:</h2>
            <div className='containerTasks'>
                <div className='item'>
                    <h4>metod Map (Car list)</h4>
                    <ShowtCars />
                </div>
                <div className='item'>
                    <h4>Button (Universal components)</h4>
                    <ShowButton />
                </div>
                <div>
                    <UseState />
                </div>
                <div>
                    <ShowFilter />
                </div>
            </div>
        </div>
    );
}

export default App;
