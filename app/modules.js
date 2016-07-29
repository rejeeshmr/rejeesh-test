exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    this.greeting = str1;
    this.name = str2;

      return{
        greeting:this.greeting,
        name : this.name,
        sayIt:function(){
                return this.greeting+', '+this.name;
              }
      };

  }
};
