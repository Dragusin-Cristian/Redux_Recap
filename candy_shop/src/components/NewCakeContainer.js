import React, {useState} from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/index';

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h2>Number of cakes: {props.numOfCakes}</h2>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => props.buyCake(number)}>Buy {number} cake</button>
    </div>
  );
};


// because not the selectors way
const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // function that dispatches the action creator from redux
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);