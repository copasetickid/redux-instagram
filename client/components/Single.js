import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {

  render() {
    const { postId } = this.props.params;

    const index = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[index];
    const postComments = this.props.comments[postId] || [];

    return(
      <div className="single-photo">
        <Photo i={index} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props}/>
      </div>
    )
  }
}

export default Single;
