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
      // Immer 라이브러리(설치) 후, 미들웨어 구성
      return set(
        produce((state) => {
          // JavaScript 불변, 객체 업데이트 방식 사용 가능
          state.cats.push({
            id: crypto.randomUUID(),
            ...catInfo,
          });
        })
      );
    },

    // 고양이(반려묘) 제거
    removeCat(removeCatName) {
      return set(
        produce((state) => {
          const removeCatIndex = state.cats.findIndex(
            (cat) => cat.name === removeCatName
          );
          if (removeCatIndex > 0) {
            state.cats.splice(removeCatIndex, 1);
          }
        })
      );
    },
  };
};

// 2. use 훅 생성 (내보내기)
export const useCatsStore = create(catsStore);
