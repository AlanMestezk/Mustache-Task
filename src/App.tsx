
import { Header } from './components/header'
import { Relevant } from './components/relevant'


function App() {
  

  return (
    <>

      <header>

        <Header
          title='Mustache Task'
          subtitle='Crie e administre suas tarefas de um jeito fácil e prático'
        />

      </header>

      <main>

        <Relevant/>

      </main>
      
     
    </>
  )
}

export default App
