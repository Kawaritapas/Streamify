import React from 'react';
import Modal from '../modal';
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component{

   componentDidMount=()=>{
  this.props.fetchStream(this.props.match.params.id);
   }
 onClick=()=>{
  return this.props.deleteStream(this.props.match.params.id);
 }

    actions =()=> (
   <React.Fragment>
<button onClick={this.onClick} className="ui button negative">Delete</button>   
<button onClick={()=>history.push("/")} className="ui button">Cancel</button>
     </React.Fragment>

    );

    renderContent=()=>{
        if(!this.props.stream){
            return "Are you sure you want to delete this stream"
        }else{
            return `Are you sure you want to delete the strem with title:${this.props.stream.title}` 
        }
    }
    render(){
    return(
        <div> 
                <Modal title="delete stream" 
                 content={this.renderContent()}
                 actions={this.actions()}
                 onDismiss={()=>history.push("/")}
                />
            </div>
    
    );
    }
}
const setState=(state,ownProps)=>{
   return {stream:state.streams[ownProps.match.params.id]};
}

export default connect(setState,{fetchStream,deleteStream})(StreamDelete);