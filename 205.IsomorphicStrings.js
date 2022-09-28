var isIsomorphic = function (s, t) {
  let obj1 = {},
    obj2 = {};
  for (let i = 0; i < s.length; i++) {
    if (obj1[s[i]] !== obj2[t[i]]) {
      return false;
    } else {
      obj1[s[i]] = i;
      obj2[t[i]] = i;
    }
  }
  return true;
};

const s1 = "egg",
  t1 = "add";

const s2 = "foo",
  t2 = "bar";

const s3 = "paper",
  t3 = "title";

console.log(isIsomorphic(t1, s1));
console.log(isIsomorphic(s2, t2));
console.log(isIsomorphic(s3, t3));

// Result 

// true
// false
// true
