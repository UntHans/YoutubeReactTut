import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBbbvY8AHm4iTlpS385Sx1ld_8LMWrDxQg';

const App = () => {
    return <div>
        <SearchBar />
    </div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));
