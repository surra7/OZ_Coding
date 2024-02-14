import { Component } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        { id: 1, charge: '콜라', amount: 2000 },
        { id: 2, charge: '빵', amount: 1000 },
        { id: 3, charge: '맥북', amount: 20000 },
      ]
    }
  }

  // 지출 데이터가 사용되는 곳은 App.js -> ExpenseList.js -> ExpenseItem.js
  // 데이터를 전달해 줘야함
  // initialExpenses = [
  //   { id: 1, charge: '콜라', amount: 2000 },
  //   { id: 2, charge: '빵', amount: 1000 },
  //   { id: 3, charge: '맥북', amount: 20000 },
  // ]

  handleDelete = (id) => {
    const newExpense = this.state.expenses.filter((expense) => expense.id !== id)

    this.setState({ expenses: newExpense });
  }

  render() {
    return (
      <main className="main-container">
        <div className="sub-container">
          <h1>장바구니</h1>

          <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
            {/* Expense Form */}
            <ExpenseForm />
          </div>

          <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
            {/* Expense List */}
            {/* this.initialExpenses 대신에 state를 이용해 값 전달 */}
            <ExpenseList initialExpenses={this.state.expenses}
              handleDelete={this.handleDelete} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'start', marginTop: '1rem' }}>
            <p style={{ fontSize: '2rem' }}>
              총합계:
            </p>
          </div>
        </div>
      </main>
    )
  }
}