var app = angular.module('customModule');

app.filter('startsWithLetter', function () {
    return function (items, letter, number) {
        // console.log('items');
        // console.log(items);
        // console.log('letter');
        // console.log(letter);
        // console.log('number');
        // console.log(number);
        var filtered = [];
        var letterMatch = new RegExp(letter, 'i');
        // console.log('letterMatch');
        // console.log(letterMatch);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (letterMatch.test(item.name.substring(0, 1))) {
                filtered.push(item);
            }
        }
        // for how much items to return, starts with zero ends with number
        filtered.splice(0, number);

        return filtered;
    };
});

app.filter('startsWithA', function () {
    return function (items) {
        // console.log('items');
        // console.log(items);
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (/a/i.test(item.name.substring(0, 1))) {
                filtered.push(item);
            }
        }
        return filtered;
    };
})
app.filter('makeUppercase', function () {
    return function (item) {
        //   console.log('item');
        //   console.log(item);
        return item.toUpperCase();
    };
});

app.filter('ordinal', function() {

  // Create the return function
  // set the required parameter name to **number**
  return function(number) {

    // Ensure that the passed in data is a number
    if(isNaN(number) || number < 1) {

      // If the data is not a number or is less than one (thus not having a cardinal value) return it unmodified.
      return number;

    } else {

      // If the data we are applying the filter to is a number, perform the actions to check it's ordinal suffix and apply it.

      var lastDigit = number % 10;

      if(lastDigit === 1) {
        return number + 'st'
      } else if(lastDigit === 2) {
        return number + 'nd'
      } else if (lastDigit === 3) {
        return number + 'rd'
      } else if (lastDigit > 3) {
        return number + 'th'
      }

    }
  }
});