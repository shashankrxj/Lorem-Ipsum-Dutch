# Lorem Ipsum Dutch
## Overview
This project is a customizable Lorem Ipsum text generator implemented in Node.js, specifically designed for generating Lorem Ipsum text in Dutch. It allows you to generate random words, sentences, or paragraphs for use in your projects.

## Installation
```HTML
 npm install lorem-ipsum-dutch
```

## Features
• Generate Words: Generate a specified number of Dutch words.<br>
• Generate Sentences: Generate Dutch sentences with configurable lengths.<br>
• Generate Paragraphs: Generate Dutch paragraphs with configurable number of sentences.<br>

## Usage
### Importing
```HTML
 const { LoremIpsum, loremIpsum } = require('lorem-ipsum-dutch');
 //you can either use Class Constructor or Function to generate dutch lorem-ipsum
```
### Class: LoremIpsum
**Constructor**
```HTML
 const lorem = new LoremIpsum(options);
```
**Options:**<br>
• sentencesPerParagraph: Object with min and max properties (default: { min: 3, max: 7 })<br>
• wordsPerSentence: Object with min and max properties (default: { min: 5, max: 15 })<br>
• random: Random function (default: Math.random)<br>
• words: Array of words (default: loaded from corpus.txt)<br>

**Methods**<br>
• generateWords(count): Generates specified number of words.<br>
• generateSentence(): Generates a sentence.<br>
• generateSentences(count): Generates specified number of sentences.<br>
• generateParagraph(): Generates a paragraph.<br>
• generateParagraphs(count): Generates specified number of paragraphs.<br>

### Function: loremIpsum
```HTML
const loremText = loremIpsum(options);
```
**Options:**<br>
• count: Number of units to generate (default: 1)<br>
• format: Output format (plain or html, default: plain)<br>
• paragraphLowerBound: Minimum sentences per paragraph (default: 3)<br>
• paragraphUpperBound: Maximum sentences per paragraph (default: 7)<br>
• random: Random function (default: Math.random)<br>
• sentenceLowerBound: Minimum words per sentence (default: 5)<br>
• sentenceUpperBound: Maximum words per sentence (default: 15)<br>
• suffix: Suffix to add after the generated text (default: \n)<br>
• units: Units to generate (words, sentences, or paragraphs, default: sentences)<br>
• words: Array of words (optional)<br>

## Example
```HTML
const { LoremIpsum, loremIpsum } = require('lorem-ipsum-dutch');

const lorem = new LoremIpsum();
console.log(lorem.generateParagraphs(3));

// Output:
// "Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//
// Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//
// Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

console.log(loremIpsum({ count: 2, units: 'paragraphs', sentenceLowerBound: 4, sentenceUpperBound: 10, paragraphLowerBound: 2, paragraphUpperBound: 5 }));

//Output:
//"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

//Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

```
