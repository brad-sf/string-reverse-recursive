exports.strReverse = s => {
  let split = str.split('');

  if(split.length > 1)
    return split.pop() + reverse(split.join(''));
  else
    return split.join('');
}
