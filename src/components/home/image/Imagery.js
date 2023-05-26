import React from 'react';

const Imagery = ({ id, label, imageUrl }) => {
  return (
<>
      <img src={imageUrl} alt={label} />
      <p>{label}</p>
     
</>

  );
};

export default Imagery;
