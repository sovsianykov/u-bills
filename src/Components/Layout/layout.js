import React from 'react';
import Aux from '../../Houk/Aoux'
import './Layout.css'

const Layout = (props) =>(
    <Aux>
        <main className = 'Content '>
             {props.children}

        </main>
    </Aux>
)

export default Layout
