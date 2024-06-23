const fs = require('fs');

class LoremIpsum {
  constructor(options = {}) {
    this.options = {
      sentencesPerParagraph: { min: 3, max: 7, ...options.sentencesPerParagraph },
      wordsPerSentence: { min: 5, max: 15, ...options.wordsPerSentence },
      random: options.random || Math.random,
      words: options.words || this.loadCorpus(),
    };
  }

  loadCorpus() {
    const corpusData = fs.readFileSync(__dirname + '/corpus.txt', 'utf8');
    return corpusData.split(/\s+/);
  }

  generateWords(count) {
    return Array.from({ length: count }, () => this.options.words[Math.floor(this.options.random() * this.options.words.length)]).join(' ');
  }

  generateSentence() {
    const { min, max } = this.options.wordsPerSentence;
    const length = Math.floor(this.options.random() * (max - min + 1)) + min;
    return this.generateWords(length).charAt(0).toUpperCase() + this.generateWords(length).slice(1) + '.';
  }

  generateSentences(count) {
    return Array.from({ length: count }, () => this.generateSentence()).join(' ');
  }

  generateParagraph() {
    const { min, max } = this.options.sentencesPerParagraph;
    const length = Math.floor(this.options.random() * (max - min + 1)) + min;
    return this.generateSentences(length);
  }

  generateParagraphs(count) {
    return Array.from({ length: count }, () => this.generateParagraph()).join('\n\n');
  }
}

function loremIpsum(options = {}) {
  const {
    count = 1,
    format = 'plain',
    paragraphLowerBound = 3,
    paragraphUpperBound = 7,
    random = Math.random,
    sentenceLowerBound = 5,
    sentenceUpperBound = 15,
    suffix = '\n',
    units = 'sentences',
    words,
  } = options;

  const lorem = new LoremIpsum({
    sentencesPerParagraph: { min: paragraphLowerBound, max: paragraphUpperBound },
    wordsPerSentence: { min: sentenceLowerBound, max: sentenceUpperBound },
    random,
    words,
  });

  let result;
  switch (units) {
    case 'words':
      result = lorem.generateWords(count);
      break;
    case 'sentences':
      result = lorem.generateSentences(count);
      break;
    case 'paragraphs':
      result = lorem.generateParagraphs(count);
      break;
    default:
      throw new Error('Invalid units specified');
  }

  if (format === 'html') {
    result = `<p>${result.replace(/\n\n/g, '</p><p>')}</p>`;
  }

  return result + suffix;
}

module.exports = { LoremIpsum, loremIpsum };