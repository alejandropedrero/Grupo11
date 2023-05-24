import { UseRef, useState, useEffect } from "react";


export default function LoginForm() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState ('');
  const [errMsg, setErrMsg] = useState ('');
  const [success, setSuccess] = useState (false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])
}
