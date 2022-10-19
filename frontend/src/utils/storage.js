const saveToLocale = ({ email, userID, key }) => {
  let data = {
    email: email,
    userID: userID,
  };
  localStorage.setItem(key, JSON.stringify(data));
};

const getFromLocale = (key) => {
  let data = localStorage.getItem(key);
  if (data) {
    let res = JSON.parse(data);
    return res;
  }
  return null;
};

const clearLocale = (key) =>{
  localStorage.removeItem(key)
}

module.exports.saveToLocale = saveToLocale;
module.exports.getFromLocale = getFromLocale;
module.exports.clearLocale = clearLocale;
