import { useState } from 'react';

function SignUp() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleRegister = (e) => {
    e.preventDefault();
    // PocketBase SDK 인증 요청
    console.log('가입');
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
          <label htmlFor="name">이름</label>
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
          <button type="submit">가입</button>
          <button type="reset">취소</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
