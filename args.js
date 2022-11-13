let args = '';
for (i = 1; i < 74; i++) {
  args += `C24010_${i.toString().padStart(3, '0')}E,`;
}
console.log(args);
