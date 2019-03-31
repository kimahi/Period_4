const apiUrl = 'http://media.mw.metropolia.fi/wbma/';

const getAllMedia = () => {
  return fetch(apiUrl + "media/").then(response => {
    return response.json();
  }).then(json => {
    return Promise.all(json.map(pic => {
      return fetch(apiUrl + "media/" + pic.file_id).then(response => {
        return response.json();
      });
    })).then(pics => {
      console.log(pics);
      return pics;
    });
  });
};

const getSingleMedia = (id) => {
  console.log(apiUrl + "media/" + id);
  return fetch(apiUrl + "media/" + id).then(res => {
    return res.json();
  }).then(json => {
    console.log(json);
    return json;
  })
};

const register = (uname, pass, email, full) => {
  return checkIfUserNameExists(uname).then(
      res => {
        if (res.available === false) {
          alert("Username already in use");
        } else {
          return fetch(apiUrl + "users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "username": uname, "password": pass, "email": email, "full_name": full
            })
          })
          .then(resp => {
            return resp.json();
          }).then(data => {
            console.log(data);
            return data;
          })
        }
      })
};

const login = (uname, pass) => {
  return fetch(apiUrl + "login", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "username": uname, "password": pass
    })
  })
  .then(resp => {
    return resp.json();
  }).then(data => {
    return data})
};

const checkIfUserNameExists = (uname) => {
  return fetch(apiUrl + 'users/username/' + uname).then( res => {
    return res.json();
  }).then(json => {
    return json;
  })
};

export {getAllMedia, getSingleMedia, login, checkIfUserNameExists, register};