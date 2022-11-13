const colVars = require('./raw/variables.json');
const groupPrefixes = {
  B19001: 'HOUSEHOLD_INCOME_',
  B15012: 'BACHELORS_',
  C24010: 'OCCUPATION_M_',
};

const B19001 = [
  'NAME',
  'B19001_001E',
  'B19001_002E',
  'B19001_003E',
  'B19001_004E',
  'B19001_005E',
  'B19001_006E',
  'B19001_007E',
  'B19001_008E',
  'B19001_009E',
  'B19001_010E',
  'B19001_011E',
  'B19001_012E',
  'B19001_013E',
  'B19001_014E',
  'B19001_015E',
  'B19001_016E',
  'B19001_017E',
  'metropolitan statistical area/micropolitan statistical area',
];

const B15012 = [
  'NAME',
  'B15012_001E',
  'B15012_002E',
  'B15012_003E',
  'B15012_004E',
  'B15012_005E',
  'B15012_006E',
  'B15012_007E',
  'B15012_008E',
  'B15012_009E',
  'B15012_010E',
  'B15012_011E',
  'B15012_012E',
  'B15012_013E',
  'B15012_014E',
  'B15012_015E',
  'B15012_016E',
  'metropolitan statistical area/micropolitan statistical area',
];

const C24010 = [
  'NAME',
  'C24010_001E',
  'C24010_002E',
  'C24010_003E',
  'C24010_004E',
  'C24010_005E',
  'C24010_006E',
  'C24010_007E',
  'C24010_008E',
  'C24010_009E',
  'C24010_010E',
  'C24010_011E',
  'C24010_012E',
  'C24010_013E',
  'C24010_014E',
  'C24010_015E',
  'C24010_016E',
  'C24010_017E',
  'C24010_018E',
  'C24010_019E',
  'C24010_020E',
  'C24010_021E',
  'C24010_022E',
  'C24010_023E',
  'C24010_024E',
  'C24010_025E',
  'C24010_026E',
  'C24010_027E',
  'C24010_028E',
  'C24010_029E',
  'C24010_030E',
  'C24010_031E',
  'C24010_032E',
  'C24010_033E',
  'C24010_034E',
  'C24010_035E',
  'C24010_036E',
  'C24010_037E',
  'metropolitan statistical area/micropolitan statistical area',
];

// console.log(groupPrefixes[colVars.variables.B19001_002E.group]);
const renameColumns = (columns) => {
  let colRenamed = [];
  columns.forEach((columnName) => {
    if (columnName === 'NAME') {
      colRenamed.push('NAME');
      return;
    }
    if (
      columnName ===
      'metropolitan statistical area/micropolitan statistical area'
    ) {
      colRenamed.push('MSA');
      return;
    }

    let newName = groupPrefixes[colVars.variables[columnName].group].toString();

    let colLabel = '';
    colLabel = colVars.variables[columnName].label.toString();
    console.log(colLabel);
    colLabel = colLabel
      .replace('Estimate!!', '')
      .replace(/[!]{2}/g, ' ')
      .replace(/[^0-9a-zA-Z: ]/g, '')
      .replace(/[: ]/g, '_')
      .replace(/[_]{2}/, '_')
      .toUpperCase();
    console.log('colLabel', colLabel);
    newName += colLabel;
    colRenamed.push(newName);
  });
  return colRenamed;
};

const newColumns = renameColumns(C24010);

console.log(newColumns.join(','));
