import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
const intialTransactionList = []

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    transactionList: intialTransactionList,
    activeTab: transactionTypeOptions[0].optionId,
    balance: 0,
    income: 0,
    expenses: 0,
  }

  onAddTransaction = event => {
    event.preDefault()
    const {title, amount, activeTab} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      activeTab,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
    }))

    if (activeTab === 'Income') {
      this.setState(prevState => ({income: prevState.income + amount}))
      this.setState(prevState => ({
        balance: prevState.income - prevState.expenses,
      }))
    }

    if (activeTab === 'Expenses') {
      this.setState(prevState => ({expenses: prevState.expenses + amount}))
      this.setState(prevState => ({
        balance: prevState.income - prevState.expenses,
      }))
    }
  }

  deleteUser = id => {
    const {transactionList} = this.state
    const filteredData = transactionList.filter(each => each.id !== id)
    this.setState({transactionList: filteredData})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({activeTab: event.target.value})
  }

  render() {
    const {
      title,
      amount,
      transactionList,
      activeTab,
      balance,
      income,
      expenses,
    } = this.state
    return (
      <div className="bg-container">
        <div className="responsive-container">
          <div className="card">
            <h1 className="heading">Hi, Richard</h1>
            <p className="paragraph">
              Welcome back to your <span className="money">Money Manager</span>
            </p>
          </div>
          <ul className="container">
            <MoneyDetails
              balance={balance}
              income={income}
              expenses={expenses}
            />
          </ul>
          <div className="bottom-container">
            <form className="Transaction-card" onSubmit={this.onAddTransaction}>
              <h1 className="main-heading">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                id="title"
                placeholder="TITLE"
                value={title}
                className="input"
                onChange={this.onChangeTitle}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                id="amount"
                value={amount}
                placeholder="AMOUNT"
                className="input"
                onChange={this.onChangeAmount}
              />
              <label htmlFor="earn" className="label">
                TYPE
              </label>
              <select
                id="earn"
                className="input"
                onChange={this.onChangeType}
                value={activeTab}
              >
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button className="button" type="submit">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="history-heading">History</h1>
              <ul className="unordered-container">
                <li className="columns">
                  <p className="para">Title</p>
                  <p className="para">Amount</p>
                  <p className="para">Type</p>
                </li>
                {transactionList.map(each => (
                  <TransactionItem
                    key={each.id}
                    transactionDetails={each}
                    deleteUser={this.deleteUser}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
