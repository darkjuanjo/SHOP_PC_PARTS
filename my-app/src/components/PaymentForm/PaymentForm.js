import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios"
export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    
    return (
        <div>
            
        </div>
    )
}
