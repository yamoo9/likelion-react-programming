import { create } from 'zustand';
import { produce } from 'immer';

// 1. 스토어(상태 관리 저장소) 작성
const catsStore = (set) => {
  // 3. 상태(state)
  // 명사(속성), 동사(함수:액션)
  return {
    // 고양이들 (집합)
    // 읽기(GET, 불변 데이터 관리)
    cats: [
      { id: crypto.randomUUID(), name: '찐빵', age: 2, gender: 'male' },
      { id: crypto.randomUUID(), name: '뭉치', age: 2, gender: 'male' },
    ],

    // 쓰기(SET)
    // 4. 고양이(반려묘) 추가
    // 추가할 고양이 정보: { 이름, 나이, 성별 }
    addCat(catInfo) {
      // React의 방식 (객체 업데이트, 전개 구문)
      return set((state) => {
        // 다음 상태 반환
        /* ...이전 고양이들 */
        // console.log(state.cats);
        /* 새로운 고양이 */
        const newCat = {
          id: crypto.randomUUID(),
          ...catInfo,
        };
        // 다음 상태 반환
        return {
          cats: [...state.cats, newCat],
        };
      });

      // Immer 라이브러리(설치) 후, 미들웨어 구성
    },

    // 고양이(반려묘) 제거
  };
};

// 2. use 훅 생성 (내보내기)
export const useCatsStore = create(catsStore);
