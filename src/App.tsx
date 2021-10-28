import React, { useEffect, useState } from 'react';
import { Graph } from './Graph';
import './App.css';

function App() {
    const [data, setData] = useState();

    useEffect(() => {
        const api = 'https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json';
        fetch(api)
            .then(response => response.json())
            .then(employees => setData(employees))
    }, [])

    return (
        data 
            ? <Graph data={data} />
            : <div>asd</div>
    )
}

export default App;
