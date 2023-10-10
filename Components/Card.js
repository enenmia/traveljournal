import React from "react"

export default function Card(props){
    return (
        <div className="card">
       
            <div className="imgcontainer">
                <img src={props.img}/>
            </div>
            <div className="texts">
                <div className="titleLine">
                    <img src="./images/loclogo.png" className="loclogo"/>
                    <p className="loc">{props.loc}</p>
                    <a className="maplink"href={props.maplink}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className="date">{props.startdate} - {props.enddate}</p>
                <p className="des">{props.des}</p>
            </div>
        </div>
    )
}