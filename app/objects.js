exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
     return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
     constructor.prototype.greeting=greeting;
  },

  iterate: function(obj) {
    var objData = [];
    var c=0;
     Object.keys(obj).forEach(function(key){
       if(obj.hasOwnProperty(key)){
         objData[c++]= key +': '+obj[key];
       }
     });
    return objData;
  }
};
