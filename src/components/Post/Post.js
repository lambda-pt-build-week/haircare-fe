import React, { Component } from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Post extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
    this.imageRef.current.addEventListener("onresize", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  handleClick = e => {
    this.props.history.push("/post");
  };

  render() {
    return (
      <div
        onClick={e => this.handleClick(e)}
        onMouseEnter={e => this.setState({ hover: true })}
        onMouseLeave={e => this.setState({ hover: false })}
        style={{
          gridRowEnd: `span ${this.state.spans}`,
          cursor: "pointer"
        }}
      >
        <PostImage ref={this.imageRef} src={this.props.imageURL} alt="image" />
        {this.state.hover && (
          <FooterWrapper>
            <div>
              <FaHeart /> {this.props.imageLikes}
            </div>
            <div>{this.props.username}</div>
          </FooterWrapper>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Post);

const PostImage = styled.img`
  //max-width: 300px;
  width: 24vw;
  @media (max-width: 500px) {
    width: 48vw;
  }
`;

const FooterWrapper = styled.div`
  margin: -35px auto;
  justify-content: space-between;
  display: flex;
  color: white;
  font-size: 16px;
  font-weight: bolder;
  width: 90%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  position: relative;
  padding: 5px;
  z-index: 10;
`;