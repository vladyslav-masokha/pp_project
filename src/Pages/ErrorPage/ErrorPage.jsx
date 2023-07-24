import React from 'react';
import './ErrorPage.scss';

/**
 * Error page
 * @return {string}
 */
function Error() {
  return (
    <div className='error'>
      <div className='wrapper'>
        <div className='errorBody'>
          <h1>404!</h1>
          <h3>Сторінку не знайдено :(</h3>
        </div>
      </div>
    </div>
  );
}

export default Error;
