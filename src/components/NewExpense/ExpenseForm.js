import React ,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');   //use of multiple state   // this approach is more convinient
 // OR   
// const [userInput,setUserInput] = useState({   // use of single state with multiple object
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: ''
// });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
//or
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value }
        // })
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    }

    const submitHandler =(event) => {
        event.preventDefault();     //'onSubmit' automatically reload the page when we click the button, 'preventDefault()' prevent this reload.

        const expenseData = {
            tittle : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };

        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit = {submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type ='text' value ={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type ='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type ='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type= 'submit'>Add Expense</button>
            </div>
        </div>
    </form>
}
export default ExpenseForm;