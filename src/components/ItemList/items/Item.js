import React from 'react'

export const Item = ({showcase}) => {

return (  

<div>
            
            <h2> {showcase.name} </h2> 

            <img src={showcase.img} alt="tom"></img> 
            
</div>

) 
}