import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense() {
    return <div className="new-expense">
        <form>
            <ExpenseForm />
        </form>
    </div>
};