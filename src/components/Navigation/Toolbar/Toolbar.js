import React from 'react'

import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import Navigationitems from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <Navigationitems />
        </nav>
    </header>
)

export default toolbar