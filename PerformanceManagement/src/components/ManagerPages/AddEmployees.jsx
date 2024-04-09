import { useState } from 'react';
import { Button } from '@mantine/core';
import AddEmployeform from './AddEmployeform';
export default function AddEmployees() {
    const [showForm, setShowForm] = useState(false);

    const handleAddEmployeeClick = () => {
        setShowForm(true);
    }

  

    return (
        <div>
            <Button variant="filled" size="lg" className='mt-4 ml-6' onClick={handleAddEmployeeClick}>
                Add Employee
            </Button>
            {showForm && (
               <>
               <AddEmployeform/>
               </>
            )}
        </div>
    );
}
