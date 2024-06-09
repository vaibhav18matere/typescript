enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const myGame = (command: Direction) => {
  if (command == Direction.Up) {
    // do anything
  }
};

const { Up, Down, Left, Right } = Direction;
myGame(Up);

// myGame("Up"); // this will also not work even though it is a constant in our enum defined
myGame(Direction.Up); // must do this
