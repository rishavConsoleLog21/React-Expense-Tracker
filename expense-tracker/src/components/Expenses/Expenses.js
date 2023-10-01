import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expense(props) {
  return (
    <Card className="expenses">
        <ExpenseItem
        title={props.items[0].title}
        spend={props.items[0].spend}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        spend={props.items[1].spend}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        spend={props.items[2].spend}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        spend={props.items[3].spend}
        date={props.items[3].date}
      />
    </Card>
  )
}

export default Expense;