import React, { Component } from 'react'
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

export default class ExpenseList extends Component {
    render() {
        return (
            // 요소들을 감싸줘야 하는데 필요없는 div를 생성하는 대신 React.Fragment를 사용할 수 있음
            // 더 간단하게 하려면 생략할 수 있음. 그러면 React.Fragement로 감싼것이 됨
            <>
                <ul className='list'>
                    {this.props.initialExpenses.map(expense => {
                        return (
                            <ExpenseItem key={expense.id} expense={expense}
                                handleDelete={this.props.handleDelete} />
                        )
                    })}
                </ul>
                <button className='btn'>
                    목록 지우기
                </button>
            </>
        )
    }
}
