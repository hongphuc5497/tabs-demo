import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="Gator">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nihil qui? Quos explicabo blanditiis nihil, eius eveniet unde. Quas alias, nostrum pariatur ipsum nemo molestias esse similique laboriosam reprehenderit in!</div>

        <div label="Croc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente molestiae nostrum consequatur velit in, veritatis, nobis reprehenderit illum, rerum odio saepe vel porro sed tempora adipisci tempore! Numquam, error!</div>

        <div label="Sarcosuchus">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A cumque necessitatibus nemo corporis dolore explicabo dolorem nostrum doloribus assumenda repudiandae sapiente voluptatum magni cupiditate, eos quidem expedita. Expedita, perferendis? Cupiditate.</div>
      </Tabs>
    </div>
  )
}

export default App;
