import React,{Component} from 'react';

class LeftHome extends Component{
  render(){
    return(
    <div style={{display:"flex",flexDirection:"column",width:"20%",backgroundColor:"silver",alignContent:"stretch"}}>

        <div style={{height:"200%",borderRight:"1px silver solid"}}>
          <br/>
          <br/><br/>
          <ul style={{ listStyleType: "none",margin: 0,width:"90%",height:"60%"}}>
            <li className="leftlist">Bills</li>
            <li className="leftlist">Dashboard</li>
          </ul>
      </div>
    </div>
    )
  }
}

export default LeftHome;
