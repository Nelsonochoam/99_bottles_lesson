/*

1. How many verse variants are there? Clearly, four.
2. Which verses are most alike? In what way? 3-99, where only the verse number varies.
3. Which verses are most different? In what way?
0, 1 and 2 are different from 3-99, though figuring out how requires parsing strings with your eyes.
4. What is the rule to determine which verse should be sung next?
This is still not explicit. The 0 verse contains a deeply buried, hard-coded 99.

 */
class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map(i => this.verse(i))
      .join('\n');
  }

  verse(number) {
    switch (number) {
      case 0:
        return (
          'No more bottles of beer on the wall, ' +
          'no more bottles of beer.\n' +
          'Go to the store and buy some more, ' +
          '99 bottles of beer on the wall.\n'
        );
      case 1:
        return (
          '1 bottle of beer on the wall, ' +
          '1 bottle of beer.\n' +
          'Take it down and pass it around, ' +
          'no more bottles of beer on the wall.\n'
        );
      case 2:
        return (
          '2 bottles of beer on the wall, ' +
          '2 bottles of beer.\n' +
          'Take one down and pass it around, ' +
          '1 bottle of beer on the wall.\n'
        );
      default:
        return (
          `${number} bottles of beer on the wall, ` + `${number} bottles of beer.\n` +
          'Take one down and pass it around, ' + `${number - 1} bottles of beer on the wall.\n`
        );
    }
  }
}