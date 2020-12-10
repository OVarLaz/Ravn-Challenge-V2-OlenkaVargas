import React, { Component }  from 'react';
import './list.css';
import {useQuery} from "@apollo/client";
import {GET_ALL_PEOPLE} from "../../api/query";



function AllPeople() {
    const { loading, error, data } = useQuery(GET_ALL_PEOPLE);
    if (loading) return <p className="Loading">Loading...</p>;
    if (error) return <p className="ErrorData">Failed to Load Data</p>;

    return data.allPeople.people.map((item, index) => (
        <div key={item.id}>
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

    render(){
        return (
            <div className="ListView">
                    <AllPeople />
            </div>
        )
    }
}

export default List