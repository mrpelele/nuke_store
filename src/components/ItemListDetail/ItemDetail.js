import React, {useState} from 'react'
import './ItemDetail.css'
import {Counter} from '../Counter/Counter'

/*import {BuyMessage} from '../Counter/BuyMessage'
import {CustomComponent} from '../Counter/CustomComponent'*/

const imgSTYLE = {

    height: "50rem",
    width: "30rem"

}

const GenerBuy = {

    display: "flex",
    position: "relative",
    width: "100%",
    height: "3.5rem",
    backgroundColor: "rgba(240, 238, 238, 0.836)",
    borderStyle: "solid",
    borderWidth: "1px",
    alignSelf: "center",
    justifyContent: "flex-end",
    fontSize: "1rem"
  
}

const nams = {

    position: "relative",
    alignSelf: "center",
    fontSize: "10rem"

}

/*const ButtonComponent =({stockUpdate,stock}) =>{
    return (
        <button onClick={() => stockUpdate(stock+1)}>

            

        </button>
    )
}

const StockHandle = ({component:CustomComponent}) => {

    const [stock,setStock] = React.useState(0)

    const controlStock = props => {

        setStock(props)

    }

    return (
    <div>
        <BuyMessage stock={stock}/>

        <CustomComponent stock={stock} stockUpdate={controlStock}/>
    </div>

    )

}
*/







export const Detailer =({Show}) => {

    const [Bought,setBought] = useState(0);

    function Buy(data) {

        setBought(data)

            if (data>0) {
                alert("you added "+data+" unit/s to your cart")
            }

        console.log(data)
              
    }

    

    return (

        <section>

           <div className="main">

                <h2 style={nams}>{Show.name}</h2>

                <img style={imgSTYLE} src={Show.img} alt=""></img>           

           </div>

           <div style={GenerBuy}>
                    <Counter stock="4" noStock="0" Buy={Buy}/>

                    
            </div> 

            <div className="details">

                <h3>Item Details</h3>

                <p>{Show.description}</p>

                <p>Range: {Show.range}</p>

                <p>Price: {Show.price}</p>
                
            </div>

        </section>

        /*<StockHandle component={ButtonComponent}/>*/

    )

} 
