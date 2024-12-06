import styles from './CalculatorNumbers.module.css'
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.', '=']

const CalculatorNumbers = ({ addNumber, calculate }) => {
    return (
        <div id={styles.calculatorNumbers}>
            {numbers.map(n => {
                return <button key={n} 
                    onClick={n === "=" ? calculate : () => addNumber(n)}
                    style={{
                        backgroundColor: n === "=" ? "green": ""
                    }}
                >
                     {n}
                </button>
            })}
        </div>
    )
}

export default CalculatorNumbers