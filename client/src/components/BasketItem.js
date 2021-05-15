import React from 'react';
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory()
    console.log(device)
    return (

        <li className={"mt-3"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
        style={{width: "70vw", cursor: 'pointer'}} border={"light"}>

           
                <Image width={15} height={15} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="device">
                    <div>Рейтинг:</div>
                    <div className="rating">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <span>{device.name}</span>
         
        </li>
        
    );
};

export default DeviceItem;
