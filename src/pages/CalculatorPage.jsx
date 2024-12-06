import CalculatorNumbers from "./CalculatorPage/CalculatorNumbers"

const CalculatorPage = () => {
    return (
        <div>
            <h2>Calculator</h2>
            <div id="calculator-container">
                <div id="calculator-buttons">
                    <CalculatorNumbers />
                </div>
            </div>
        </div>
    )
}

export default CalculatorPage