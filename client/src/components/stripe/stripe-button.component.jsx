import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HxuQnBh3bJzEnnx75bz718T6yN7fB9OHgxSLKXL2k2FV6xmvqTlopIV6NTa7eQi6lwKdc1rKjKwkKMN7KsIc4aP00dcOsTPf5'
    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful!')
        }) .catch(error => {
            console.log('Payment error: ', JSON.parse(error))
            alert(
                'There was an issue with your payment.  Please be sure you use the provided credit card.'
            )
        })
    }
    
    return <StripeCheckout 
        label="Pay Now"
        name= 'CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />

}

export default StripeCheckoutButton