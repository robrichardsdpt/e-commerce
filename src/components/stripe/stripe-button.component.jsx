import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HxuQnBh3bJzEnnx75bz718T6yN7fB9OHgxSLKXL2k2FV6xmvqTlopIV6NTa7eQi6lwKdc1rKjKwkKMN7KsIc4aP00dcOsTPf5'
    const onToken = (token) => {
        console.log(token)
        alert('Payment Successful')
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