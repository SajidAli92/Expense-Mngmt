import React from 'react'
import { Progress } from 'antd'
import { TreeNode } from 'antd/es/tree-select'
import "../../styles/Analytics.css"

const Analytics = ({allTransaction}) => {

  //categories
  const categories = ['salary', 'tip', 'project', 'food', 'movie', 'bills', 'medical', 'fee', 'tax', 'others'];
  

  //total transactions 
    const totalTransaction = allTransaction.length
    const totalIncomeTransactions = allTransaction.filter(transaction => transaction.type === 'income')
    const totalExpenseTransactions = allTransaction.filter(transaction => transaction.type === 'expense')
    const totalIncomePercent = (totalIncomeTransactions.length/totalTransaction) * 100
    const totalExpensePercent = (totalExpenseTransactions.length/totalTransaction) * 100
  
    //total turnover
    const totalTurnOver = allTransaction.reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalIncomeTurnover = allTransaction.filter((transaction) => transaction.type === 'income').reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalExpenseTurnover = allTransaction.filter((transaction) => transaction.type === 'expense').reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalIncomeTurnoverPercent = (totalIncomeTurnover/ totalTurnOver) * 100;
    const totalExpenseTurnoverPercent = (totalExpenseTurnover/ totalTurnOver) * 100;
  return (
    <>
    <div className="bubble-background">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
      <div className="row m-3">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Total Transactions : {totalTransaction}
            </div>
            <div className="card-body">
              <h5 className='text-success'>
                Income : {totalIncomeTransactions.length}
              </h5>
              <h5 className='text-danger'>
                Expense : {totalExpenseTransactions.length}
              </h5>
              <div>
                <Progress type='circle' strokeColor={'green'} percent={totalIncomePercent.toFixed(0)} />
                <Progress type='circle' strokeColor={'red'} percent={totalExpensePercent.toFixed(0)} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Total TurnOver : {totalTurnOver}
            </div>
            <div className="card-body">
              <h5 className='text-success'>
                Income : {totalIncomeTurnover}
              </h5>
              <h5 className='text-danger'>
                Expense : {totalExpenseTurnover}
              </h5>
              <div>
                <Progress type='circle' strokeColor={'green'} percent={totalIncomeTurnoverPercent.toFixed(0)} />
                <Progress type='circle' strokeColor={'red'} percent={totalExpenseTurnoverPercent.toFixed(0)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
            <h4>
              Categorywise Income
            </h4>
            {
              categories.map(category => {
                const amount = allTransaction.filter(transaction => transaction.type === 'income' && transaction.category === category).reduce((acc, transaction) => acc + transaction.amount, 0);
                return(
                  amount > 0 && (
                  <div className="card">
                    <div className="card-body">
                      <h5>
                        {category}
                      </h5>
                      <Progress percent={((amount/totalIncomeTurnover) * 100).toFixed(0)}/>
                    </div>
                  </div>
                  )
                );
              })
            }
        </div>
        <div className="col-md-4">
            <h4>
              Categorywise Expense
            </h4>
            {
              categories.map(category => {
                const amount = allTransaction.filter(transaction => transaction.type === 'expense' && transaction.category === category).reduce((acc, transaction) => acc + transaction.amount, 0);
                return(
                  amount > 0 && (
                  <div className="card">
                    <div className="card-body">
                      <h5>
                        {category}
                      </h5>
                      <Progress percent={((amount/totalExpenseTurnover) * 100).toFixed(0)}/>
                    </div>
                  </div>
                  )
                );
              })
            }
        </div>
      </div>
    </>
  )
}

export default Analytics