import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as listActions from "./ListActions";
import { useState, useEffect } from 'react';

const Editor = (props) => {
  console.log(props)
  console.log(props.match.params.id)

  const [title, setTitle] = useState(props.post ? props.post.title : '');
  const [body, setBody] = useState(props.post ? props.post.body : '');

  useEffect(() => {
    props.getPostById(parseInt(props.match.params.id))
    if (props.post) {
      setTitle(props.post.title)
      setBody(props.post.body)
    }
    if (props.updated) {
      props.list();
    }
  }, [props]);

  if (!props.post) {
    return ''
  };

  return (props.post ? <div className="container">
      <h2>Edit</h2>
       <div className="label_css"><label >Title</label></div>
            <div> <textarea value={title} onChange={(e) => setTitle(e.target.value)} /></div>
       <div  className="label_css" ><label >Body</label></div>
          <div> <textarea value={body} onChange={(e) => setBody(e.target.value)} /></div>
        <div className="center"> 
         <button  onClick={() => { props.updatePost({ id: props.post.id, title: title, body: body }) }}>Save</button>
         <button onClick={() => props.list()}>Cancel</button>
        </div>
  </div > : "")
};

Editor.propTypes = {
  getPostById: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  list: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log(state)
  return ({
    post: state.list.values.selectedPost,
    updated: state.list.values.updated
  });
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...listActions }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Editor);
