import React, { Component } from 'react';


class BlogList extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData=()=>{
        fetch('/users/')
            .then(data=>data.json())
            .then(response=>this.setState({data:response}));
    };

    render() {
        let userMap = this.state.data.map(
            (eachElement)=>{
                return( <h3 key={eachElement._id}>{eachElement.name}@{eachElement.email} </h3>)
            }
        );
        return (
            <div className="App">
                <p>Users</p>
                {userMap}
            </div>
        );
    }
}

export default BlogList;