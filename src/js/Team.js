export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже существует');
    }
    return this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((item) => this.members.add(item));
    return this.members;
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    let nextIndex = 0;
    const members = this.toArray();
    return {
      next() {
        if (nextIndex < members.length) {
          const result = { value: members[nextIndex] };
          nextIndex += 1;
          return result;
        }
        return { done: true };
      },
    };
  }
}
