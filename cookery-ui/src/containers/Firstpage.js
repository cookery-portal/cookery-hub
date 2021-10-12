import React from "react";
import Row from "../components/Row"
import background from "../assets/images/black.jpeg";
const Firstpage=() =>{
    return (
        
        <div style={{ backgroundImage: `url(${background})` }}>
                <div >
                <h1 style={{ color: 'white',fontSize:'40px' }}>    Recipes</h1>
                <p style={{ color: 'white' }}>     If you are a chef, no matter how good a chef you are, it’s not good cooking for yourself; the joy is in cooking for others.</p>
                </div>
            <Row title='Breakfast' recipeType='breakfast' />
            
        </div>    
        
  );
}


export default Firstpage;