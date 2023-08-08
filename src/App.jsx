import './styles/App.css';
import img from '../public/220880-P1KV8M-746.jpg';

function App() {
  return (
    <>
      <div className='under-construction-img-container'>
        <img src={img} alt='Page under construction'></img>
        <div className='img-credits'>
          Image by
          <a href='https://www.freepik.com/free-vector/flat-construction-template_1584487.htm#query=website%20under%20construction&position=1&from_view=keyword&track=ais'>
            Freepik
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
