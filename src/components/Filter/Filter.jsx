import React from 'react'
import PropTypes from 'prop-types';
import css from './Filter.module.css';
 
export function Filter({handleChange, value}) {
   return (
       <div>
       <input
         className={css.contacts__input}
         type="text" value={value}
         onChange={handleChange}
         name="filter"
         placeholder='Search...' />
     </div>
   )
}
 
Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
 