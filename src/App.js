import React from 'react';
import Header from './components/masters/Header';

export default ({children}) => {

    return (
         <div>
            <Header />
            {children}
         </div>
    );
};