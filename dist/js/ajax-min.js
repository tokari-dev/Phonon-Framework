"use strict";!function(t,e,r){function n(t){if("string"!=typeof t.baseUrl)throw new Error("baseUrl must be a string");if("undefined"!=typeof t.timeout&&"number"!=typeof t.timeout)throw new Error("timeout must be a number (duration)");if("string"!=typeof t.dataType)throw new Error("dataType must be a string");if("undefined"!=typeof t.crossDomain&&"boolean"!=typeof t.crossDomain)throw new Error("crossDomain must be a boolean or undefined");this.baseUrl=t.baseUrl,this.timeout=t.timeout?t.timeout:null,this.dataType=t.dataType.toLowerCase(),this.crossDomain=t.crossDomain?!0:!1,this.currentXhr=null}n.prototype.createXhr=function(){var t=null;try{t=new XMLHttpRequest,"withCredentials"in t&&this.crossDomain&&(t.withCredentials=!0)}catch(e){console.error(e)}return t},n.prototype.getXhr=function(){return this.currentXhr},n.prototype.send=function(e,r,n,o,i){if("string"!=typeof e)throw new Error("method must be a string");if("string"!=typeof r)throw new Error("url must be a string");if("string"!=typeof n&&"object"!=typeof n)throw new Error("data must be a string or null");if("function"!=typeof o)throw new Error("successCallback must be a function");this.currentXhr=this.createXhr();var s=this,u="NO_INTERNET_ACCESS";this.currentXhr?(s.currentXhr.open(e,this.baseUrl+r,!0),"xml"===s.dataType&&s.currentXhr.overrideMimeType("application/xml"),s.currentXhr.onreadystatechange=function(e){if(4===s.currentXhr.readyState){if(200===s.currentXhr.status)if("json"===s.dataType){var r=s.toJSON(s.currentXhr.responseText);"JSON_MALFORMED"!==r?o(r):"function"==typeof i&&i(r,e)}else o("xml"===s.dataType?s.currentXhr.responseXML:s.currentXhr.responseText);else"function"==typeof i&&t.setTimeout(function(){i(u,e)},1);s.currentXhr=null}},s.timeout&&(s.currentXhr.timeout=s.timeout,s.currentXhr.ontimeout=function(){u="TIMEOUT_EXCEEDED"}),s.currentXhr.send(n)):"function"==typeof i&&(u="XMLHTTPREQUEST_UNAVAILABLE",i(u))},n.prototype.toJSON=function(t){var e;try{e=JSON.parse(t)}catch(r){e="JSON_MALFORMED"}return e},n.prototype.get=function(t,e,r,n){this.send("get",t,e,r,n)},n.prototype.post=function(t,e,r,n){this.send("post",t,e,r,n)},n.prototype.put=function(t,e,r,n){this.send("put",t,e,r,n)},n.prototype.del=function(t,e,r,n){this.send("delete",t,e,r,n)},n.prototype.cancel=function(){this.currentXhr&&this.currentXhr.abort()},r.Ajax=n,t.Phonon=r,"function"==typeof define&&define.amd?define(function(){return r.returnGlobalNamespace===!0?r:r.Ajax}):"object"==typeof module&&module.exports&&(module.exports=r.returnGlobalNamespace===!0?r:r.Ajax)}(window,document,window.Phonon||{});