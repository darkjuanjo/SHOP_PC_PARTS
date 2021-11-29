import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import Auth from '../../utils/auth';
import profilePic from './profile-blank.jpg'
import OrderHistory from '../OrderHistory'

const Profile = (props) => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam }
  });

  const {cartItems} = props;
  const user = data?.user || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  function logout() {
    Auth.logout();
  }
  return (
    <div>
      <div className="flex-row mb-3">
        <img className='small' src={profilePic} alt=""></img>
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          <ul>
            <li>User: {user.username}</li>
            <li>Email: {data.user.email}</li>
            {data.user.orders.map(order => (
              <li>{order._id}</li>
            ))}
          </ul>
        </h2>
        <button className="logoutBtn" onClick={logout}>Log Out</button>
      </div>
      <div className="flex-row mb-3">
            <OrderHistory cartItems={cartItems} ></OrderHistory>
      </div>
    </div>
  );
};

export default Profile;