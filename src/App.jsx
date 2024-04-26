import { createGlobalStyle } from 'styled-components'
import Navbar from './components/Navbar'
const GlobalStyle = createGlobalStyle`
  @media (max-width: 768px) {
    body {
      /* font-size: 14px; */
    }
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
    </>
  )
}

export default App
