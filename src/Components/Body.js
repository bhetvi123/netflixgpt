import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import {addItem,removeItem} from '../redux-slice/userSlice';
const Body = () => {
  const dispatch= useDispatch();

  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    }
  ]);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(addItem({ uid: user.uid, email: user.email, displayName: user.displayName }));
    } else {
      dispatch(removeItem());
    }
  });

  return () => unsubscribe();
}, [dispatch]);
  

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
