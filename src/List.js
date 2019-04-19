import React from "react";
import axios from "axios";
import Detail from "./Detail";


class List extends React.Component{
  constructor(props) {
    super(props);
    this.state = {list:[], detail:[], short_name:""}
  }

  componentDidMount() {
    axios
    .get("https://stream-restaurant-menu-svc.herokuapp.com/category")
    .then(res => {
      this.setState({list:res.data});
    })
    .catch(err => console.log(err));
  }

  handleClick = short_name => {
    axios
    .get(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${short_name}`)
    .then(res => {
      this.setState({detail: res.data, short_name: short_name});
    })
  }

  render() {
    return (
      <div>
        <h1>Menu Categories</h1>
        <div className="list">
          <ul>
            {this.state.list.map(item => {
              return <li key={item.id} onClick={()=>this.handleClick(item.short_name)}>{item.name}-({item.short_name})</li>
            })}
          </ul>
          <Detail detail={this.state.detail} short_name={this.state.short_name}></Detail>
        </div>
      </div>
    )
  }
}

export default List;