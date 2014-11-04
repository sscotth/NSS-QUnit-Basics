function squareArray(array){
  return _.map(array, function(item){
    return item * item;
  });
}

function onlySixes(array){
  return _.filter(array, function(item){
    if (typeof item === 'number'){
      var sixFinder = /[6]/;
      return sixFinder.test('' + item);
    } else if (!isNaN(+item)){
      return /6/.test(item);
    } else if (typeof item === 'string') {
      return /six/.test(item);
    }
  });
}
