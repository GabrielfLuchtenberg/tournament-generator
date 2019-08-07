import { roundRobin } from "./assign-games";

// dotenv.config();
interface Args {
  people: string[];
}

export const getMatches = async ({ people }: Args) => {
  return Promise.resolve(roundRobin(people));
};
