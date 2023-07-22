import './App.scss';
import Feature from './components/Feature/Feature';

function App() {
  return (
    <div className='App'>
      <Feature heading='heading test' title='title test' />
      <Feature>test children</Feature>
      {/* giá trị ở giữa 2 div đóng mở là children bên prop */}
    </div>
  );
}

export default App;
