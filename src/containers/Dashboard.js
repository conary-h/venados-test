import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Dashboard({ children }) {
  const dispatch = useDispatch();
  /* useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAllExercises());
  }); */

  return (
    <div id="dashboard" className="">
      {children}
    </div>
  );
}
