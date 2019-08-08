import { roundRobin, sortRandom } from "./assign-games";

enum Order {
  normal = "normal",
  random = "random"
}
interface Args {
  people: string[];
  order: Order;
}

export const getMatches = async ({ people, order }: Args) => {
  let tournamentResults = roundRobin(people);
  if (order === Order.random) {
    tournamentResults = tournamentResults.map(tourn => sortRandom(tourn));
  }
  return Promise.resolve(tournamentResults);
};
