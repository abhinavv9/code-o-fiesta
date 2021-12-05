import React, { useState } from 'react'

const Validator = (email, phone) =>  {
        let result = true;
        const [error, setError] = useState()
      
        if (email)  {
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          result = re.test(String(email).toLowerCase());
          if (!result) setError("Invalid Email address");
        }
        return result;
      }

export default Validator
