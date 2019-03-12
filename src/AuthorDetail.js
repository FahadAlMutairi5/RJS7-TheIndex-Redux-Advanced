import React, { Component } from "react";

// Components
import BookTable from "./BookTable";
import Loading from "./Loading";
import {connect} from "react-redux";
import * as indexAction from '././store/actions/index';



class AuthorDetail extends Component {
  componentDidMount() {
    this.getAuthor();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.authorID !== this.props.match.params.authorID) {
      this.getAuthor();
    }
  }

  getAuthor = () => {
    const authorID = this.props.match.params.authorID;
    this.props.showAuthorDetail(authorID)
  };

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      const author = this.props.author;
      const authorName = `${author.first_name} ${author.last_name}`;
      return (
        <div className="author">
          <div>
            <h3>{authorName}</h3>
            <img
              src={author.imageUrl}
              className="img-thumbnail img-fluid"
              alt={authorName}
            />
          </div>
          <BookTable books={author.books} />
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showAuthorDetail:(authorAd) => dispatch(indexAction.fetchAuthorDetail(authorAd)),  
  };
};
const mapStateToProps = state => {
    return {
      author:state.author.author,
      loading:state.author.loading,
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(AuthorDetail);
