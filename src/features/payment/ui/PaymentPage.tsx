import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('your-public-stripe-key')

const handleSubscribe = async (event: any) => {
  // Prevent form from submitting
  event.preventDefault()

  // Get Stripe.js instance
  const stripe = await stripePromise

  // Call your backend to create the Checkout Session
  const response = await fetch('/api/subscriptions', { method: 'POST' })

  const session = await response.json()

  // When the customer clicks on the button, redirect them to Checkout.
  const result = await stripe?.redirectToCheckout({
    sessionId: session.id,
  })

  if (result?.error) {
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `result.error.message`.
    console.error(result.error.message)
  }
}

export const PaymentPage = () => {
  return (
    <button role="link" onClick={handleSubscribe} style={{ color: 'white' }}>
      Subscribe
    </button>
  )
}
