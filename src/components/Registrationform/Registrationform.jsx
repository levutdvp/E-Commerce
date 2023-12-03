import {React,  useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const Registrationform = () => {
	const navigate = useNavigate()
	
	const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    // Lấy danh sách tài khoản từ Local Storage
    const existingAccounts = JSON.parse(localStorage.getItem('accounts')) || [];

    // Kiểm tra xem tài khoản đã tồn tại chưa
    const isDuplicate = existingAccounts.find((account) => account.username === username);

    if (isDuplicate) {
      alert('Account already exists. Please choose another username.');
    } else {
     
      const newAccount = {
        username: username,
        password: password,
      };

      // Thêm tài khoản mới vào danh sách tài khoản
      existingAccounts.push(newAccount);

      // Lưu tài khoản mới vào Local Storage
      localStorage.setItem('accounts', JSON.stringify(existingAccounts));

      alert('The account has been successfully registered.');
      navigate('/login')
    }
  };

	return (
		<>
			<section className="loginform">
				<div className="container-login">
					<div className="wrapper">
						<div className="heading">
							<h1>Sign Up</h1>
							<p>Already a user ? <span><Link to="/login">Login here</Link></span></p>
						</div>
						<form className='form' action="">
                        <label className='label name'>
								Username
								<input type="text" name="name" onChange={handleUsernameChange} />
							</label>
							<label className='label'>
								Password
								<input type="text" name="password" onChange={handlePasswordChange} />
							</label>
							<p className='forgot-pass'>By signing up you agree to our <span><Link to="/termsNconditions">terms & conditions</Link></span></p>
							<button className='submit-btn' onClick={handleRegister}>Sign Up</button>
						</form>

					</div>
				</div>
			</section>
		</>
	)
}

export default Registrationform;