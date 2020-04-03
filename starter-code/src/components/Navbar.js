import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="w-100 py-3 m-0 font-weight-bold fixed-top mb-2 bg-primary row text-left">
                <a href="/"><h2 className="text-white ml-5 d-inline justift">IronBeers</h2></a>
            </div>
        )
    }
}

