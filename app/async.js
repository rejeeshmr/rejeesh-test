exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    return new Promise(function (resolve, reject) {
      if (value) resolve(value);
      else reject("error");
    });
  },

  manipulateRemoteData: function (url) {
    var names = [];
    return new Promise(function (resolve, reject) {
        $.getJSON(url, function (data) {

         $.each(data.people,function(key, value){
           names.push(value.name);
         });
         names.sort();

      }).success(function(){
          resolve(names);
        })
        .error(function(){
          reject("Error message test1");
        });


    });
  }
}
