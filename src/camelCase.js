if(!String.prototype._camelCase){
	String.prototype._camelCase=(function(){
		"use strict";
		var length=function(x){
			return x.length;
		};
		var toLow=function(char){
			var code=char.charCodeAt();
			return String.fromCharCode(code+32);
		};
		var toUp=function(char){
			var code=char.charCodeAt();
			return String.fromCharCode(code-32);
		};
		var isLow=function(char){
			return char>='a'&&char<='z';
		};
		var isUp=function(char){
			return char>='A'&&char<='Z';
		};
		var process=function(string){
			var i=0,
			    str='',
			    words=[],
			    low,
			    up;
			while(1){
				if(isLow(string[i])||isUp(string[i])){
					low=isLow(string[i])?string[i]:toLow(string[i]);
					up=isUp(string[i])?string[i]:toUp(string[i]);
					str+=!length(words)?low:(!str?up:low);
				} else{
					if(str){
						words.push(str);
					}
					str='';
				}
				if(!string[++i]){
					words.push(str);
					break;
				}
			}  
			return words.join('');  
		};
		return function(){
			return process(this);
		};
	})();
}
