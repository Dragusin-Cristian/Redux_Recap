import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIcecream } from '../redux';

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Number of items: {props.itemCount}</h2>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
};

// second argument (this approach) is also used for another usecase:
// pass an index to owState and select that particular item from a list within the global state
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIcecream

  return {
    itemCount: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const buyItem = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIcecream())

  return {
    buyItem
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
// if ypu want to connect only the mapDispatchToProps functions:
// export default connect(null, mapDispatchToProps)(ItemContainer);