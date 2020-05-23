import React from 'react';

/* High order component returning a functional component: 
const withClass = props => (
    <div className={props.classes}>
        {props.children}
    </div>
); */

/* High order component using a regular Javascript function (with the functional component embedded in it):
 * NB: Make sure to change the filename to indicate whether this is a function or a component being returned
 * (lower vs upper case). */
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClass;
