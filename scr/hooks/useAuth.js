// import React, {useEffect, useState} from 'react';
// import {firebase} from '../config/firebase';
// import {getAuth, onAuthStateChanged, User} from 'firebase/auth';

// const auth = getAuth();
// const useAuth = () => {
//   const [user, setUser] = useState();

//   useEffect(() => {
//     const unsubscribeFromAuthStateChanged = firebase
//       .auth()
//       .onAuthStateChanged(auth, user => {
//         if (user) {
//           setUser(user);
//         } else {
//           setUser(undefined);
//         }
//       });
//     return unsubscribeFromAuthStateChanged;
//   }, []);

//   return user;
// };

// export default useAuth;
