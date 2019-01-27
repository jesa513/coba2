import React, { Component} from 'react';


class ContentBertasbih extends Component
{
  render()
  {
    return(
       <center style={{ color: 'orange'}}>

           <h1>{this.props.contentHeader}</h1>
                {this.props.children}
       </center>


    )

  }


}
export default ContentBertasbih;