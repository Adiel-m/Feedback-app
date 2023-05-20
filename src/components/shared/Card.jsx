function Card({ children, reverse }) {
  // conditional class
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}

Card.defaultProps = {
  reverse: false,
}

export default Card
