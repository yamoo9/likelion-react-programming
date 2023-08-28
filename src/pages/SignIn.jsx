import pb from '@/api/pocketbase';
import { FormInput } from '@/components';
import { useAuth } from '@/contexts/Auth';
import debounce from '@/utils/debounce';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function SignIn() {
  const { state } = useLocation(); // location { pathname, search, hash, state = {  } }
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
    <>
      <Helmet>
        <title>Sign In - ReactBird</title>
      </Helmet>
      <div className="container max-w-lg mx-auto">
        <h2 className="my-5 text-2xl font-medium text-blue-950 text-center dark:text-sky-500/90">
          로그인 폼
        </h2>

        <form
          onSubmit={handleSignIn}
          className="flex flex-col gap-2 items-center"
        >
          <FormInput
            type="email"
            label="이메일"
            name="email"
            defaultValue={formState.email}
            onChange={handleInput}
          />
          <FormInput
            type="password"
            label="패스워드"
            name="password"
            defaultValue={formState.password}
            onChange={handleInput}
          />

          <div className="flex gap-2 mt-5">
            <button
              type="submit"
              className="
                py-1 px-3.5 border-2 border-zinc-300 hover:border-zinc-400 rounded-full
              dark:text-sky-400 dark:border-sky-400 dark:border-[1px] dark:hover:bg-sky-400 dark:hover:text-sky-50 dark:hover:border-sky-500
              "
            >
              로그인
            </button>
            <button
              type="reset"
              className="
                py-1 px-3.5 border-2 border-zinc-200 bg-zinc-200 hover:bg-zinc-300 hover:border-zinc-300 rounded-full
                dark:bg-zinc-400 dark:border-zinc-400
              "
            >
              취소
            </button>
          </div>
        </form>

        <div className="flex justify-center mt-8 border-t border-slate-200 pt-8 dark:border-slate-200/30">
          <Link
            to="/signup"
            className="dark:text-zinc-500 dark:hover:text-zinc-300"
          >
            회원가입
          </Link>
        </div>

        {isAuth && (
          <button
            type="button"
            className="ml-4"
            onClick={async () => {
              if (confirm('정말 탈퇴할 생각인가요?')) {
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
    </>
  );
}

export default SignIn;
