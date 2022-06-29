import React from 'react';

const Helmet = (props) => {
    document.title = props.title;
    return (
      // <div className='w-100 bg-black'>{props.children}</div>
      <>
        {props.children}
      </>
    )
}

export default Helmet;