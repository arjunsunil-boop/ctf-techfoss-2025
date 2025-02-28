from flask import Flask, request, jsonify
import subprocess  # For running the compiler and code
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/compile_c', methods=['POST'])
def compile_c():
    code = request.json.get('code')
    test_cases = request.json.get('testCases', [])  # Get test cases

    results = []
    for test_case in test_cases:
        try:
            # VERY IMPORTANT: Sanitize and validate the code and test cases!
            # Use a sandboxed environment (Docker recommended).  This is a simplified example.

            # Write code to a temporary file
            with open("temp_code.c", "w") as f:
                f.write(code)

            # Write input to temporary file
            with open("input.txt", "w") as f:
                f.write(test_case["input"])

            # Compile and run (sandboxing is crucial here).  This is simplified.
            # You'll need to adapt this to your sandboxing method.
            compile_process = subprocess.run(["gcc", "temp_code.c", "-o", "output"], capture_output=True, text=True)

            if compile_process.returncode != 0:
                error_message = compile_process.stderr
                results.append({"input": test_case["input"], "expected": test_case["expected"], "output": "Compilation Error", "error": error_message})
                continue

            run_process = subprocess.run(["./output"], input=test_case["input"], capture_output=True, text=True)

            if run_process.returncode != 0:
                error_message = run_process.stderr
                results.append({"input": test_case["input"], "expected": test_case["expected"], "output": "Runtime Error", "error": error_message})
                continue

            output = run_process.stdout

            results.append({"input": test_case["input"], "expected": test_case["expected"], "output": output, "error": None})

        except Exception as e:
            results.append({"input": test_case["input"], "expected": test_case["expected"], "output": "Internal Server Error", "error": str(e)}) # Handle errors

    return jsonify(results)  # Return JSON results


@app.route('/compile_python', methods=['POST'])
def compile_python():
    code = request.json.get('code')
    test_cases = request.json.get('testCases', [])

    results = []
    for test_case in test_cases:
        try:
            with open("temp_code.py", "w") as f:
                f.write(code)

            run_process = subprocess.run(["python", "temp_code.py"], input=test_case["input"], capture_output=True, text=True)

            if run_process.returncode != 0:
                error_message = run_process.stderr
                results.append({"input": test_case["input"], "expected": test_case["expected"], "output": "Runtime Error", "error": error_message})
                continue

            output = run_process.stdout
            results.append({"input": test_case["input"], "expected": test_case["expected"], "output": output, "error": None})

        except Exception as e:
            results.append({"input": test_case["input"], "expected": test_case["expected"], "output": "Internal Server Error", "error": str(e)})

    return jsonify(results)


if __name__ == '__main__':
    app.run(debug=True) 