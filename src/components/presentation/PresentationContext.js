import { createContext, useContext } from 'react'

// True when a component is rendered inside the fullscreen presentation deck.
// Lets shared components (Reveal, CardDeck) adapt their layout/behaviour.
export const PresentationContext = createContext(false)

export function usePresentationMode() {
  return useContext(PresentationContext)
}
