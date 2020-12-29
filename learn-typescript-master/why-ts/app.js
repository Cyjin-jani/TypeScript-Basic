// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 * 
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}
// console.log를 찍기 전까지 반환 결과를 알 수 없다.
// console.log(fetchUser());
fetchUser().then(function (response) {
  response.adress
})

function startApp() {
  // axios
  //   .get(url)
  fetchUser() 
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
startApp();
