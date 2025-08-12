#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Define all test files
const testFiles = [
  // 01_The_Journey_Begins
  '01_The_Jouney_Begins/add.js',
  '01_The_Jouney_Begins/centuryFromYear.js',
  '01_The_Jouney_Begins/checkPalindrome.js',
  
  // 02_Edge_Of_The_Ocean
  '02_Edge_Of_The_Ocean/adjacentElementsProduct.js',
  '02_Edge_Of_The_Ocean/almostIncreasingSequence.js',
  '02_Edge_Of_The_Ocean/makeArrayConsecutive2.js',
  '02_Edge_Of_The_Ocean/matrixElementSum.js',
  '02_Edge_Of_The_Ocean/shapeArea.js',
  
  // 03_Smooth_Sailing
  '03_Smooth_Sailing/allLongestStrings.js',
  '03_Smooth_Sailing/commonCharacterCount.js',
  '03_Smooth_Sailing/isLucky.js',
  '03_Smooth_Sailing/reverseParentheses.js',
  '03_Smooth_Sailing/sortByHeight.js',
  
  // 04_Exploring_The_Waters
  '04_Exploring_The_Waters/addBorder.js',
  '04_Exploring_The_Waters/alternatingSums.js',
  '04_Exploring_The_Waters/areSimilar.js',
  '04_Exploring_The_Waters/arrayChange.js',
  '04_Exploring_The_Waters/palindromeRearranging.js',
  
  // 05_Island_Of_Knowledge
  '05_Island_Of_Knowledge/areEquallyStrong.js',
  '05_Island_Of_Knowledge/arrayMaximalAdjacentDifference.js',
  '05_Island_Of_Knowledge/avoidObstacles.js',
  '05_Island_Of_Knowledge/boxBlur.js',
  '05_Island_Of_Knowledge/isIPv4Address.js',
  '05_Island_Of_Knowledge/minesweeper.js',
  
  // 06_Rains_Of_Reason
  '06_Rains_Of_Reason/alphabeticShift.js',
  '06_Rains_Of_Reason/arrayReplace.js',
  '06_Rains_Of_Reason/chessBoardCellColor.js',
  '06_Rains_Of_Reason/evenDigitsOnly.js',
  '06_Rains_Of_Reason/variableName.js',
  
  // 07_Through_The_Fog
  '07_Through_The_Fog/absoluteValuesSumMinimization.js',
  '07_Through_The_Fog/circleOfNumbers.js',
  '07_Through_The_Fog/depositProfit.js',
  '07_Through_The_Fog/stringsRearrangement.js',
  
  // 08_Diving_Deeper
  '08_Diving_Deeper/arrayMaxConsecutiveSum.js',
  '08_Diving_Deeper/differentSymbolsNaive.js',
  '08_Diving_Deeper/extractEachKth.js',
  '08_Diving_Deeper/firstDigit.js',
  
  // 09_Dark_Wilderness
  '09_Dark_Wilderness/bishopAndPawn.js',
  '09_Dark_Wilderness/digitDegree.js',
  '09_Dark_Wilderness/growingPlant.js',
  '09_Dark_Wilderness/knapsackLight.js',
  '09_Dark_Wilderness/longestDigitsPrefix.js',
  
  // 10_Eruption_Of_Light
  '10_Eruption_Of_Light/buildPalindrome.js',
  '10_Eruption_Of_Light/electionsWinners.js',
  '10_Eruption_Of_Light/findEmailDomain.js',
  '10_Eruption_Of_Light/isBeautifulString.js',
  '10_Eruption_Of_Light/isMAC48Address.js',
  
  // 11_Rainbow_Of_Clarity
  '11_Rainbow_Of_Clarity/chessKnight.js',
  '11_Rainbow_Of_Clarity/deleteDigit.js',
  '11_Rainbow_Of_Clarity/isDigit.js',
  '11_Rainbow_Of_Clarity/lineEncoding.js',
  
  // 12_Land_Of_Logic
  '12_Land_Of_Logic/differentSquares.js',
  '12_Land_Of_Logic/digitalProduct.js',
  '12_Land_Of_Logic/fileNaming.js',
  '12_Land_Of_Logic/longestWord.js',
  '12_Land_Of_Logic/messageFromBinary.js',
  '12_Land_Of_Logic/spiralNumbers.js',
  '12_Land_Of_Logic/sudoku.js',
  '12_Land_Of_Logic/sumUpNumbers.js',
  '12_Land_Of_Logic/validTime.js'
];

console.log('🚀 Running all CodeSignal tests...\n');
console.log('='.repeat(50));

let totalPassed = 0;
let totalFailed = 0;
let filesPassed = 0;
let filesFailed = 0;

testFiles.forEach((file, index) => {
  const filePath = path.join(__dirname, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${file}`);
    filesFailed++;
    return;
  }
  
  console.log(`\n[${index + 1}/${testFiles.length}] Running: ${file}`);
  console.log('-'.repeat(50));
  
  try {
    const output = execSync(`node "${filePath}"`, { encoding: 'utf-8' });
    console.log(output);
    
    // Parse the output to get pass/fail counts
    const resultsMatch = output.match(/Results: (\d+) passed, (\d+) failed/);
    if (resultsMatch) {
      const passed = parseInt(resultsMatch[1]);
      const failed = parseInt(resultsMatch[2]);
      totalPassed += passed;
      totalFailed += failed;
      
      if (failed === 0) {
        filesPassed++;
        console.log(`✅ All tests passed for ${path.basename(file, '.js')}`);
      } else {
        filesFailed++;
        console.log(`⚠️  Some tests failed for ${path.basename(file, '.js')}`);
      }
    }
  } catch (error) {
    console.log(`❌ Error running ${file}:`);
    console.log(error.message);
    filesFailed++;
  }
});

console.log('\n' + '='.repeat(50));
console.log('📊 FINAL RESULTS');
console.log('='.repeat(50));
console.log(`Files: ${filesPassed} passed, ${filesFailed} failed (${testFiles.length} total)`);
console.log(`Tests: ${totalPassed} passed, ${totalFailed} failed (${totalPassed + totalFailed} total)`);

if (totalFailed === 0) {
  console.log('\n🎉 All tests passed! Great job!');
} else {
  console.log('\n⚠️  Some tests failed. Please review the output above.');
}

process.exit(totalFailed === 0 ? 0 : 1);