import { roundRobin } from "../assign-games";

describe("Round robin", () => {
  it("Should return full tournament", () => {
    const tournamentPeople = ["Gabriel", "Antonio", "Louis"];
    const expectedResult: string[][][] = [
      [["Antonio", "Louis"]],
      [["Gabriel", "Louis"]],
      [["Gabriel", "Antonio"]]
    ];
    const result = roundRobin(tournamentPeople);
    expect(result).toMatchObject(expectedResult);
  });
  it("Should return full tournaent 2", () => {
    const tournamentPeople = ["Antonio", "Valim", "Gabriel", "Ana", "Maria"];
    const result = roundRobin(tournamentPeople);
    const expectedResult: string[][][] = [
      [["Valim", "Maria"], ["Gabriel", "Ana"]],
      [["Antonio", "Maria"], ["Valim", "Gabriel"]],
      [["Antonio", "Ana"], ["Maria", "Gabriel"]],
      [["Antonio", "Gabriel"], ["Ana", "Valim"]],
      [["Antonio", "Valim"], ["Ana", "Maria"]]
    ];
    expect(result).toMatchObject(expectedResult);
  });
});
