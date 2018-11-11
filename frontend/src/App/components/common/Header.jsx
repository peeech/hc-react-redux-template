import React from 'react';

class Header extends React.Component{
    constructor(props) {
        super(props);
        // Local componen't state necessary for React's Controlled Components (<input>)
        this.state = {
            color: "hsl(" + Math.floor(Math.random()*255) + ", 85%, 48%)"
        };
    }

    render() {
        return (
            <nav 
                className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary" 
                /*ref={(el) => {
                    if (el) {
                        console.log(el);
                        el.style.setProperty('background-color', this.state.color, 'important');
                    }
                }}*/>
                <a className="navbar-brand" href="https://github.com/HoloDen/mutual-rating">{this.props.name}</a>
                <div className="m-auto">
                </div>
            </nav>
        )
    }
}

export default Header;