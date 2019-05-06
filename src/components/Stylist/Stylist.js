import React, {Component} from 'react';
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchStylists } from '../../actions';

class Stylist extends Component {
  componentDidMount() {
   this.props.fetchStylists();
 }

 render() {
   const { stylists = [] } = this.props
   {console.log(stylists)}
   return (
     <StylistInfo>
      <h1>Schedule an appointment</h1>
      {stylists.map(stylist => {
        return (
          <div>
          <StylistImages key={stylist.id} src={stylist.profile_picture} />
          <div>{stylist.stylist_name}</div>
          <div>{stylist.location}</div>
          <button>Book Now</button>
          </div>

        )
      })}
     </StylistInfo>
   )
 }

}


const mapStateToProps = state => {
  console.log(state)
  return {
    stylists: state.stylistsReducer.stylists
  }
}

export default connect(mapStateToProps, { fetchStylists } )(Stylist);


const StylistInfo = styled.div`
margin: 0;
padding: 0;
background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(237,237,237,1) 100%);
  `;

const StylistImages = styled.img`
  height: auto;
  width: 15%;
`;
