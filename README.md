# string-polyfill
This repository is about string-polyfill.
              
2018-09-26     
LinWei            
             
There is no doubt that JavaScript is an excellent programming language.    
But, unfortunately, I just can't get enough from its feature.     
[John-David Dalton](https://github.com/jdalton), the creator of [Lodash](https://lodash.com/), do well about extending some 
features        
about JavaScript and supporting some APIs. And now, I want to wirte the 
String part.     
      
```
String.prototype._camelCase
```       
[source](https://github.com/asilinwei/string-polyfill/blob/master/src/camelCase.js)     
see [_.camelCase](https://lodash.com/docs/4.17.10#camelCase) in lodash. 

Description:   
Convert string to [Camel case](https://en.wikipedia.org/wiki/Camel_case).     

Example:   
```
var string = 'Foo Bar';

string._camelCase()
// => 'fooBar'
``` 