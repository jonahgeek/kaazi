// import { config } from "config";
import { authHeader } from "../_helpers";
import config from "../config";
export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
};

function login(userdetail, password) {
  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userdetail, password }),
  };

  return fetch(`${config.API_URL}/user/login`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      console.log({ user });
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${config.API_URL}/user`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${config.API_URL}/user/${id}`, requestOptions).then(
    handleResponse
  );
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return fetch(`${config.API_URL}/user/signup`, requestOptions).then(
    handleResponse
  );
}

function update(user) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch(`${config.API_URL}/user/${user.id}`, requestOptions).then(
    handleResponse
  );
}

function _delete(id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };

  return fetch(`${config.API_URL}/user/${id}`, requestOptions)
    .then(handleResponse)
    .then(getAll());
}

function handleResponse(response) {
  console.log(response);
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        window.location.reload(true);
        console.log("Something went wrong");
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
