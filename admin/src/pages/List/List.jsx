import React, { useEffect, useState } from 'react'
import './List.css';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'font-awesome/css/font-awesome.min.css';

const List = ({ url }) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setList(response.data.data)
    }
    else {
      toast.error("Error")
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error("Error")
    }
  }

  const editFood = (foodId) => {
    // Implement logic to edit the food item
    toast.info("Edit functionality will be implemented.");
    console.log("Edit food item with ID:", foodId);
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list add flex-col'>
      <p>ALL   PRODUCTS   LIST</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <div className="action-buttons">
                <p onClick={() => editFood(item._id)} className='cursor'>
                  <i className="fa fa-edit"></i>
                </p>
                <p onClick={() => removeFood(item._id)} className='cursor'>
                  <i className="fa fa-trash"></i>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List;
