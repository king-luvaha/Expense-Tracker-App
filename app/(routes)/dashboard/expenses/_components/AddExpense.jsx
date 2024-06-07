import React, { useState } from 'react'
import { Input } from '../../budgets/_components/Input/input'
import { Button } from '../../budgets/_components/Button/button';
import { db } from '../../../../../utils/dbConfig';
import { Budgets, Expenses } from '../../../../../utils/schema';
import { toast } from 'sonner';
import moment from 'moment';
import { Loader } from 'lucide-react';

function AddExpense({budgetId,user,refreshData}) {

    const [name,setName] = useState();
    const [amount,setAmount] = useState();
    const [loading,setLoading ] = useState(false);

    // Used to Add New Expense
    const addNewExpense = async() => {
        setLoading(true)
        const result = await db.insert(Expenses).values({
            name:name,
            amount:amount,
            budgetId:budgetId,
            createdAt:moment().format('DD/MM/yyy')
        }).returning({insertedId:Budgets.id});

        setAmount('');
        setName('');
        if(result)
        {
            setLoading(false)
            refreshData()
            toast('New Added Expense!')
        }
        setLoading(false);
    }
  return (
    <div className='border p-5 rounded-lg'>
        <h2 className='font-bold text-lg'>Add Expense</h2>
        <div className='mt-2'>
            <h2 className='text-black font-medium my-1'>Expense Name</h2>
            <Input placeholder="e.g. Fare"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
        </div>

        <div className='mt-2'>
            <h2 className='text-black font-medium my-1'>Expense Amount</h2>
            <Input placeholder="e.g. 13000"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            />
        </div>

        <Button
        disabled={!(name&&amount)|| loading} 
        onClick={()=>addNewExpense()} 
        className="mt-3 w-full">
            {
                loading ?
                <Loader className='animate-spin'/> : "Add New Expense"
            }
        </Button>
    </div>
  )
}

export default AddExpense