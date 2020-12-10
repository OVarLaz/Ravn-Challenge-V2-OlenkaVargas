import React, { Component }  from 'react';
import './detail.css';


function Information({data}){
    function Vehicles(vehicleConnection) {
        return vehicleConnection.vehicles.map((item, index) => (
            <div key={item.name}>
                <div className="cardDetailSon">
                    <p className="vehicleItem">{item.name}</p>
                </div>
            </div>
        ));
    }

    return (
        <div>
            <div className="cardDetail DetailTitle">
                General Information
            </div>
            <div className="cardDetailSon">
                <p className="keyItem">Eye Color</p>
                <p className="valueItem">{data.eyeColor}</p>
            </div>
            <div className="cardDetailSon">
                <p className="keyItem">Hair Color</p>
                <p className="valueItem">{data.hairColor}</p>
            </div>
            <div className="cardDetailSon">
                <p className="keyItem">Skin Color</p>
                <p className="valueItem">{data.skinColor}</p>
            </div>
            <div className="cardDetailSon">
                <p className="keyItem">Birth Year</p>
                <p className="valueItem">{data.birthYear}</p>
            </div>

            <div className="cardDetail DetailTitle">
                Vehicles
            </div>
            {Vehicles(data.vehicleConnection)}
        </div>
    );
}

class Detail extends Component {
    render(){
        return (
            <div className="DetailView">
                {this.props.data === '' ? '' : <Information data={ this.props.data }/>}
            </div>
        )
    }
}

export default Detail