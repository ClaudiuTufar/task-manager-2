import React from 'react';
import "./Badges.css";

function Badges(props) {
    const badgesColor = () => {
        switch(props.status) {
            case "Todo":
                return "grey";
            case "Pending":
                return "yellow";
            case "In Progress":
                return "blue";
            case "Completed":
                return "green";
            default: 
                return "grey";
        };
    };

  return <p className={`status ${badgesColor()}`}>{props.status}</p>;
  
}

export default Badges;