import React from "react";
import { useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import Auth from '../../utils/auth';

const Profile = () => {
<<<<<<< HEAD
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam }
  });
  const user = data?.user || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  function logout() {
    Auth.logout();
  }

  console.log(data)
  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          <ul>
            <li>User: {data.user.username}'s profile.</li>
=======
    const { username: userParam } = useParams();
     console.log(userParam);
    const { loading, data } = useQuery(QUERY_USER, {
      variables: { username: userParam }
    });
    console.log(data);
    const user = data?.user || {};
    if (loading) {
      return <div>Loading...</div>;
    }
    function logout(){
      Auth.logout();
    }
    return (
      <div>
        <div className="flex-row mb-3">
          <h2 className="bg-dark text-secondary p-3 display-inline-block">
            <ul>
            <li>User: {user.username}'s profile.</li>
>>>>>>> 815cef0e6ca0b18a73b3fc190b14dd3f26433452
            <li>Email: {data.user.email}</li>
            {data.user.orders.map(order => (
              <li>{order._id}</li>
            ))}
          </ul>
        </h2>
        <button onClick={logout}>Log Out</button>
      </div>
    </div>
  );
};

export default Profile;