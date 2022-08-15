
const fs = require('fs');
const Hjson = require('hjson');

const rawdata = fs.readFileSync('./.eslintrc.json', { encoding: 'utf-8' });
const config = Hjson.parse(rawdata);
const str = Hjson.stringify(config, {
  quotes: 'all',
  separator: true,
});
fs.writeFileSync('lib/base.json', str);
