import React, {useEffect} from 'react';



const Data = (props) => {


  return (
    props.characters.map(c, index => {
      return (
          <div className="character-display">
              <h2>{c.name}</h2>
              <h6>Real Name: {c.realName}</h6>
              <p>Universe: {c.universe}</p>
              <p>Powers:{c.power}</p>
          </div>                
      )
    })
  )
};

export default Data;