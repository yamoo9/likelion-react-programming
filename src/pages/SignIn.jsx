import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import pb from '@/api/pocketbase';
import debounce from '@/utils/debounce';
import { useAuth } from '@/contexts/Auth';

function SignIn() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = formState;

    try {
      await pb.collection('users').authWithPassword(email, password);

      if (!state) {
        navigate('/');
      } else {
        navigate(state.wishLocationPath);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = debounce((e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }, 400);

  return (
    <div>
      <h2>로그인 폼</h2>

      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-2 mt-2 justify-start items-start"
      >
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={formState.email}
            onChange={handleInput}
            className="border border-slate-300 ml-2"
          />
        </div>
        <div>
          <label htmlFor="password">패스워드</label>
          <input
            type="password"
            name="password"
            id="password"
            defaultValue={formState.password}
            onChange={handleInput}
            className="border border-slate-300 ml-2"
          />
        </div>
        <div className="flex gap-2">
          <button type="submit" className="disabled:cursor-not-allowed">
            로그인
          </button>
          <button type="reset">취소</button>
        </div>
      </form>

      <Link to="/signup">회원가입</Link>
      {isAuth && (
        <button
          type="button"
          className="ml-4"
          onClick={async () => {
            if (confirm('뭐가 맘에 안드시죠? 정말 탈퇴할 생각인가요?')) {
              if (pb.authStore.model) {
                try {
                  await pb.collection('users').delete(pb.authStore.model.id);
                  console.log('탈퇴 성공');
                } catch (error) {
                  console.error(error);
                }
              } else {
                console.log('현재 로그인 된 사용자가 없어요.');
              }
            }
          }}
        >
          탈퇴
        </button>
      )}
    </div>
  );
}

export default SignIn;
