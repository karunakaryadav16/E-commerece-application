import {useState} from 'react'
// import {Redirect} from 'react-router-dom'
// import Popup from 'reactjs-popup'
import {AiFillCreditCard, AiFillBank} from 'react-icons/ai'
import {FaPaypal} from 'react-icons/fa'
import Header from '../Header'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import './index.css'

const Payments = () => {
  const [pay, setPay] = useState('')

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList, removeAllCartItems} = value
        let total = 0
        cartList.forEach(eachCartItem => {
          total += eachCartItem.price * eachCartItem.quantity
        })

        const onChangeCard = e => {
          setPay(e.target.value)
        }

        const onChangeNetBanking = e => {
          setPay(e.target.value)
        }

        const onChangeUPI = e => {
          setPay(e.target.value)
        }

        const onSubmitPay = e => {
          e.preventDefault()
          if (pay === '') {
            alert('Please Choose The Payment Option')
          } else {
            alert(`Payment successful Paid By ${pay}  Thank You For Shopping`)
            removeAllCartItems()
          }
        }

        return (
          <>
            <Header />
            <div className="payments-container">
              {cartList.length === 0 ? (
                <EmptyCartView />
              ) : (
                <form onSubmit={onSubmitPay} className="payments-card">
                  <div className="payments-card-header">
                    <h3 className="paying-heading">Paying to</h3>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                      alt="website logo"
                      className="payments-website-logo"
                    />
                  </div>
                  <div className="payments-card-body">
                    <div className="amount-container">
                      <p className="amount">Amount to be paid : </p>
                      <h3 className="total">
                        Rs {total}
                        /-
                      </h3>
                    </div>
                    <div className="payment-options-container">
                      <h5 className="select-payment-option-heading">
                        Select payment option
                      </h5>
                      <div className="option-container">
                        <div className="payment-image-container">
                          <AiFillCreditCard className="payment-option-icon" />
                          <label
                            htmlFor="card"
                            className="payment-option-label"
                          >
                            Card
                          </label>
                        </div>
                        <input
                          type="radio"
                          className="radio-button"
                          value="Card"
                          onChange={onChangeCard}
                          name="payment"
                          id="card"
                        />
                      </div>
                      <hr className="line" />
                      <div className="option-container">
                        <div className="payment-image-container">
                          <AiFillBank className="payment-option-icon" />
                          <label
                            htmlFor="netBanking"
                            className="payment-option-label"
                          >
                            Net banking
                          </label>
                        </div>
                        <input
                          type="radio"
                          className="radio-button"
                          value="Net banking"
                          name="payment"
                          id="netBanking"
                          onChange={onChangeNetBanking}
                        />
                      </div>
                      <hr className="line" />
                      <div className="option-container">
                        <div className="payment-image-container">
                          <FaPaypal className="payment-option-icon" />
                          <label htmlFor="upi" className="payment-option-label">
                            UPI
                          </label>
                        </div>
                        <input
                          type="radio"
                          className="radio-button"
                          value="UPI"
                          onChange={onChangeUPI}
                          name="payment"
                          id="upi"
                        />
                      </div>
                    </div>
                    <div className="pay-button-container">
                      {/* <Popup
                        trigger={ */}
                      <button type="submit" className="pay-button">
                        PAY HERE
                      </button>
                      {/* }
                        modal="true"
                      > */}
                      {/* <div className="light-logout-model-container">
                          <p className="payment-successful-message">
                            Payment Successful Paid By {pay} Thank You Visit
                            Again.
                          </p>
                        </div>
                      </Popup> */}
                    </div>
                  </div>
                </form>
              )}
            </div>
          </>
        )
      }}
    </CartContext.Consumer>
  )
}

export default Payments
