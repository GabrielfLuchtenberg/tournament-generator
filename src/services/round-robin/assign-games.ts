const sortRandom = (arrayOfItems: any[]) => {
  const randomFn = () => Math.random() - 0.5;
  return arrayOfItems.sort(randomFn);
};

const roundRobin = (peopleInTournament: string[]): string[][][] => {
  const dummy = "no people";
  let numberOfPlayers: number = peopleInTournament.length;
  let roundsResult = [];
  if (!peopleInTournament) {
    peopleInTournament = [];
    for (let k = 1; k <= numberOfPlayers; k += 1) {
      peopleInTournament.push(k.toString());
    }
  }

  if (numberOfPlayers % 2 === 1) {
    peopleInTournament.push(dummy); // so we can match algorithm for even numbers
    numberOfPlayers += 1;
  }
  for (let j = 0; j < numberOfPlayers - 1; j += 1) {
    roundsResult[j] = [] as string[][]; // create inner match array for round j
    for (let i = 0; i < numberOfPlayers / 2; i += 1) {
      if (
        peopleInTournament[i] !== dummy &&
        peopleInTournament[numberOfPlayers - 1 - i] !== dummy
      ) {
        roundsResult[j].push([
          peopleInTournament[i],
          peopleInTournament[numberOfPlayers - 1 - i]
        ]); // insert pair as a match
      }
    }
    peopleInTournament.splice(1, 0, peopleInTournament.pop() as string); // permutate for next round
  }
  return roundsResult;
};

export { roundRobin, sortRandom };
