import Header from "./Header"
import Footer from "./Footer"
import IndexMain from "./IndexMain"
import "./App.css"

const App = () => {
  return (
    <div className="app">
      <Header websiteName={"Squile"}/>
      <IndexMain slogan={"Intellegence Beyond Imagination"}/>
      <Footer/>
    </div>
  )
}

export default App
