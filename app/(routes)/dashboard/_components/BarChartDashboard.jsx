import React from 'react'
import { Bar, BarChart, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts'

function BarChartDashboard({budgetList}) {
  return (
    <div className='border rounded-lg p-5'>
        <h2 className='font-bold text-lg'>Activity</h2>
        <ResponsiveContainer width={'100%'} height={300}>
          <BarChart
              data={budgetList}
              margin={{
                  top:5,
                  right: 30,
                  left: 20,
                  bottom: 5
              }}
          >
              <XAxis dataKey='name' />
              <YAxis />
              
              <Legend />
              <Bar dataKey='totalSpend' stackId="a" fill='#4845D2' />
              <Bar dataKey='amount' stackId="a" fill='#C3C2FF' />
          </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default BarChartDashboard