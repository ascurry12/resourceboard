import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import gardenData from '../community_gardens_sample'

function App() {

  return (
    <div className="App">
      {/* <Header image="src/assets/hangingplants.png"/> */}
      <h1>Local Alabama Gardens</h1>
      <div className='Grid'>
        {
          gardenData.map((element) => {
            console.log(element);
            return (
              <Card item={element}/>
            )
          })
        }
      </div>
    </div>

  )
}

export default App
