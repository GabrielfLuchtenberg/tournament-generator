export interface Challenger {
  name: String;
}
export type KeyTournament = [Challenger, Challenger];
export interface RoundRobin {
  challenges: KeyTournament[];
}
export interface Round {
  number: number;
  keys: KeyTournament[];
}
export interface TreeTournament {
  challenges: Round[];
}
