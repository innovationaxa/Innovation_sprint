import { usePresentationMode } from '../presentation/PresentationContext'
import { Carousel } from './Carousel'

// Renders a collection of cards as a CSS grid on the scrolling site, but as a
// horizontal carousel in presentation mode (so it fits on a single slide).
// `gridClassName` is the section's normal grid class; `perView` controls how
// many cards show per carousel page.
export function CardDeck({ gridClassName, perView = 3, gridStyle, children }) {
  const presentation = usePresentationMode()

  if (presentation) {
    return <Carousel perView={perView}>{children}</Carousel>
  }
  return (
    <div className={gridClassName} style={gridStyle}>
      {children}
    </div>
  )
}
