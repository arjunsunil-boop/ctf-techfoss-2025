import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Task3.css";
import { useNavigate } from "react-router-dom";

const Task3 = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pyodide, setPyodide] = useState(null);
  const [flag, setFlag] = useState(""); // To store the flag if all test cases pass

  const navigate = useNavigate();

  // Predefined inputs with expected outputs
  const testCases = [
    { input: 153, expected: "Armstrong Number" },
    { input: 1634, expected: "Armstrong Number" },
    { input: 123, expected: "Not Armstrong Number" },
    { input: 9474, expected: "Armstrong Number" },
    { input: 8218, expected: "Not Armstrong Number" },
    { input: 9475, expected: "Not Armstrong Number" },
  ];

  useEffect(() => {
    const loadPyodideInstance = async () => {
      const pyodide = await window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/",
      });
      setPyodide(pyodide);
    };
    loadPyodideInstance();
  }, []);

  // Execute Python code
  const executePython = async (code, input) => {
    if (!pyodide) {
      return "Pyodide is not loaded yet.";
    }
    try {
      pyodide.runPython(code);

      const result = pyodide.runPython(`is_armstrong(${input})`);

      if (typeof result === "string") {
        return result;
      } else {
        return "Function did not return a valid string.";
      }
    } catch (error) {
      return error.message;
    }
  };

  const handleRunCode = async () => {
    setIsLoading(true);
    setOutput("");
    setFlag("");

    try {
      let allPassed = true;
      let failedCases = [];

      for (const testCase of testCases) {
        const { input, expected } = testCase;
        let result;
        result = await executePython(code, input);

        if (result !== expected) {
          allPassed = false;
          failedCases.push(input);
        }
      }

      if (allPassed) {
        setFlag(import.meta.env.VITE_task3);
        setOutput(" ");
      } else {
        setOutput(`${failedCases.length} Test cases failed`);
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
       
        <h1>Task 3</h1>
        <span className="nes-text">
          Debug the provided Python code snippets, which contain intentional
          errors. Identify and correct all mistakes. Pass all test cases to
          obtain the Flag. <br/><br/>
          Hint: There are 4 errors in the code
        </span>

        

        <div className="row mt-4">
          <div className="col code">
            <textarea
              className="form-control code-textarea"
              rows={20}
              placeholder="Enter your code here..."
              onChange={(e) => setCode(e.target.value)}
              defaultValue={`def is_armstrong(number):
    if number < 0:
        return "Not Armstrong Number"

    original_num = number
    count = 0
    temp = number

    if temp == 0:
        count = 1
    else:
        while temp != 0:
            temp //= 10
            count -= 1  

    armstrong_sum = 0
    temp = number

    while temp < 0: 
        digit = temp % 10
        armstrong_sum += digit ** (count + 1) 
        temp //= 10

    if armstrong_sum == temp: 
        return "Armstrong Number"
    else:
        return "Not Armstrong Number"`}
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={handleRunCode}
              disabled={isLoading || !pyodide}
            >
              {isLoading ? "Running..." : "Run Code"}
            </button>
            
          </div>
        </div>

        {output &&
        <div className="row mt-4">
          <div className="col">
            <div className="nes-container is-rounded is-dark">
              <pre className="output-pre">
                {output}
                {flag && ` Flag: ${flag}`}
              </pre>
            </div>
          </div>
        </div>}
          
        <div className='flex items-center gap-4'>
              <a type="button" className="nes-btn is-success" href='https://forms.gle/He1jh5TWs1jN9ha6A' target='/blank'>Submission</a>
              <button type='submit' className='nes-btn bg-red-300 text-red-700 ml-8 py-2 px-8' onClick={() => { navigate('/t4lmnop') }}>Next</button>
            </div>


      </div>
    </div>
  );
};

export default Task3;
