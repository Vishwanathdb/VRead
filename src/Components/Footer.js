import React, { Component } from 'react'

export class Footer extends Component {

    render() {
        return (
            <div>
                <footer className={`footer mt-auto py-3 bg-${this.props.mode==='light'?'primary' : 'black'}`}>
                    <div className="container text-center">
                        <span>All rights are reserved by <a href='https://www.linkedin.com/in/vishwanath-d-b-1b89941a3' rel="noreferrer" target="_blank" style={{"textDecoration": "none", "color": this.props.mode==='light'?"white" : "grey"}}>Vish</a>.</span>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
