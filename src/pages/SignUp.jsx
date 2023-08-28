import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import pb from '@/api/pocketbase';
import debounce from '@/utils/debounce';
import { Helmet } from 'react-helmet-async';
import { Button, FormInput } from '@/components';

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
      [name]: value,
    });
  };

  const handleDebounceInput = debounce(handleInput, 500);

  return (
    <>
      <Helmet>
        <title>Sign Up - ReactBird</title>
      </Helmet>
      <div className="container max-w-lg mx-auto">
        <h2 className="my-5 text-2xl font-medium text-blue-950 text-center dark:text-sky-500/90">
          회원가입
        </h2>

        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-2 items-center"
        >
          <FormInput
            label="사용자 이름"
            name="name"
            defaultValue={formState.name}
            onChange={handleDebounceInput}
          />
          <FormInput
            label="계정 이름"
            name="username"
            defaultValue={formState.username}
            onChange={handleDebounceInput}
          />
          <FormInput
            label="이메일"
            type="email"
            name="email"
            defaultValue={formState.email}
            onChange={handleDebounceInput}
          />
          <FormInput
            label="패스워드"
            name="password"
            defaultValue={formState.password}
            onChange={handleDebounceInput}
          />
          <FormInput
            label="패스워드 확인"
            name="passwordConfirm"
            defaultValue={formState.passwordConfirm}
            onChange={handleDebounceInput}
          />

          <Button.Group>
            <Button type="submit">가입</Button>
            <Button type="reset" secondary>
              취소
            </Button>
          </Button.Group>
        </form>

        <div className="flex justify-center mt-8 border-t border-slate-200 pt-8 dark:border-slate-200/30">
          <Link
            to="/signin"
            className="dark:text-zinc-500 dark:hover:text-zinc-300"
          >
            로그인
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;
