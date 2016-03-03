import React, { PropTypes } from 'react'

export default class Countdown extends React.Component {
  
  constructor(props) {
    super(props)
  }
  
  render() {
    let myOld = 33
    let avgOld = 70

    return (
      <div>
        <p>你目前的是 {myOld} 歲</p>
        <p>平均壽命是 {avgOld} 歲</p>
        <p>你還有 {avgOld - myOld} 年 的時間</p>
        <p>可以改變世界</p>
      </div>
    )
  }
}

/*
  optionalArray  : PropTypes.array,
  optionalBool   : PropTypes.bool,
  optionalFunc   : PropTypes.func,
  optionalNumber : PropTypes.number,
  optionalObject : PropTypes.object,
  optionalString : PropTypes.string,
  requiredString : PropTypes.string.isRequired,
*/
Countdown.propTypes = {

}

Countdown.defaultProps = {
  
}
