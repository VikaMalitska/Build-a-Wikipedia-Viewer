import React from "react";

const Image = ({path}) => {
    
    let str = path.source.toString();
    const pos = str.search("px");
        const arr= str.split("");
        arr.splice(pos,0,"0");
        str = arr.join("");
    return <img src={`${str}`} alt="imagearticle"/>
}
const Article = props => {
    const url = 'https://en.wikipedia.org/wiki/' + props.content.title;
    
    
    if(props.content.thumbnail){
        return(
            <div className="article">
                <div className="article image">
                   <Image path={props.content.thumbnail}/>
                </div>
                <div className="article context">
                    {props.content.extract}
                    <a href={`${url}`} target='_blank'>{props.content.title}</a>
                </div>
            </div>
        )
    }

    return(
        <div className="article">
            <div className="article context">
                {props.content.extract}
                <a href={`${url}`} target='_blank'>{props.content.title}</a>
            </div>
        </div>
    )
}
export default Article;