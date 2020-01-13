import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';
import { Link } from "react-router-dom";

class StreamList extends React.Component {
    state={streams:[]};
    componentDidMount() {
        this.props.fetchStreams();
    }
    render() {
        return(
    <div>
        <h2>Streams</h2>
    <div className="ui celled list">{this.renderList()}</div>
    {this.renderCreate()}
    </div>
        );
    }
    renderCreate=()=>{
    if(this.props.IsSignedIn){
      return(
          <div style={{textAlign:"right"}}>
              <Link to="/streams/new" className="ui button primary">
             Create Stream
              </Link>
          </div>
      );
    };
    }
    renderAdmin=(stream)=>{
      if(stream.userId===this.props.currentUserId){
       return(
           <div className="right floated content">
               <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                   Edit
               </Link>
               <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                   Delete
               </Link>
           </div>
       );
      };

    }
    renderList=()=>{
       return  this.props.streams.map(stream=>{
         return(
             <div className="item" key={stream.id}>
                 {this.renderAdmin(stream)}
                 <i className="large middle aligned icon camera" style={{color:"white"}}/>
                <div className="content">
                 <Link to={`/streams/${stream.id}`} className="header">
                 {stream.title}
                 </Link>
         <div className="description" style={{color:"white"}}>{stream.description}</div>
                </div>
             </div>
         );
        });
    }
    };
    const getState =(state)=>{
      return {
          streams:Object.values(state.streams),
          currentUserId:state.auth.userId,
          IsSignedIn:state.auth.isSignedIn
        };
      
    };


export default connect(getState, {fetchStreams})(StreamList);