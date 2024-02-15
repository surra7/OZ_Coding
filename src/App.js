import { Component, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

//export default class App extends Component {
const App = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     expenses: [
  //       { id: 1, charge: '콜라', amount: 2000 },
  //       { id: 2, charge: '빵', amount: 1000 },
  //       { id: 3, charge: '맥북', amount: 20000 },
  //     ]
  //   }
  // }

  // 지출 데이터가 사용되는 곳은 App.js -> ExpenseList.js -> ExpenseItem.js
  // 데이터를 전달해 줘야함
  // initialExpenses = [
  //   { id: 1, charge: '콜라', amount: 2000 },
  //   { id: 2, charge: '빵', amount: 1000 },
  //   { id: 3, charge: '맥북', amount: 20000 },
  // ]

  const [expenses, setExpenses] = useState([
    { id: 1, charge: '콜라', amount: 2000 },
    { id: 2, charge: '빵', amount: 1000 },
    { id: 3, charge: '맥북', amount: 20000 },
  ])

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      // id는 랜덤 아이디, crypto 라이브러리 사용
      const newExpense = { id: crypto.randomUUID(), charge, amount };
      // 불변성을 지키기 위해 원래 배열을 복사하고 새로운 값을 넣어줌, expenses 바로 push하면 불변성을 지키지 못함
      const newExpenses = [...expenses, newExpense];
      setExpenses(newExpenses);
      setCharge("");
      setAmount(0);
    } else {
      console.error('error');
    }
  }

  const handleDelete = (id) => {
    // 함수형 컴포넌트에서는 this.state.expenses 대신 바로 state 이름인 expenses 사용
    const newExpense = expenses.filter((expense) => expense.id !== id)

    //this.setState({ expenses: newExpense });
    // 함수형 컴포넌트에서는 this.setState 대신 setter인 setExpenses 사용
    setExpenses(newExpense);
  }

  return (
    <main className="main-container">
      <div className="sub-container">
        <h1>장바구니</h1>

        <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
          {/* Expense Form */}
          <ExpenseForm charge={charge} handleCharge={handleCharge}
            amount={amount} handleAmount={handleAmount} handleSubmit={handleSubmit} />
        </div>

        <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
          {/* Expense List */}
          {/* this.initialExpenses 대신에 state를 이용해 값 전달 -> this.state.expenses*/}
          <ExpenseList initialExpenses={expenses}
            handleDelete={handleDelete} />
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

export default App;