import styles from './CalculatorOperators.module.css'

const operators = ['+', '-', '*', '/', '^']

const CalculatorOperators = ({ addOperator }) => {
    return (
        <div id={styles.calculatorOperators}>
            {operators.map(o => {
                return <button key={o} onClick={() => addOperator(o)}>
                    {o}
                </button>
            })}
        </div>
    )
}

export default CalculatorOperators