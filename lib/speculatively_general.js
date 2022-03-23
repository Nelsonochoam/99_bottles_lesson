/*

1. How many verse variants are there?
T here are four verse variants (they start on lines 1, 7, 13, and 19 above).
2. Which verses are most alike? In what way?
  Verses 3-99 are most alike (as evidenced by the fact that all are produced by the Default variant).
3. Which verses are most different? In what way?
  Verses 0, 1 and 2 are clearly different from 3-99, although it’s not obvious in what way.
4. What is the rule to determine which verse should be sung next?
  Buried deep within the NoMore function is a hard-coded "99," which might cause one to infer
  that verse 99 follows verse 0.


The code is DRY, and DRYing out code should reduce costs. DRY promises that if you put a chunk of code into a method
and then invoke that method instead of duplicating the code, you will save

However, despite that fact that the code above is DRY, there are many ways in which it’s expensive to change.


*/


const NoMore = verse =>
  'No more bottles of beer on the wall, ' + 'no more bottles of beer.\n' +
  'Go to the store and buy some more, ' + '99 bottles of beer on the wall.\n';

const LastOne = verse =>
  '1 bottle of beer on the wall, ' +
  '1 bottle of beer.\n' +
  'Take it down and pass it around, ' +
  'no more bottles of beer on the wall.\n';

const Penultimate = verse =>
  '2 bottles of beer on the wall, ' + '2 bottles of beer.\n' +
  'Take one down and pass it around, ' + '1 bottle of beer on the wall.\n';

const Default = verse =>
  `${verse.number} bottles of beer on the wall, ` + `${verse.number} bottles of beer.\n` +
  'Take one down and pass it around, ' + `${verse.number - 1} bottles of beer on the wall.\n`;

class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(finish, start) {
    return downTo(finish, start)
      .map(verseNumber => this.verse(verseNumber))
      .join('\n');
  }

  verse(number) {
    return this.verseFor(number).text();
  }

  verseFor(number) {
    switch (number) {
      case 0:
        return new Verse(number, NoMore);
        case 1:
          return new Verse(number, LastOne);
        case 2:
          return new Verse(number, Penultimate);
        default:
          return new Verse(number, Default);
    }
  }
}

class Verse {
  constructor(number, lyrics) {
    this.number = number;
    this.lyrics = lyrics;
  }

  number() {
    return this.number;
  }

  text() {
    return this.lyrics(this);
  }
}