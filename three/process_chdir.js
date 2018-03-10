console.log(`Starting directory: ${process.cwd()}`);

try {
  process.chdir('./tmp');
  console.log(`New directory: ${process.cwd()}`);
  console.log(__dirname);
} catch (err) {
  console.log(`chdir: '${err}`);
}
