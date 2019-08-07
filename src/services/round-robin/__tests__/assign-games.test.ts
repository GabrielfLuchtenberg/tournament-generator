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
});
