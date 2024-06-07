import axios from 'axios';

// item
export const getItemDetail = async (iid) => {
  try {
    const response = await axios.get(`https://52.79.234.96:8090/ft/item/detail/${iid}/em`);
    return response.data;
  } catch (error) {
    console.log('Error fetching item detail:', error);
    throw error;
  }
};

export const updateItem = async (requestData) => {
  try {
    const response = await axios.post(`https://52.79.234.96:8090/ft/item/update`, requestData);
    return response.data;
  } catch (error) {
    console.log('Error updating item:', error);
    throw error;
  }
};

export const insertItem = async (requestData) => {
  try {
    const response = await axios.post('https://52.79.234.96:8090/ft/item/insert', requestData);
    return response.data;
  } catch (error) {
    console.log('Error inserting item:', error);
    throw error;
  }
};

export const fetchItemData = async (iid, currentUserEmail) => {
  try {
    const userEmail = currentUserEmail || 'em';
    const response = await axios.get(`https://52.79.234.96:8090/ft/item/detail/${iid}/${userEmail}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchItemListAPI = async () => {
  return axios.get('https://52.79.234.96:8090/ft/item/list')
    .then(res => res.data)
    .catch(err => {
      console.log('Error fetching item list:', err);
      throw err;
    });
};

export const deletedItem = async (iid) => {
  try {
    const response = await axios.delete(`https://52.79.234.96:8090/ft/item/delete/${iid}`);
    return response;
  } catch (error) {
    console.log('Error deleting item:', error);
    throw error;
  }
};

export const addItemSale = async (formData) => {
  try {
    const response = await axios.post('https://52.79.234.96:8090/ft/item/sale', formData);
    return response.data;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
};