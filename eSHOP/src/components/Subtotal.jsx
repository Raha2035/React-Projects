import CurrencyFormat from "react-currency-format"

const Subtotal = () => {
  return (
    <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal (1 items): <strong>${value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal