import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <>
      <li className="list-container1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="content">
          <p className="paragraph">Your Balance</p>
          <p className="paragraph-total" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </li>
      <li className="list-container2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div className="content">
          <p className="paragraph">Your Income</p>
          <p className="paragraph-total" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </li>
      <li className="list-container3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div className="content">
          <p className="paragraph">Your Expenses</p>
          <p className="paragraph-total" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
