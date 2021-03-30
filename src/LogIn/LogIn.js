import { useState } from 'react';
import './LogIn.css'
function LogIn() {
    const [flag, setflag] = useState(0)

    return (
        <div class="login-page">
            <div class="form">
                {flag ?
                    <form class="login-form">
                        <input type="text" placeholder="name"/>
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p class="message">Already registered? <span  onClick={() => setflag(!flag)}>Sign In</span></p>
                    </form>
                    :
                    <form class="login-form">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button>login</button>
                        <p class="message">Not registered? <span onClick={() => setflag(!flag)} >Create an account</span></p>
                    </form>
                }
            </div>
        </div>

    );
}

export default LogIn;
