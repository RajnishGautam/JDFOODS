import React, { useEffect, useState } from 'react';
import './Users.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'font-awesome/css/font-awesome.min.css';

const Users = ({ url }) => {
  const [users, setUsers] = useState([]);

  // Fetch users from the API
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${url}/api/user/list`); // Correct API endpoint
      if (response.data.success) {
        setUsers(response.data.data);
      } else {
        toast.error("Error fetching users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to fetch users");
    }
  };

  // Remove a user from the system (requires backend logic for removing users)
  const removeUser = async (userId) => {
    try {
      const response = await axios.post(`${url}/api/user/remove`, { id: userId }); // Adjust API endpoint as needed
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchUsers();
      } else {
        toast.error("Error removing user");
      }
    } catch (error) {
      console.error("Error removing user:", error);
      toast.error("Failed to remove user");
    }
  };

  // Fetch users when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="users add flex-col">
      <p>ALL REGISTERED USERS</p>
      <div className="users-table">
        <div className="users-table-format title">
          <b>Name</b>
          <b>Email</b>
          <b>Action</b>
        </div>
        {users.map((user, index) => (
          <div key={index} className="users-table-format">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <div className="action-buttons">
              <p onClick={() => removeUser(user._id)} className="cursor">
                🗑️ {/* Delete symbol */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
