import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookList extends Component {
  renderList() {
    this.props.books.map((book) => {
      console.log(book);
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  };
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of booklist
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
