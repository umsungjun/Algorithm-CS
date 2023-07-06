import { create } from "zustand"; // {create}로 해야됨 create로 쓸 시 오류 남

type countStoreType = {
  // TS를 이용하신 다면 useCountStore의 type을 지정 해야 합니다.
  count: number;
  countUp: () => void;
  countDown: () => void;
};

export const useCountStore = create<countStoreType>((set) => ({
  count: 0, // 초기값
  countUp: () => {
    // countUp 함수
    set((state) => ({ ...state, count: state.count + 1 }));
  },
  countDown: () => {
    // countUp 함수
    set((state) => ({ ...state, count: state.count - 1 }));
  },
}));
