import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './ui/Navbar';
import Data from './Data';
import data from '../data/heroesAndVillans';


const Main = () => {
    const [ characters, setCharacters ] = useState([]);

    const toggleHero = () => {
        let heroes = data.filter(character => character.hero === true);
        setCharacters(heroes);
    };
    
    const toggleVillain = () => {
        let villains = data.filter(character => character.hero === false);
        setCharacters(villains);
    };


    return (
        <div>
            <Navbar />
            <Router>
                <Switch>
                    <Route path="/heroes">
                        <Data characters={heroes} />
                    </Route>
                    <Route path="/villains">
                        <Data villains={villains} />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}


export default Main;