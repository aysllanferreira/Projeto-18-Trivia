/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';

function ModalSettings({ settingsOpen, setSettingsOpen }) {
  return (
    <div className="Login__settings">

      <div className="Login__settings__content">
        <div
          className="Login__settings__content__closeBtn"
          onClick={ () => setSettingsOpen(!settingsOpen) }
        >
          <AiOutlineClose />
        </div>

        <div className="Login__settings__content__all">
          <div>
            <h1>Settings</h1>
          </div>

          <div className="Login__settings__content__all__items">
            <div className="Login__settings__content__all__items__category">
              <label htmlFor="category">
                Category
                {' '}
              </label>
              <select name="category" id="category">
                <option value="any">Any Category</option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musicals &amp; Theatres</option>
              </select>

            </div>
            <div className="Login__settings__content__all__items__difficulty">
              <label htmlFor="difficulty">
                Difficulty
                {' '}
              </label>
              <select name="difficulty" id="difficulty">
                <option value="any">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div className="Login__settings__content__all__items__type">
              <label htmlFor="type">
                Type
                {' '}
              </label>
              <select name="type" id="type">
                <option value="any">Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True / False</option>
              </select>
            </div>

            <div className="Login__settings__content__all__items__submit">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalSettings.propTypes = {
  settingsOpen: PropTypes.bool.isRequired,
  setSettingsOpen: PropTypes.func.isRequired,
};

export default ModalSettings;
