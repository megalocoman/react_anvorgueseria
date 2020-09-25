import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Haz tu Anvorguesa</NavigationItem>
        <NavigationItem link="/">Compra</NavigationItem>
    </ul>
);

export default navigationItems;