import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";

const PUBLIC_KEY = "pk_test_51Jz7sEFe5TfAtgoI9GWcdVU0Z7qZ0IgXXcBWo3YQ26AtwOIaIS2HI0hsXXA2ndkN5KnMc1EYrl1l6pbCxn3sgrWX00SCXDSUpz"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}
