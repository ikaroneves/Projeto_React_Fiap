import React, { Component } from 'react';

class Home extends React.Component {
    render() {
        return(<div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="search" />
                    <label className="mdl-textfield__label" htmlFor="search">Digite para buscar...</label>                
                </div>
                </div>)
            }
}

export default Home;