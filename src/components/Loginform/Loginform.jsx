import { React, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './loginform.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../slice/UserLoginSlice.js';
const Loginform = () => {
	const nameRef = useRef(null);
	const passwordRef = useRef(null);
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const {isLoginSuccess} = useSelector(state => state.userLogin)
	async function loginClick() {
		
		const name = nameRef.current?.value;
		const password = passwordRef.current?.value;
		try {
			await dispatch(login({ name, password })).unwrap();
		} catch (e) {
			alert(e)
		}
	}
	useEffect(() => {
		if (isLoginSuccess) {
			navigate('/')
		}
	}, [isLoginSuccess])
	return (
		<>
			<section className="loginform">
				<div className="container-login">
					<div className="wrapper">
						<div className="heading">
							<h1>Sign In</h1>
							<p>New User ? <span><Link to="/registration">Create an account</Link></span></p>
						</div>
						{/* <form className='form' action=""> */}
							<label className='label'>
								Username
								<input ref={nameRef} type="text" name="name" />
							</label>
							<label className='label'>
								Password
								<input ref={passwordRef} type="text" name="password" />
							</label>
							<p className='forgot-pass'>Forgot Password ? <span><Link to="/forgot-password">Cick here to reset</Link></span></p>
							<button className='submit-btn' onClick= {loginClick}>Sign In</button>
						{/* </form> */}

					</div>
				</div>
			</section>
		</>
	)
}

export default Loginform