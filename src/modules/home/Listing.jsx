import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as listActions from "./ListActions";
import { useEffect } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const styles = {
  header: {
    display: "flex",
    width: "100%",
    padding: "20px",
    flexDirection: "column",
    alignItems: "center"
  },
  container: {
    width: "100%",
    height: "100%"
  },
  centralize: {
    margin: "auto",
    paddingTop: "10%",
    paddingLeft: "45%",
    width: "50%"
  },
  row: {
    display: "flex",
    borderBottom: "1px solid",
    padding: "5px"
  },
  column: {
    flex: 1
  },
  action: {
    margin: "15px"
  }
};

const List = ({ listAction, edit, listingInProgress, posts }) => {
  useEffect(() => {
    if (!posts) {
      listAction();
    }
  }, []);
  return (
    <div style={styles.container}>
      <div style={styles.header}>Posts</div>
      {listingInProgress ? <div style={styles.centralize}><FontAwesomeIcon icon={faSpinner} spin size="6x" /></div> : ""}
      {posts ? posts.map(post => {
        return <div style={styles.row} key={post.id}>
          <div style={styles.column}>{post.title}</div>
          <div style={styles.column}>{post.body}</div>
          <div style={styles.column}><button style={styles.action} onClick={() => edit(post.id)}>Edit</button></div>
        </div>
      }) : ""}
    </div>
  )
};

List.propTypes = {
  listingInProgress: PropTypes.bool,
  posts: PropTypes.arrayOf(PropTypes.object),
  listAction: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return ({
    posts: state.list.values.posts,
    listingInProgress: state.list.values.listingInProgress
  });
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...listActions }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(List);
