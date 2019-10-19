import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../api/posts';
import renderHTML from 'react-render-html';

class Cells extends Component {

  render() {
    return (
      <tbody>
        {this.props.posts.map( (post, index) => (
          <tr key={post._id}>
            <td>{renderHTML(post.description1)}</td>
            <td>{renderHTML(post.description2)}</td>
          </tr>
        ))}
      </tbody>
    )
  }
}

class PostsList extends Component {

  render() {
    let content;
    let isLoading = (this.props.posts == undefined);
    if (isLoading) {
      content = "Loading";
    } else {
      content = (
        <div className="">
          <h2>Posts List</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Description 1</th>
                <th scope="col">Description 2</th>
              </tr>
            </thead>
            <Cells 
              posts={this.props.posts} 
            />
          </table>
        </div>
      )
    }
    return content;
  }
}

export default withTracker(() => {
  let posts = Posts.find({}, {sort: {description1:1 }}).fetch();
  return {
    posts: posts,
  }
})(PostsList);