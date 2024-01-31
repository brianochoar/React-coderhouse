import './styles/App.css' 
import {Navbar} from './components/Navbar'
import {Carro} from './components/Carro'




export const App = () => {
    return (
       
        <div className='container'>
            <Navbar/>
            <Carro/>
            
        </div>

        

        
    )
}


