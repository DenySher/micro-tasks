import './App.css';
import { useState } from 'react';
import ShowButton from './components/Button/ShowButton';
import ShowtCars from './components/Cars/ShowCars'
import UseState from './components/UseState/UseState';
import ShowFilter from './components/Filter/ShowFilter';
import ShowInput from './components/Input/ShowInput';

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
                    <h4>UseState</h4>
                    <UseState />
                </div>
                <div>
                    <h4>Filter</h4>
                    <ShowFilter />
                </div>
                <div>
                    <h4>Input</h4>
                    <ShowInput />
                </div>
            </div>
        </div>
    );
}

export default App;
