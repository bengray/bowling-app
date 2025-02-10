import { CalculateScore } from "./components/BowlingGame";

describe("Bowling Score Calculation", () => {
  test("should return 0 for all gutter game", () => {
    const frames = Array(10).fill([0, 0]);
    expect(CalculateScore(frames)).toBe(0);
  });

  test("should correctly score a perfect game", () => {
    const frames = Array(9)
      .fill([10, 0])
      .concat([[10, 10, 10]]);
    expect(CalculateScore(frames)).toBe(300);
  });

  test("should return 20 for all ones", () => {
    const frames = Array(10).fill([1, 1]);
    expect(CalculateScore(frames)).toBe(20);
  });

  test("should correctly score a spare", () => {
    const frames = [[5, 5], [3, 4], ...Array(8).fill([0, 0])];
    expect(CalculateScore(frames)).toBe(20);
  });

  test("should correctly score a strike", () => {
    const frames = [[10, 0], [3, 4], ...Array(8).fill([0, 0])];
    expect(CalculateScore(frames)).toBe(24);
  });

  test("should correctly score a final frame spare with bonus", () => {
    const frames = [...Array(9).fill([0, 0]), [5, 5, 3]];
    expect(CalculateScore(frames)).toBe(13);
  });

  test("should correctly score a final frame strike with two bonuses", () => {
    const frames = [...Array(9).fill([0, 0]), [10, 5, 3]];
    expect(CalculateScore(frames)).toBe(18);
  });
});
