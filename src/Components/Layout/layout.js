import React from 'react';
import Aoux from '../../Houck/Aoux'
import Year from "../Year/Year";
import './Layout.css'

const Layout = (props) =>(
    <Aoux>
        <div>Toolbar, Backdroop </div>
        <main className = 'Content '>
             {props.children}

        </main>
    </Aoux>
)

export default Layout
