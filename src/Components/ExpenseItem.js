import './ExpenseItem.css';


function ExpenseItem(props) {


    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    const expenseLocationOfExpenditure ='DELHI'



    return (
        <div className='expense-item '>
            <h2>{props.date.toISOString()}</h2>
            <div className='expense-item__description  '>
                <h2>{props.title}</h2>
                <div className='expense-item__price'> ${props.amount} </div>
                <h2>{expenseLocationOfExpenditure}</h2>
            </div>
        </div>
    )

}
export default ExpenseItem;  