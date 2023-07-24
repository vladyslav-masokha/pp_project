import React from 'react';
import './MainPage.scss';
import {Link} from 'react-router-dom';

/**
 * Main page
 * hello user block
 * @return {string}
 */
function MainPage() {
  return (
    <section className='main'>
      <div className="wrapper">
        <div className="mainBody">
          <h1 className='helUser'>Вітаю!</h1>

          <h3 className='aboutUser'>
              Це персональна сторінка користувача{' '}
            <span>Vladyslav Masokha</span>
          </h3>

          <div className="deteilsUser">
            <p>Для детальної інформації:</p>

            <button type='button'>
              <Link to='/admin-cv'>Дізнатися більше</Link>
            </button>
          </div>


        </div>
      </div>
    </section>
  );
}

export default MainPage;
