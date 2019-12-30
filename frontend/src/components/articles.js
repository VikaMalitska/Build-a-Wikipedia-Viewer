import React, { Component } from 'react';
import Article from "./article";

// const Image = ({path}) => {
//     return <img src={`${path}`} alt="imagearticle"/>
// }
export class Articles extends Component {
    
    render(){
     const {data} = this.props;
     const key = Object.keys(data);
     if(data){
        return(
            <div className="articles"> 
                {key.map(index =>(
                    <Article
                        content = {data[index]}
                    />
                ))}

            </div>
        )  
     } else return null; 
    }
}