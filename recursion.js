function productOfArray(arr) {
  if(arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1))
}

function contains (obj, val) {
  for(let key in obj) {
    if (obj[key] === val) {
      return true;
    } else if(typeof obj[key] === 'object') {
      let res = contains(obj[key], val)
      if(res) return res;
    }
  }
  return false;
}

function stringy(p, b) {
	if(Array.isArray(p) && p.length === 0) {
	    return p
	}
	if (b && Array.isArray(b) && b.length === 0) {
		return p;
	}
	
	var keys = b || Object.keys(p);
	var key = keys.pop();
	var value = p[key];
	
	if (typeof value === 'object') {
		p[key] = stringy(value);
	} 
	 else if (Array.isArray(value)) {
		p[key] = value.map(function(item) {
			return stringy(value);
		});
	} else if (typeof value === 'number') {
		p[key] = String(value);
	} else {
		p[key] = value;
	}
	
	return stringy(p, keys);
}
function stringifyNumbers(obj) {
	return stringy(typeof obj === 'object' ? { ...obj } : obj)
}


function search(arr, val) {
  if (arr.length === 0) 
  {return -1;
  } else if (arr[0] === val) {
    return 0;
  } else {
    let res = search(arr.slice(1), val)
    if (res < 0) {
      return res
    } else {
      return res + 1
    }
  }
}

function bSearch(array, value, l, r) {
if (l > r) return -1;

var midPoint = Math.floor((l + r) / 2);

if (value == array[midPoint])
    return midPoint;

else if (value > array[midPoint])
    return bSearch(array, value, midPoint + 1, r);

else
    return bSearch(array, value, l, midPoint - 1);
}

function binarySearch(array, value) {
    return bSearch(array, value, 0, array.length);
}

function collectStrings(object) {
  const strArr = []
  function cs (obj) {
  for(let key in obj) {
    if (typeof obj[key] === "string") {
      strArr.push(obj[key])
    } else if(typeof obj[key] === 'object') {
      return cs(obj[key])
    }
  }
  return strArr;
}

return cs(object)
}

