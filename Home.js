import React from 'react'

function Login() {
    return (
        <div className="Login">
         <div class="main-div">
        <div class="inner-div">
            <h2 class="question">question comes here</h2>
            <ul>
                <li>
                    <input type="radio" name="answer" id="ans1" class="answer"/>
                    <label for="ans1" id="option1">Answer Option</label>
                </li>

                <li>
                    <input type="radio" name="answer" id="ans2" class="answer"/>
                    <label for="ans2" id="option2">Answer Option</label>
                </li>

                <li>
                    <input type="radio" name="answer" id="ans3" class="answer"/>
                    <label for="ans3" id="option3">Answer Option</label>
                </li>

                <li>
                    <input type="radio" name="answer" id="ans4" class="answer"/>
                    <label for="ans4" id="option4">Answer Option</label>
                </li>
            </ul>
            <button id="submit">submit</button>
            <div id="showScore" class="scoreArea"></div>
        </div>
    </div>
        </div>
    )
}
export default Login