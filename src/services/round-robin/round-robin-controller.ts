// dotenv.config();
interface Args {
  people: string[];
}
const dummy = "-1";

function assignToGames(numberOfPlayers: any, arrayOfPlayers: string[]) {
  // n = num players
  var roundsResult = []; // rs = round array
  if (!arrayOfPlayers) {
    arrayOfPlayers = [];
    for (var k = 1; k <= numberOfPlayers; k += 1) {
      arrayOfPlayers.push(k.toString());
    }
  }

  if (numberOfPlayers % 2 === 1) {
    arrayOfPlayers.push(dummy); // so we can match algorithm for even numbers
    numberOfPlayers += 1;
  }
  for (var j = 0; j < numberOfPlayers - 1; j += 1) {
    roundsResult[j] = [] as any; // create inner match array for round j
    for (var i = 0; i < numberOfPlayers / 2; i += 1) {
      if (
        arrayOfPlayers[i] !== dummy &&
        arrayOfPlayers[numberOfPlayers - 1 - i] !== dummy
      ) {
        roundsResult[j].push([
          arrayOfPlayers[i],
          arrayOfPlayers[numberOfPlayers - 1 - i]
        ]); // insert pair as a match
      }
    }
    arrayOfPlayers.splice(1, 0, arrayOfPlayers.pop() as string); // permutate for next round
  }
  return roundsResult;
}

export const getMatches = async ({ people }: Args) => {
  return Promise.resolve(assignToGames(people.length, people));
};
