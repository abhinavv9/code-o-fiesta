/* eslint-disable no-useless-escape */
export const ValidateEmail = (email) =>  {
  var result = false
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(email) && (email.indexOf("@akgec.ac.in", email.length - "@akgec.ac.in".length) !== -1)){
      //Email valid. Procees to test if it's from the right domain (Second argument is to check that the string ENDS with this domain, and that it doesn't just contain it)
      result = true
  }
  return result;
}

export const ValidatePhone = (phone) => {
    var exp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phone.value.match(exp)) {
      return true;
    }
    else {
      return false;
    }
}
