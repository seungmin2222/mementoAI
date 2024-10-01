import { describe, it, expect } from "vitest";
import { solution } from "../src/solution";

describe("solution function", () => {
  it("배열에 하나의 요소만 있을 때 [-1]을 반환해야 합니다", () => {
    expect(solution([10])).toEqual([-1]);
    expect(solution([1])).toEqual([-1]);
    expect(solution([7])).toEqual([-1]);
    expect(solution([-10])).toEqual([-1]);
    expect(solution([0])).toEqual([-1]);
  });

  it("최소값을 제외한 배열을 반환해야 합니다", () => {
    expect(solution([4, 3, 2, 1])).toEqual([4, 3, 2]);
    expect(solution([10, 5, 3, 7])).toEqual([10, 5, 7]);
    expect(solution([100, 50, 30, 20])).toEqual([100, 50, 30]);
    expect(solution([1, 2, 3, 4])).toEqual([2, 3, 4]);
    expect(solution([99, 77, 88, 66, 55])).toEqual([99, 77, 88, 66]);
    expect(solution([11, 22, 33, 44, 55])).toEqual([22, 33, 44, 55]);
    expect(solution([-3, -1, -5, 0])).toEqual([-3, -1, 0]);
    expect(solution([1000, 2000, 3000, 4000])).toEqual([2000, 3000, 4000]);
  });
});
