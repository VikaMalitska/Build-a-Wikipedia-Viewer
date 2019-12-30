import React from 'react';
import { Component } from 'react';

export class RandomArticle extends Component{
    render() {
        return(
            <a className="randomSearch" href={`https://en.wikipedia.org/wiki/Special:Random`} target="_blank">Click here for a random article</a>
        )
    }
}
