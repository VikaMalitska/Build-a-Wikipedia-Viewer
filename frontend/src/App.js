import React, { Component } from "react";
import { InputKey } from "./components/inputKey";
import { Articles } from "./components/articles";
import { RandomArticle } from "./components/randomArticle";
import  IconSearch  from "./components/icon";
import { requestWiki } from "./api";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            searchicon: false
        };
        this.searchIcon = this.searchIcon.bind(this);
    }
    async getArtiklesList(data) {
        const response = await requestWiki(data);
        const result = await response.json();
        const list = result.query.pages;
        this.setState({ data: list });
    }

    searchIcon(){
        this.setState({searchicon: true})
    }
    render() {
        switch  (this.state.searchicon){
            case true:
                return (
                    <div className="containerInputKey">
                        <InputKey
                            pageHandler={value => {
                            this.getArtiklesList(value);
                            }}
                        />
                        <Articles data={this.state.data} />
                    </div>
                );
            case false:
                return(
                    <div className="searchContainer">
                        <RandomArticle/>
                        <div className="containerIcon">
                            <IconSearch searchIcon={this.searchIcon } className="fa fa-plus-circle"  fontSize="large"/>
                        </div>
                        <p>Click icon to search</p>
                    </div>
                );         
        }
        
    }
}

export default App;
