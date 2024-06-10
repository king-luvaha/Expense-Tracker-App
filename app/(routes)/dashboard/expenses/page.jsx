import React from 'react'
import ExpenseListTable from "./_components/ExpenseListTable"

function Expense() {
    return (
        <div className="p-10">
            <h2 className="font-bold text-3xl">My Expenses</h2>
            <ExpenseListTable />
        </div>
    )
}

export default Expense