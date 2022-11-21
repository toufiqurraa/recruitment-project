import { useState } from 'react'
import { Button } from './components/Button'
import { ButtonsWrapper } from './styles/buttonWraper'
import { Container } from './styles/container'

function App() {
  let [buttonText, setButtonText] = useState('click me')
  let [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((count = count + 1))

    if (count % 3 === 0) {
      setButtonText('bang')
    }

    if (count % 3 !== 0) {
      setButtonText('click me')
    }

    console.log(count)
  }

  return (
    <>
      <Container>
        <h1>Simple Button Click Event</h1>
      </Container>

      <br />

      <ButtonsWrapper>
        <Button onClick={handleClick}> {buttonText}</Button>
      </ButtonsWrapper>
    </>
  )
}

export default App
