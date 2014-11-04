function squareArray(array){
  return _.map(array, function(item){
    return item * item;
  });
}

function onlySixes(array){
  return _.filter(array, function(item){
    return item.toString().indexOf('6') !== -1 ||
           item.toString().indexOf('six') !== -1
  });
}
