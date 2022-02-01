import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
    set(token) {axios.defaults.headers.common.Authorization = `Bearer ${token}`},
    unset() {axios.defaults.headers.common.Authorization = ``}
}

export async function fetchAllContacts() {
    const { data } = await axios.get('/contacts');
    return data
}

export async function addNewContact(newContact) {
    const { data } = await axios.post('/contacts', newContact);
    return data
}

export async function deleteContactById(id) {
    await axios.delete(`/contacts/${id}`);
}

export async function signUpService(credentials) {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data
}

export async function logInService(credentials) {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
}

export async function logOutService() {
    await axios.post('/users/logout') 
    token.unset();
}

export async function fetchCurrentUserService(persistedToken) {
    token.set(persistedToken);
    const { data } = await axios.get('/users/current');
    return data;
}