const strReverse = s => {
  let split = s.split('');

  if(split.length > 1)
    return split.pop() + strReverse(split.join(''));
  else
    return split.join('');
}

exports.strReverse = strReverse;
