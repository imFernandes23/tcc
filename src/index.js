import React from "react";
import ReactDOM from 'react-dom'
import './index.css';
import MyMap from './components/Map'

class Screen extends React.Component{
    render(){
        return(
            <>
                <h1 style={{height:"20%"}}>Cabeçalho</h1>
                <MyMap/>
            </> 
        )
    }
}

//============================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Screen />)