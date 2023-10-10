import React from "react"
import {data} from "./data.js"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import Footer from "./Components/Footer"
export default function App(){
    const cards=data.map(item =>{
        return <Card
        key={item.id}
        title={item.title}
        loc={item.location}
        maplink={item.googleMapsUrl}
        startdate={item.startDate}
        enddate={item.endDate}
        des={item.description}
        img={item.imageUrl}
        />
        
    })
    return(
        <div>
            <Navbar/>
            <section className="cardlist">
                {cards}
            </section>
            <Footer />
        </div>
    )
}