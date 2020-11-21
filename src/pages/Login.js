import React, { useEffect, useRef, useState } from "react";
import { useCurrentUser, useDispatchCurrentUser } from "../components/CurrentUser";
import { useHistory } from "react-router-dom";
import { callApi } from "../utils";

export default function Login() {
  const dispatch = useDispatchCurrentUser();
  const currentUser = useCurrentUser();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if(currentUser.isAuthenticated) {
      history.push("/")
    }
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg(null);
    try {
      const data = await callApi("/auth/local", "POST", {
        identifier: emailRef.current.value,
        password: passwordRef.current.value
      })

      if(!data.user) {
        throw "Cannot login. Please try again."
      }

      dispatch({ type: "LOGIN", user: data.user });
      history.push("/")

    } catch (err) {
      setErrorMsg(err)
    }
  }

  return (
    <main>
      {errorMsg && <p>{errorMsg}</p>}
      <form class="measure center mt4" onSubmit={handleSubmit}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="email-address">Email</label>
              <input ref={emailRef} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" for="password">Password</label>
              <input ref={passwordRef} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
            </div>
          </fieldset>
          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
          </div>
          <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim black db">Sign up</a>
            <a href="#0" className="f6 link dim black db">Forgot your password?</a>
          </div>
        </form>
    </main>
  );
}
