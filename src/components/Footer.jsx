import React from "react"

const date = new Date()
const year = date.getFullYear()

function Footer(){
    return (<footer><p>Copyrights &#169; {year}</p></footer>)
}

export default Footer