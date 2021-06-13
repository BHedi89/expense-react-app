import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showExpenseForm, setExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpanseData) => {
    const expenseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setExpenseForm(false);
  };

  const toggleExpenseHandler = () => {
    setExpenseForm(true);
  }

  const cancelEditing = () => {
    setExpenseForm(false);
  }

  return (
    <div className="new-expense">
      {!showExpenseForm && <button onClick={toggleExpenseHandler}>Add New Expense</button>}
      {showExpenseForm && 
        <ExpenseForm 
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditing}>
        </ExpenseForm>}
    </div>
  );
};

export default NewExpense;
