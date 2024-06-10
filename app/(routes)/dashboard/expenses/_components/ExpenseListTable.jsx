import { Trash2 } from 'lucide-react';
import React from 'react';
import { db } from '../../../../../utils/dbConfig';
import { Expenses } from '../../../../../utils/schema';
import { eq } from 'drizzle-orm';
import { toast } from 'sonner';

function ExpenseListTable({ expensesList, refreshData }) {
  const deleteExpense = async (expense) => {
    try {
      const result = await db
        .delete(Expenses)
        .where(eq(Expenses.id, expense.id))
        .returning();

      if (result.length > 0) {
        toast('Expense Deleted!');
        refreshData();
      } else {
        toast('Error deleting expense!');
      }
    } catch (error) {
      toast('An error occurred while deleting the expense.');
      console.error(error);
    }
  };

  return (
    <div className='mt-3'>
      <h2 className='font-bold text-lg'>Latest Expenses</h2>
      <div className='grid grid-cols-4 bg-slate-200 p-2 mt-3'>
        <h2 className='font-bold'>Name</h2>
        <h2 className='font-bold'>Amount</h2>
        <h2 className='font-bold'>Date</h2>
        <h2 className='font-bold'>Action</h2>
      </div>
      {expensesList?.map((expense) => (
        <div key={expense.id} className='grid grid-cols-4 bg-slate-50 p-2 gap-8'>
          <h2>{expense.name}</h2>
          <h2>{expense.amount}</h2>
          <h2>{new Date(expense.createdAt).toLocaleDateString()}</h2>
          <h2>
            <Trash2
              className='text-red-600 cursor-pointer mx-6'
              onClick={() => deleteExpense(expense)}
            />
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ExpenseListTable;
