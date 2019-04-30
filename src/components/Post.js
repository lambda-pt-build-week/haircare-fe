import React, { Component } from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import PostFooter from "./PostFooter";

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

  render() {
    return (
      <div
        onMouseEnter={e => this.setState({ hover: true })}
        onMouseLeave={e => this.setState({ hover: false })}
        style={{
          gridRowEnd: `span ${this.state.spans}`
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

export default Post;

const PostImage = styled.img`
  //max-width: 300px;
  width: 32vw;
  @media (max-width: 500px) {
    width: 90vw;
  }
`;

const FooterWrapper = styled.div`
  margin: -30px auto;
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