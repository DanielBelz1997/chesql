function isArrayOnlyNulls(arr) {
  return arr.every((element) => element === null);
}

function chesql(sqlStatement) {
  const errors = [];
  const regexs = [
    /\bSELECY\b/gi,
    /\bSELEC\b/gi,
    /\bSELEVT\b/gi,
    /\bSLEECLT\b/gi,
    /\bSELECTY\b/gi,
    /\bSELECR\b/gi,
    /\bSELELCT\b/gi,
    /\bFOM\b/gi,
    /\bFTROM\b/gi,
    /\bFRON\b/gi,
    /\bFROMM\b/gi,
    /\bWJERE\b/gi,
    /\bWHEREE\b/gi,
    /\bWHERR\b/gi,
    /\bWHRTT\b/gi,
    /\bWHWEE\b/gi,
    /\bWHWHRR\b/gi,
    /\bWHEHR\b/gi,
    /\bWHWER\b/gi,
    /\bWWHERE\b/gi,
  ];
  for (const regex of regexs) {
    const match = sqlStatement.match(regex);
    errors.push(match);
  }
  if (!isArrayOnlyNulls(errors)) {
    return {
      success: false,
      message: `Syntax error in the following words: ${errors
        .filter((x) => x)
        .map((x) => x + " ")}`,
    };
  } else {
    return {
      success: true,
      message: "Syntax check passed",
    };
  }
}

module.exports = chesql;
