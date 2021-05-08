import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  // const para = document.createElement('p')
  // para.textContent= 'This is also visible'
  // document.getElementById('root').append(para)

    // return (
    //   React.createElement('div',{},React.createElement('h2',{},"Let's get started!"),React.createElement(NewExpense,{},))
    // )

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      {/* <p>This is also visible</p> */}
      <Expenses />
      
    </div>
  );
}

export default App;
