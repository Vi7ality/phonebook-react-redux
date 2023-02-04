import { Home } from "pages/Home";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "redux/auth/authOperations";
import { selectIsRefreshing } from "redux/auth/authSelectors";

import { SharedLayout } from "./SharedLayout/SharedLayout";

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
      useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? <p>Refreshing user...</p> : (
  //   <div
  //     style={{
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101',
  //       listStyle: null,
  //     }}
  //   >
  // <Phonebook></Phonebook>
  //   </div>

    <Routes>
      <Route path="/" element={<SharedLayout />} end>
        <Route index element={<Home />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login/>}></Route>
      </Route>
    </Routes>
  );
};

