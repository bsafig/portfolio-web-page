import { useNavigate } from 'react-router-dom'

// "Return to Sender" — sends the visitor from a project detail page back home.
// Replaces the old scripts/return.js (which did window.location = '../index.html').
export default function ReturnButton() {
  const navigate = useNavigate()
  return (
    <button id="return-btn" onClick={() => navigate('/')}>
      Return to Sender
    </button>
  )
}
