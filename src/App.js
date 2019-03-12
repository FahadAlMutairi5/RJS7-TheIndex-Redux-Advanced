import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
import {connect} from "react-redux";
import * as indexAction from '././store/actions/index';
import Loading from "./Loading";

class App extends Component {

  componentDidMount(){
    if (this.props.authors.length < 1)
      return this.props.showAuthor();
  };

  getView = () => {
    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <Switch>
          <Redirect exact from="/" to="/authors" />
          <Route path="/authors/:authorID" component={AuthorDetail} />
          <Route
            path="/authors/"
            render={props => (
              <AuthorsList {...props} authors={this.props.filteredAuthors} />
            )}
          />
        </Switch>
      );
    }
  };


  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar/>
          </div>
          <div className="content col-10">{this.getView()}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showAuthor:() => dispatch(indexAction.fetchAuthors()),  
  };
};
const mapStateToProps = state => {
    return {
      authors:state.authors.authors,
      filteredAuthors:state.authors.filteredAuthors,
      loading:state.authors.loading,
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
