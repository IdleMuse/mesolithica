import { random } from "lodash";
import faker from "faker";

const defaultCharacterCount = 4;
const statMinimum = 1;
const statMaximum = 10;

const createCharacter = () => ({
  name: faker.name.firstName(),
  brawn: random(statMinimum, statMaximum),
  intel: random(statMinimum, statMaximum),
  coord: random(statMinimum, statMaximum),
  expre: random(statMinimum, statMaximum)
});

const startingCharacters = ({ count: length = defaultCharacterCount } = {}) =>
  Array.from({ length }, createCharacter);

export { createCharacter, startingCharacters };
