'use client'

import { useState } from "react";
import axios from 'axios'
import { SignIn, UserButton } from '@stackframe/stack'

interface Car {
  brand: string;
  model: string;
}

export default function Home() {
  const [data, setData] = useState<Car>({
    brand: "",
    model: "",
  });

  const submit = async () => {
    try {
      const response = await axios.post('/api/cars', {
        brand: data.brand,
        model: data.model,
      });

      console.log('Car created:', response.data);
      setData({ brand: "", model: "" });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error:', error.response?.data);
      } else {
        console.error('Failed to create car:', error);
      }
    }
  }

  return (
    <div>
      <input type="text" placeholder="Enter Brand..." value={data.brand} onChange={(e) => setData((prev) => ({ ...prev, brand: e.target.value }))} />
      <input type="text" placeholder="Enter Model..." value={data.model} onChange={(e) => setData((prev) => ({ ...prev, model: e.target.value }))} />
      <button onClick={submit}>Submit</button>
      {/* If signed out → show SignIn */}
      <SignIn />

      {/* If signed in → show UserButton (avatar, logout, profile menu) */}
      <UserButton />
    </div>
  );
}
