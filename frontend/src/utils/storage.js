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

module.exports.saveToLocale = saveToLocale;
module.exports.getFromLocale = getFromLocale;
