import React, { Component }  from 'react';
import './list.css';
import {useQuery} from "@apollo/client";
import {GET_ALL_PEOPLE} from "../../api/query";
import Detail from "../Detail/detail";



function AllPeople({onClickFunction}) {
    const { loading, error, data } = useQuery(GET_ALL_PEOPLE);
    if (loading) return <p className="Loading">Loading...</p>;
    if (error) return <p className="ErrorData">Failed to Load Data</p>;

    return data.allPeople.people.map((item, index) => (
        <div key={item.id}
             onClick={(e) => onClickFunction(e, item)}>

            <div className="card">
                <div className="container">
                    <p className="TitleLabel">
                        {item.name}
                    </p>
                    <p className="DescriptionLabel">
                        {item.species? item.species.name: 'Human'} from { item.homeworld? item.homeworld.name: 'Human' }
                    </p>
                </div>
            </div>

        </div>
    ));
}

class List extends Component {

    state={
        item_data: '',
    }

    onClickFunction=(e, childData) => {
        this.setState({item_data:childData});
    }

    render(){
        return (
            <div>
                <div className="ListView">
                    <AllPeople onClickFunction={(e, item) => this.onClickFunction(e, item)}/>
                </div>
                <div>
                    {/*{this.state.item_data === ''? '' : this.state.item_data.name}*/}
                    <Detail data={this.state.item_data}/>
                </div>
            </div>

        )
    }
}

export default List