import React, { useState } from 'react'
import { Input } from '../../budgets/_components/Input/input'
import { Button } from '../../budgets/_components/Button/button';
import { db } from '../../../../../utils/dbConfig';
import { Budgets, Expenses } from '../../../../../utils/schema';
import { toast } from 'sonner';
import moment from 'moment';

function AddExpense({budgetId,user,refreshData}) {

    const [name,setName] = useState();
    const [amount,setAmount] = useState();

    const addNewExpense = async() => {
        const result = await db.insert(Expenses).values({
            name:name,
            amount:amount,
            budgetId:budgetId,
            createdAt:moment().format('DD/MM/yyy')
        }).returning({insertedId:Budgets.id});

        if(result)
        {
            refreshData()
            toast('New Added Expense!')
        }
    }
  return (
    <div className='border p-5 rounded-lg'>
        <h2 className='font-bold text-lg'>Add Expense</h2>
        <div className='mt-2'>
            <h2 className='text-black font-medium my-1'>Expense Name</h2>
            <Input placeholder="e.g. Fare"
            onChange={(e)=>setName(e.target.value)}
            />
        </div>

        <div className='mt-2'>
            <h2 className='text-black font-medium my-1'>Expense Amount</h2>
            <Input placeholder="e.g. 13000"
            onChange={(e)=>setAmount(e.target.value)}
            />
        </div>

        <Button
        disabled={!(name&&amount)}
        onClick={()=>addNewExpense()} 
        className="mt-3 w-full">
            Add New Expense
        </Button>
    </div>
  )
}

export default AddExpense