import { useState, useRef } from 'react';
import { Autocomplete, Loader } from '@mantine/core';
import { Select, TextInput } from '@mantine/core';
import classes from './ContainedInput.module.css';
export default function AddEmployeform() {
  const timeoutRef = useRef(-1);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleChange = (val) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length === 0 || val.includes('@')) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${val}@${provider}`));
      }, 1000);
    }
  };
  
  return (
    <>
    <Autocomplete
    value={value}
    data={data}
    onChange={handleChange}
    rightSection={loading ? <Loader size="1rem" /> : null}
    label="Employee Name"
    placeholder="John"
  />
    <Autocomplete
      value={value}
      data={data}
      onChange={handleChange}
      rightSection={loading ? <Loader size="1rem" /> : null}
      label="Employee Email"
      placeholder="john@coapps.in"
    />
    <Autocomplete
      value={value}
      data={data}
      onChange={handleChange}
      rightSection={loading ? <Loader size="1rem" /> : null}
      label="Contact Number"
      placeholder="phone number"
    />
      <TextInput label="Address" placeholder="15329 Huston 21st" className='mt-4' classNames={classes} />
      <Select
        mt="md"
        comboboxProps={{ withinPortal: true }}
        data={['Marketing', 'Designing', 'Development', 'Testing']}
        placeholder="Pick one"
        label="Your favorite library/framework"
        classNames={classes}
      />
    </>
  );
}
    
    

