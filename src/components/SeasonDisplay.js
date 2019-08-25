import React from 'react'

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    // Apr - Sep
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    // Oct - Mar
    return latitude > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const text = season === 'winter' ? "Brr, it's chilly!" : "Let's hit the beach!";
  const icon = season === 'winter' ? 'snowflake' : 'sun';

  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  )
}

export default SeasonDisplay
