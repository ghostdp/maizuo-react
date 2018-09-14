
var mzStorage = {
	setSession(key , value){
		window.sessionStorage.setItem(key,value);
	},
	setLocal(key , value){
		window.localStorage.setItem(key,value);
	},
	getSession(key){
		return window.sessionStorage.getItem(key);
	},
	getLocal(key){
		return window.localStorage.getItem(key);
	},
	removeSession(){

	},
	removeLocal(){

	}
};

var mzLogger = {}

var mzType = {};

var mzError = {};

var mzValidate = {};

export {
	mzStorage,
	mzLogger,
	mzError,
	mzValidate
};