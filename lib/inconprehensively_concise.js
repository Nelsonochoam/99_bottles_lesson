/*

If you had to characterize the goal of the writer of Listing 1.1: Incomprehensibly Concise, you might suggest that
their highest priority was brevity. Brevity may be the soul of wit, but it quickly becomes tedious in code


1. How many verse variants are there?
2. Which verses are most alike? In what way?
3. Which verses are most different, and in what way?
4. What is the rule to determine which verse comes next?

 */

class Bottles {
  song() {
    return this.verses(99,0)
  }

  verses(hi, lo) {
    return downTo(hi, lo).map(n => this.verse(n)).join('\n');
  }

  verse(n) {
    return (
      `${n === 0 ? 'No more' : n} bottle${n === 1 ? '' : 's'}` +
      ' of beer on the wall, ' +
      `${n === 0 ? 'no more' : n} bottle${n === 1 ? '' : 's'} of beer.\n` +
      `${n > 0 ? `Take ${n > 1 ? 'one' : 'it'} down and pass it around` : 'Go to the store and buy some more'}, ` +
      `${n-1 < 0 ? 99 : n-1 === 0 ? 'no more' : n-1} bottle${n-1 === 1 ? '' : 's'}`+
      ' of beer on the wall.\n'
    );
  }
}


// Here is the definition of the downTo helper function
// used above. It will be omitted from subsequent listings.
const downTo = (max, min) => { const numbers = []; for(letn=max;n>=min;n--){
  numbers.push(n);
}
  return numbers; };