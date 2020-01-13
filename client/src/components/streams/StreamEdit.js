import React from 'react';
import { connect } from "react-redux";
import { fetchStream,editStream }from "../../actions";
import StreamForm from "./streamForm";
import _ from "lodash";

class StreamEdit extends React.Component{
componentDidMount(){
this.props.fetchStream(this.props.match.params.id);
}
onSubmit=(formValues)=>{
return this.props.editStream(this.props.match.params.id,formValues);
}
render(){
    if(!this.props.stream){
        return null;
    }
    return(
        <div>
         <h3>
             Edit The Stream
         </h3>
         <StreamForm
         initialValues={_.pick(this.props.stream,"title","description")} 
         onSubmit={this.onSubmit}/>
        </div>
    );
}


}
const getState=(state,ownProps)=>{
 return {stream:state.streams[ownProps.match.params.id]}
}

export default connect(getState,{fetchStream,editStream})(StreamEdit);