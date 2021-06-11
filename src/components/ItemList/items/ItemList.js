import React, {useState,useEffect} from 'react'

const e = {listStyle:"none"}

export const Lister = ({promiseTry}) => {

    const [show, setShow] = useState ([])

    const execute = () => {

        promiseTry().then(data => {
            const dataFilter = data.filter(data => data.radioactivo)

            setShow(dataFilter)
        })

    }

    useEffect (()=>{

        execute();

    },[])  

    return (

        /*esto lo paso al list para mostrar los items*/
        <div>
            
            {show.map((show, W)=>
            
            <React.Fragment key={W}>
            
                <h2 style={e}> {show.name} </h2> 

                <img src={show.img} alt="tom"></img> 
                
            </React.Fragment>
            )}

        </div>

    )

}


/*{show.map((show, W)=>
                    
    <img key={W} src={show.img} alt="tom"></img>         

)}*/
