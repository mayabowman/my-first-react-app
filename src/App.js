import React from 'react';
import { math } from 'mathjs';

class App extends Component {
  render() {
    const f1 = math.fraction(4, 7); // the fraction 4/7
    const f2 = math.fraction(3, 8); // the fraction 3/8
    const f3 = math.add(f1, f2); // the fraction 53/56
    const formatted_fraction = math.format(f3, { fraction: 'ratio' });
 
    return (
      <div>
        <h2>4/7 + 3/8 = </h2>
        <p>{formatted_fraction}</p>
      </div>
    );
  }
}

export default App;
