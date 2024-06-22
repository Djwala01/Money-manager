import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteUser} = props
  const {title, amount, activeTab, id} = transactionDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="table-row">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{activeTab}</p>
      <button
        className="button-container"
        type="button"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
