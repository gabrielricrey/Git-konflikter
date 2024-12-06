import CalculatorNumbers from "./CalculatorPage/CalculatorNumbers"
import CalculatorOperators from "./CalculatorPage/CalculatorOperators"
import styles from "./CalculatorPage/CalculatorPage.module.css"

import { useState } from "react"

const operators = ['+', '-', '*', '/', '^']

const CalculatorPage = () => {

    const [equation, setEquation] = useState("")

    const addNumber = (n) => {
        // don't allow consecutive dots
        if (n === "." && equation.at(-1) === ".") return;

        setEquation(equation + n)
    }

    const addOperator = (o) => {
        // don't allow starting with operator other than -
        if (equation.length === 0 && o !== "-" && operators.includes(o)) return;

        // don't allow consecutive operators
        if (operators.includes(o) && operators.includes(equation.at(-1))) return;

        setEquation(equation + o)
    }

    const calculate = () => {
        let result = eval(equation.replaceAll('^', '**'))
        console.table({result, equation})
        if (typeof result !== "number") {
            setEquation("")
        } else if (isNaN(result)) {
            setEquation("")
        } else {
            // round to 6 decimal places
            result = Math.round(result*10**6) / 10**6
            setEquation(result.toString())
        }
    }

    const clear = () => setEquation("");

    return (
        <div>
            <h2>Calculator</h2>
            <div id={styles.display}>
                {equation}
            </div>
            <div id={styles.container}>
                <div id={styles.calculatorButtons}>
                    <CalculatorNumbers 
                        addNumber={addNumber}
                        calculate={calculate}
                    />
                    <CalculatorOperators 
                        addOperator={addOperator}
                    />
                </div>
                <button id={styles.clearBtn} onClick={clear}>
                    CLEAR
                </button>
            </div>
        </div>
    )
}

export default CalculatorPage