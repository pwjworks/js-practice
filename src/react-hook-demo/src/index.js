import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Hooktest() {
    // 声明一个叫 “count” 的 state 变量。
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
      </button>
        </div>
    );
}

ReactDOM.render(<Hooktest />, document.getElementById("root"));