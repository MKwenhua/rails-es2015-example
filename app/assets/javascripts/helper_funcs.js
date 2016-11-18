const extractValue = (keys, obj) => {
   if (!Array.isArray(keys)) throw new Error('Keys must be in array');

   let val = keys.reduce((ob, itm) => {
      ob.defined = ob.endVal[itm] !== undefined;
      if (ob.defined) {
         ob.endVal = ob.endVal[itm];
      }
      return ob
   }, { endVal: obj, defined: true });

   return val.defined ? val.endVal : null;
};

module.exports = {
   extractValue: extractValue
};
