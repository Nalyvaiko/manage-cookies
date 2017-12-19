import setCookie from './setCookie';

function deleteCookie (
  name
) {
  setCookie(name, "", {
    expires: -1
  })
}

export default deleteCookie;
