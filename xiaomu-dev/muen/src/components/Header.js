import React, { Component } from 'react';
import {withRouter} from "dva/router";
class Header extends Component {
    static defaultProps = {
        title: "沫恩muen",
        isBack: false,
        pushVote:"",
        push:"",
        Statistics:""
    };
    render() {
        let { title, isBack,pushVote,push,Statistics} = this.props;
        return (
            <header>
               {isBack ? <b onClick={()=>{this.props.history.go(-1)}}>&lt;</b> : ""}
               {title}
              {pushVote?<span onClick={()=>{this.props.history.push('/pushVote')}} style={{fontSize:16}}>{pushVote}</span>
              : <span style={{fontSize:16}} onClick={()=>{}}>{pushVote}</span>
              }
              {push?<span onClick={()=>{this.props.history.push('/fabu')}}>{push}</span>:""}
              {Statistics?<span>{Statistics}</span>:""}
            </header>
        )
    }
}
export default withRouter(Header)
