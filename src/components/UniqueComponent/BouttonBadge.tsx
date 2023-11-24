import { Button } from '@mui/material';
import React, { FormEvent, useEffect, useState } from 'react';
import { Employee } from '../../dto/employee';
import axios from 'axios';

const { baseUri } = require("../../baseUri")
const path = "/employee"

const ButtonBadge = () => {
  const [badge, setEmployeeBadge] = useState<string>();
  const [status, setStatus] = useState('absent');

  const check = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${badge}`,
        'zoo':"649b4b3cb65880740cbc7019"
      }
      const response = await axios.get(encodeURI(baseUri + path + "/check"), { headers: headers })
      console.log(response.data)
    } catch (err: unknown) {
      console.log(err)
    }
  }

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setEmployeeBadge(event.currentTarget.value)
  }

  const handleClick = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'absent') {
      await check().then(() => { setStatus('present'); })
    } else {
      await check().then(() => { setStatus('absent'); })
    }
  };

  let bgColor, textColor, width, height;

  if (status === 'absent') {
    bgColor = 'bg-red-500';
    textColor = 'text-white';
    width = 'w-40';
    height = 'h-20';
  } else if (status === 'present') {
    bgColor = 'bg-green-500';
    textColor = 'text-white';
    width = 'w-40';
    height = 'h-20';
  } else {
    bgColor = 'bg-red-500';
    textColor = 'text-white';
  }

  return (
    <div className="card-body items-center text-center rounded-sm">
      <form onSubmit={handleClick}>
        <input type="text" placeholder="Badge employee" className="input input-bordered w-full max-w-xs"
          value={badge} onChange={handleChange} />

        <button
          className={` ${bgColor} hover:${bgColor} ${textColor} ${width} ${height} font-bold py-2 px-4 rounded`}
        >
          {status === 'absent' ? 'Absent' : status === 'present' ? 'Présent' : 'Rouge'}
        </button>
      </form>
    </div >
  );
};

export default ButtonBadge;
