import './App.scss';
import Feature from './components/Feature/Feature';
import { FeatureData } from './components/Feature/FeatureData';

function App() {
  console.log(FeatureData);
  return (
    <div className='App'>
      {FeatureData &&
        FeatureData.length > 0 &&
        FeatureData.map((feature, index) => (
          <Feature
            key={index}
            heading={feature.heading}
            title={feature.title}
            className={index % 2 === 0 ? 'red' : 'blue'}
          ></Feature>
        ))}
    </div>
  );
}

export default App;
