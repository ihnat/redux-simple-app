import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';



class BookDetails extends Component {
  render() {
    if (!this.props.book) {
      return (
        <div>Chose component</div>
      )
    }
    return (
      <div>
        <h2>BookDetails:</h2>
        <span>{this.props.book.title}</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.selectedBook
  }
}



export default connect(mapStateToProps)(BookDetails);
