import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import pb from '@/api/pocketbase';

function SignUp() {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    const { password, passwordConfirm } = formState;
    
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해보세요.');
      return;
    }

    // PocketBase SDK 인증 요청
    await pb.collection('users').create({
      ...formState,
      emailVisibility: true,
    });

    navigate('/');
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div>
      <h2>회원가입</h2>

      <form onSubmit={handleRegister} className='flex flex-col gap-2 mt-2 justify-start items-start'>
        <div>
          <label htmlFor="name">사용자 이름</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formState.name}
            onChange={handleInput}
            className='border border-slate-300 ml-2'
          />
        </div>
        <div>
          <label htmlFor="username">계정 이름</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formState.username}
            onChange={handleInput}
            className='border border-slate-300 ml-2'
          />
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleInput}
            className='border border-slate-300 ml-2'
          />
        </div>
        <div>
          <label htmlFor="password">패스워드</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formState.password}
            onChange={handleInput}
            className='border border-slate-300 ml-2'
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm">패스워드 확인</label>
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            value={formState.passwordConfirm}
            onChange={handleInput}
            className='border border-slate-300 ml-2'
          />
        </div>
        <div className='flex gap-2'>
          <button type="submit" className='disabled:cursor-not-allowed'>가입</button>
          <button type="reset">취소</button>
        </div>
      </form>

      <Link to="/signin">로그인</Link>
    </div>
  );
}

export default SignUp;
