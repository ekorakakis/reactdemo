import React from 'react';

// this is a "globally" available context component and can be iniitialised with any value/object/array etc.
const authContext = React.createContext({
    authenticated: false,
    // only being added for better auto-completion ...
    login: () => {}
});

export default authContext;
