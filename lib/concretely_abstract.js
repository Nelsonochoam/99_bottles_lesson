/*
1. How many verse variants are there?
  It’s almost impossible to tell.
2. Which verses are most alike?
  In what way? Ditto.
3. Which verses are most different?
  In what way? Ditto.
4. What is the rule to determine which verse should be sung next?
  Ditto.
*/

class Bottles {
  song() {
    return this.verses(99,0)
  }

  verses(bottlesAtStart, bottlesAtEnd) {
    return downTo(bottlesAtStart, bottlesAtEnd)
      .map(bottles => this.verse(bottles))
      .join('\n');
  }

  verse(bottles) {
    return new Round(bottles).toString();
  }
}

class Round {
  constructor(bottles) {
    this.bottles = bottles;
  }

  toString() {
    return this.challenge() + this.response();
  }

  challenge() {
    return (capitalize(this.bottlesOfBeer()) + ' ' + this.onWall() + ', ' + this.bottlesOfBeer() + '.\n');
  }

  response() {
    return (this.goToTheStoreOrTakeOneDown() + ', ' + this.bottlesOfBeer() + ' ' + this.onWall() + '.\n');
  }

  bottlesOfBeer() {
    return (this.anglicizedBottleCount() + ' ' + this.pluralizedBottleForm() + ' of ' + this.beer());
  }

  beer() {
    return 'beer';
  }

  onWall() {
    return 'on the wall';
  }

  pluralizedBottleForm() {
    return this.isLastBeer() ? 'bottle' : 'bottles';
  }

  anglicizedBottleCount() {
    return this.isAllOut() ? 'no more' : this.bottles.toString();
  }

  goToTheStoreOrTakeOneDown() {
    if (this.isAllOut()) {
      this.bottles = 99;
      return this.buyNewBeer();
    } else {
        const lyrics = this.drinkBeer(); this.bottles--;
        return lyrics;
      }
  }

  buyNewBeer() {
    return 'Go to the store and buy some more';
  }

  drinkBeer() {
    return `Take ${this.itOrOne()} down and pass it around`;
  }

  itOrOne() {
    return this.isLastBeer() ? 'it' : 'one';
  }

  isAllOut() {
    return this.bottles === 0;
  }

  isLastBeer() {
    return this.bottles === 1;
  }
}

// Here is the definition of the capitalize helper function
// used above. It will be omitted from subsequent listings.
const capitalize =
  string => string.charAt(0).toUpperCase() + string.slice(1);
