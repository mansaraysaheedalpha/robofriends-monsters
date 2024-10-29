import React, { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox/searchbox.component';
import Card from './components/Card/card.component';
import './App.css';

const App = (props) => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchField] = useState('');

    useEffect(() => {
        fetch('https://robofriends-api-1.onrender.com/robotsapi/')
            .then(response => response.json())
            .then(data => setRobots(data))
            .catch(err => console.error('Error fetching data:', err))
    }, [])

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
        <>
            <h1 className='text-center'>MY ROBOFRIENDS</h1>
            <div className='search text-center'>
                <SearchBox
                    type='search'
                    className='searchbox text-center'
                    placeholder='Search robots'
                    searchChange={onSearchChange} />
            </div>

            <div className='text-center'>
                <Card filteredRobots={filteredRobots} />
            </div>
        </>

    )
}

export default App