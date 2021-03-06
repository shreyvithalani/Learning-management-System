// Compiled by ClojureScript 0.0-2173
goog.provide('clojure.core.reducers');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.core');
clojure.core.reducers.fjtask = (function fjtask(f){return f;
});
clojure.core.reducers.fjinvoke = (function fjinvoke(f){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
clojure.core.reducers.fjfork = (function fjfork(task){return task;
});
clojure.core.reducers.fjjoin = (function fjjoin(task){return (task.cljs$core$IFn$_invoke$arity$0 ? task.cljs$core$IFn$_invoke$arity$0() : task.call(null));
});
/**
* Like core/reduce except:
* When init is not provided, (f) is used.
* Maps are reduced with reduce-kv
*/
clojure.core.reducers.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){return reduce.cljs$core$IFn$_invoke$arity$3(f,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),coll);
});
var reduce__3 = (function (f,init,coll){if(cljs.core.map_QMARK_(coll))
{return cljs.core._kv_reduce(coll,f,init);
} else
{if((coll == null))
{return init;
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,init);
} else
{if(cljs.core.constant$keyword$7)
{return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(coll,f,init);
} else
{return null;
}
}
}
}
});
reduce = function(f,init,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,init);
case 3:
return reduce__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
clojure.core.reducers.CollFold = (function (){var obj5117 = {};return obj5117;
})();
clojure.core.reducers.coll_fold = (function coll_fold(coll,n,combinef,reducef){if((function (){var and__3478__auto__ = coll;if(and__3478__auto__)
{return coll.clojure$core$reducers$CollFold$coll_fold$arity$4;
} else
{return and__3478__auto__;
}
})())
{return coll.clojure$core$reducers$CollFold$coll_fold$arity$4(coll,n,combinef,reducef);
} else
{var x__4117__auto__ = (((coll == null))?null:coll);return (function (){var or__3490__auto__ = (clojure.core.reducers.coll_fold[goog.typeOf(x__4117__auto__)]);if(or__3490__auto__)
{return or__3490__auto__;
} else
{var or__3490__auto____$1 = (clojure.core.reducers.coll_fold["_"]);if(or__3490__auto____$1)
{return or__3490__auto____$1;
} else
{throw cljs.core.missing_protocol("CollFold.coll-fold",coll);
}
}
})().call(null,coll,n,combinef,reducef);
}
});
/**
* Reduces a collection using a (potentially parallel) reduce-combine
* strategy. The collection is partitioned into groups of approximately
* n (default 512), each of which is reduced with reducef (with a seed
* value obtained by calling (combinef) with no arguments). The results
* of these reductions are then reduced with combinef (default
* reducef). combinef must be associative, and, when called with no
* arguments, (combinef) must produce its identity element. These
* operations may be performed in parallel, but the results will
* preserve order.
* 
* Note: Performing operations in parallel is currently not implemented.
*/
clojure.core.reducers.fold = (function() {
var fold = null;
var fold__2 = (function (reducef,coll){return fold.cljs$core$IFn$_invoke$arity$3(reducef,reducef,coll);
});
var fold__3 = (function (combinef,reducef,coll){return fold.cljs$core$IFn$_invoke$arity$4(512,combinef,reducef,coll);
});
var fold__4 = (function (n,combinef,reducef,coll){return clojure.core.reducers.coll_fold(coll,n,combinef,reducef);
});
fold = function(n,combinef,reducef,coll){
switch(arguments.length){
case 2:
return fold__2.call(this,n,combinef);
case 3:
return fold__3.call(this,n,combinef,reducef);
case 4:
return fold__4.call(this,n,combinef,reducef,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fold.cljs$core$IFn$_invoke$arity$2 = fold__2;
fold.cljs$core$IFn$_invoke$arity$3 = fold__3;
fold.cljs$core$IFn$_invoke$arity$4 = fold__4;
return fold;
})()
;
/**
* Given a reducible collection, and a transformation function xf,
* returns a reducible collection, where any supplied reducing
* fn will be transformed by xf. xf is a function of reducing fn to
* reducing fn.
*/
clojure.core.reducers.reducer = (function reducer(coll,xf){if(typeof clojure.core.reducers.t5121 !== 'undefined')
{} else
{
/**
* @constructor
*/
clojure.core.reducers.t5121 = (function (reducer,coll,xf,meta5122){
this.reducer = reducer;
this.coll = coll;
this.xf = xf;
this.meta5122 = meta5122;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t5121.cljs$lang$type = true;
clojure.core.reducers.t5121.cljs$lang$ctorStr = "clojure.core.reducers/t5121";
clojure.core.reducers.t5121.cljs$lang$ctorPrWriter = (function (this__4057__auto__,writer__4058__auto__,opt__4059__auto__){return cljs.core._write(writer__4058__auto__,"clojure.core.reducers/t5121");
});
clojure.core.reducers.t5121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5123,meta5122__$1){var self__ = this;
var _5123__$1 = this;return (new clojure.core.reducers.t5121(self__.reducer,self__.coll,self__.xf,meta5122__$1));
});
clojure.core.reducers.t5121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5123){var self__ = this;
var _5123__$1 = this;return self__.meta5122;
});
clojure.core.reducers.t5121.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){var self__ = this;
var this$__$1 = this;return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(this$__$1,f1,(f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null)));
});
clojure.core.reducers.t5121.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){var self__ = this;
var ___$1 = this;return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.coll,(self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(f1) : self__.xf.call(null,f1)),init);
});
clojure.core.reducers.__GT_t5121 = (function __GT_t5121(reducer__$1,coll__$1,xf__$1,meta5122){return (new clojure.core.reducers.t5121(reducer__$1,coll__$1,xf__$1,meta5122));
});
}
return (new clojure.core.reducers.t5121(reducer,coll,xf,null));
});
/**
* Given a foldable collection, and a transformation function xf,
* returns a foldable collection, where any supplied reducing
* fn will be transformed by xf. xf is a function of reducing fn to
* reducing fn.
*/
clojure.core.reducers.folder = (function folder(coll,xf){if(typeof clojure.core.reducers.t5127 !== 'undefined')
{} else
{
/**
* @constructor
*/
clojure.core.reducers.t5127 = (function (folder,coll,xf,meta5128){
this.folder = folder;
this.coll = coll;
this.xf = xf;
this.meta5128 = meta5128;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t5127.cljs$lang$type = true;
clojure.core.reducers.t5127.cljs$lang$ctorStr = "clojure.core.reducers/t5127";
clojure.core.reducers.t5127.cljs$lang$ctorPrWriter = (function (this__4057__auto__,writer__4058__auto__,opt__4059__auto__){return cljs.core._write(writer__4058__auto__,"clojure.core.reducers/t5127");
});
clojure.core.reducers.t5127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5129,meta5128__$1){var self__ = this;
var _5129__$1 = this;return (new clojure.core.reducers.t5127(self__.folder,self__.coll,self__.xf,meta5128__$1));
});
clojure.core.reducers.t5127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5129){var self__ = this;
var _5129__$1 = this;return self__.meta5128;
});
clojure.core.reducers.t5127.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f1){var self__ = this;
var ___$1 = this;return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.coll,(self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(f1) : self__.xf.call(null,f1)),(f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null)));
});
clojure.core.reducers.t5127.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){var self__ = this;
var ___$1 = this;return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.coll,(self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(f1) : self__.xf.call(null,f1)),init);
});
clojure.core.reducers.t5127.prototype.clojure$core$reducers$CollFold$ = true;
clojure.core.reducers.t5127.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (_,n,combinef,reducef){var self__ = this;
var ___$1 = this;return clojure.core.reducers.coll_fold(self__.coll,n,combinef,(self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(reducef) : self__.xf.call(null,reducef)));
});
clojure.core.reducers.__GT_t5127 = (function __GT_t5127(folder__$1,coll__$1,xf__$1,meta5128){return (new clojure.core.reducers.t5127(folder__$1,coll__$1,xf__$1,meta5128));
});
}
return (new clojure.core.reducers.t5127(folder,coll,xf,null));
});
/**
* Applies f to every value in the reduction of coll. Foldable.
*/
clojure.core.reducers.map = (function() {
var map = null;
var map__1 = (function (f){return (function (x__3907__auto__){return map.cljs$core$IFn$_invoke$arity$2(f,x__3907__auto__);
});
});
var map__2 = (function (f,coll){return clojure.core.reducers.folder(coll,(function (f1){return (function() {
var G__5130 = null;
var G__5130__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__5130__2 = (function (ret,v){return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(ret,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))) : f1.call(null,ret,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))));
});
var G__5130__3 = (function (ret,k,v){return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(ret,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v))) : f1.call(null,ret,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v))));
});
G__5130 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__5130__0.call(this);
case 2:
return G__5130__2.call(this,ret,k);
case 3:
return G__5130__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__5130;
})()
}));
});
map = function(f,coll){
switch(arguments.length){
case 1:
return map__1.call(this,f);
case 2:
return map__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$1 = map__1;
map.cljs$core$IFn$_invoke$arity$2 = map__2;
return map;
})()
;
/**
* Applies f to every value in the reduction of coll, concatenating the result
* colls of (f val). Foldable.
*/
clojure.core.reducers.mapcat = (function() {
var mapcat = null;
var mapcat__1 = (function (f){return (function (x__3907__auto__){return mapcat.cljs$core$IFn$_invoke$arity$2(f,x__3907__auto__);
});
});
var mapcat__2 = (function (f,coll){return clojure.core.reducers.folder(coll,(function (f1){return (function() {
var G__5131 = null;
var G__5131__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__5131__2 = (function (ret,v){return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(f1,ret,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
});
var G__5131__3 = (function (ret,k,v){return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(f1,ret,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v)));
});
G__5131 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__5131__0.call(this);
case 2:
return G__5131__2.call(this,ret,k);
case 3:
return G__5131__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__5131;
})()
}));
});
mapcat = function(f,coll){
switch(arguments.length){
case 1:
return mapcat__1.call(this,f);
case 2:
return mapcat__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$core$IFn$_invoke$arity$1 = mapcat__1;
mapcat.cljs$core$IFn$_invoke$arity$2 = mapcat__2;
return mapcat;
})()
;
/**
* Retains values in the reduction of coll for which (pred val)
* returns logical true. Foldable.
*/
clojure.core.reducers.filter = (function() {
var filter = null;
var filter__1 = (function (pred){return (function (x__3907__auto__){return filter.cljs$core$IFn$_invoke$arity$2(pred,x__3907__auto__);
});
});
var filter__2 = (function (pred,coll){return clojure.core.reducers.folder(coll,(function (f1){return (function() {
var G__5132 = null;
var G__5132__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__5132__2 = (function (ret,v){if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v))))
{return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(ret,v) : f1.call(null,ret,v));
} else
{return ret;
}
});
var G__5132__3 = (function (ret,k,v){if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v))))
{return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(ret,k,v) : f1.call(null,ret,k,v));
} else
{return ret;
}
});
G__5132 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__5132__0.call(this);
case 2:
return G__5132__2.call(this,ret,k);
case 3:
return G__5132__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__5132;
})()
}));
});
filter = function(pred,coll){
switch(arguments.length){
case 1:
return filter__1.call(this,pred);
case 2:
return filter__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter.cljs$core$IFn$_invoke$arity$1 = filter__1;
filter.cljs$core$IFn$_invoke$arity$2 = filter__2;
return filter;
})()
;
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat foldable
* collection.
*/
clojure.core.reducers.flatten = (function() {
var flatten = null;
var flatten__0 = (function (){return (function (x__3907__auto__){return flatten.cljs$core$IFn$_invoke$arity$1(x__3907__auto__);
});
});
var flatten__1 = (function (coll){return clojure.core.reducers.folder(coll,(function (f1){return (function() {
var G__5133 = null;
var G__5133__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__5133__2 = (function (ret,v){if(cljs.core.sequential_QMARK_(v))
{return flatten.cljs$core$IFn$_invoke$arity$1(v).cljs$core$IReduce$_reduce$arity$3(null,f1,ret);
} else
{return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(ret,v) : f1.call(null,ret,v));
}
});
G__5133 = function(ret,v){
switch(arguments.length){
case 0:
return G__5133__0.call(this);
case 2:
return G__5133__2.call(this,ret,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__5133;
})()
}));
});
flatten = function(coll){
switch(arguments.length){
case 0:
return flatten__0.call(this);
case 1:
return flatten__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
flatten.cljs$core$IFn$_invoke$arity$0 = flatten__0;
flatten.cljs$core$IFn$_invoke$arity$1 = flatten__1;
return flatten;
})()
;
/**
* Removes values in the reduction of coll for which (pred val)
* returns logical true. Foldable.
*/
clojure.core.reducers.remove = (function() {
var remove = null;
var remove__1 = (function (pred){return (function (x__3907__auto__){return remove.cljs$core$IFn$_invoke$arity$2(pred,x__3907__auto__);
});
});
var remove__2 = (function (pred,coll){return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
});
remove = function(pred,coll){
switch(arguments.length){
case 1:
return remove__1.call(this,pred);
case 2:
return remove__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove.cljs$core$IFn$_invoke$arity$1 = remove__1;
remove.cljs$core$IFn$_invoke$arity$2 = remove__2;
return remove;
})()
;
/**
* Ends the reduction of coll when (pred val) returns logical false.
*/
clojure.core.reducers.take_while = (function() {
var take_while = null;
var take_while__1 = (function (pred){return (function (x__3907__auto__){return take_while.cljs$core$IFn$_invoke$arity$2(pred,x__3907__auto__);
});
});
var take_while__2 = (function (pred,coll){return clojure.core.reducers.reducer(coll,(function (f1){return (function() {
var G__5134 = null;
var G__5134__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__5134__2 = (function (ret,v){if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v))))
{return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(ret,v) : f1.call(null,ret,v));
} else
{return cljs.core.reduced(ret);
}
});
var G__5134__3 = (function (ret,k,v){if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v))))
{return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(ret,k,v) : f1.call(null,ret,k,v));
} else
{return cljs.core.reduced(ret);
}
});
G__5134 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__5134__0.call(this);
case 2:
return G__5134__2.call(this,ret,k);
case 3:
return G__5134__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__5134;
})()
}));
});
take_while = function(pred,coll){
switch(arguments.length){
case 1:
return take_while__1.call(this,pred);
case 2:
return take_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_while.cljs$core$IFn$_invoke$arity$1 = take_while__1;
take_while.cljs$core$IFn$_invoke$arity$2 = take_while__2;
return take_while;
})()
;
/**
* Ends the reduction of coll after consuming n values.
*/
clojure.core.reducers.take = (function() {
var take = null;
var take__1 = (function (n){return (function (x__3907__auto__){return take.cljs$core$IFn$_invoke$arity$2(n,x__3907__auto__);
});
});
var take__2 = (function (n,coll){return clojure.core.reducers.reducer(coll,(function (f1){var cnt = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);return (function() {
var G__5135 = null;
var G__5135__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__5135__2 = (function (ret,v){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);
if((cljs.core.deref(cnt) < 0))
{return cljs.core.reduced(ret);
} else
{return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(ret,v) : f1.call(null,ret,v));
}
});
var G__5135__3 = (function (ret,k,v){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);
if((cljs.core.deref(cnt) < 0))
{return cljs.core.reduced(ret);
} else
{return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(ret,k,v) : f1.call(null,ret,k,v));
}
});
G__5135 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__5135__0.call(this);
case 2:
return G__5135__2.call(this,ret,k);
case 3:
return G__5135__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__5135;
})()
}));
});
take = function(n,coll){
switch(arguments.length){
case 1:
return take__1.call(this,n);
case 2:
return take__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$1 = take__1;
take.cljs$core$IFn$_invoke$arity$2 = take__2;
return take;
})()
;
/**
* Elides the first n values from the reduction of coll.
*/
clojure.core.reducers.drop = (function() {
var drop = null;
var drop__1 = (function (n){return (function (x__3907__auto__){return drop.cljs$core$IFn$_invoke$arity$2(n,x__3907__auto__);
});
});
var drop__2 = (function (n,coll){return clojure.core.reducers.reducer(coll,(function (f1){var cnt = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);return (function() {
var G__5136 = null;
var G__5136__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__5136__2 = (function (ret,v){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);
if((cljs.core.deref(cnt) < 0))
{return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(ret,v) : f1.call(null,ret,v));
} else
{return ret;
}
});
var G__5136__3 = (function (ret,k,v){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);
if((cljs.core.deref(cnt) < 0))
{return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(ret,k,v) : f1.call(null,ret,k,v));
} else
{return ret;
}
});
G__5136 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__5136__0.call(this);
case 2:
return G__5136__2.call(this,ret,k);
case 3:
return G__5136__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__5136;
})()
}));
});
drop = function(n,coll){
switch(arguments.length){
case 1:
return drop__1.call(this,n);
case 2:
return drop__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop.cljs$core$IFn$_invoke$arity$1 = drop__1;
drop.cljs$core$IFn$_invoke$arity$2 = drop__2;
return drop;
})()
;

/**
* @constructor
*/
clojure.core.reducers.Cat = (function (cnt,left,right){
this.cnt = cnt;
this.left = left;
this.right = right;
this.cljs$lang$protocol_mask$partition0$ = 8912898;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.Cat.cljs$lang$type = true;
clojure.core.reducers.Cat.cljs$lang$ctorStr = "clojure.core.reducers/Cat";
clojure.core.reducers.Cat.cljs$lang$ctorPrWriter = (function (this__4057__auto__,writer__4058__auto__,opt__4059__auto__){return cljs.core._write(writer__4058__auto__,"clojure.core.reducers/Cat");
});
clojure.core.reducers.Cat.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.cnt;
});
clojure.core.reducers.Cat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(self__.left),cljs.core.seq(self__.right));
});
clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){var self__ = this;
var this$__$1 = this;return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(this$__$1,f1,(f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null)));
});
clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){var self__ = this;
var ___$1 = this;return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.right,f1,cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.left,f1,init));
});
clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$ = true;
clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (this$,n,combinef,reducef){var self__ = this;
var this$__$1 = this;return cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(this$__$1,reducef);
});
clojure.core.reducers.__GT_Cat = (function __GT_Cat(cnt,left,right){return (new clojure.core.reducers.Cat(cnt,left,right));
});
/**
* A high-performance combining fn that yields the catenation of the
* reduced values. The result is reducible, foldable, seqable and
* counted, providing the identity collections are reducible, seqable
* and counted. The single argument version will build a combining fn
* with the supplied identity constructor. Tests for identity
* with (zero? (count x)). See also foldcat.
*/
clojure.core.reducers.cat = (function() {
var cat = null;
var cat__0 = (function (){return [];
});
var cat__1 = (function (ctor){return (function() {
var G__5137 = null;
var G__5137__0 = (function (){return (ctor.cljs$core$IFn$_invoke$arity$0 ? ctor.cljs$core$IFn$_invoke$arity$0() : ctor.call(null));
});
var G__5137__2 = (function (left,right){return cat.cljs$core$IFn$_invoke$arity$2(left,right);
});
G__5137 = function(left,right){
switch(arguments.length){
case 0:
return G__5137__0.call(this);
case 2:
return G__5137__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__5137;
})()
});
var cat__2 = (function (left,right){if((cljs.core.count(left) === 0))
{return right;
} else
{if((cljs.core.count(right) === 0))
{return left;
} else
{if(cljs.core.constant$keyword$7)
{return (new clojure.core.reducers.Cat((cljs.core.count(left) + cljs.core.count(right)),left,right));
} else
{return null;
}
}
}
});
cat = function(left,right){
switch(arguments.length){
case 0:
return cat__0.call(this);
case 1:
return cat__1.call(this,left);
case 2:
return cat__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cat.cljs$core$IFn$_invoke$arity$0 = cat__0;
cat.cljs$core$IFn$_invoke$arity$1 = cat__1;
cat.cljs$core$IFn$_invoke$arity$2 = cat__2;
return cat;
})()
;
/**
* .adds x to acc and returns acc
*/
clojure.core.reducers.append_BANG_ = (function append_BANG_(acc,x){var G__5139 = acc;G__5139.push(x);
return G__5139;
});
/**
* Equivalent to (fold cat append! coll)
*/
clojure.core.reducers.foldcat = (function foldcat(coll){return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3(clojure.core.reducers.cat,clojure.core.reducers.append_BANG_,coll);
});
/**
* Builds a combining fn out of the supplied operator and identity
* constructor. op must be associative and ctor called with no args
* must return an identity value for it.
*/
clojure.core.reducers.monoid = (function monoid(op,ctor){return (function() {
var m = null;
var m__0 = (function (){return (ctor.cljs$core$IFn$_invoke$arity$0 ? ctor.cljs$core$IFn$_invoke$arity$0() : ctor.call(null));
});
var m__2 = (function (a,b){return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(a,b) : op.call(null,a,b));
});
m = function(a,b){
switch(arguments.length){
case 0:
return m__0.call(this);
case 2:
return m__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
m.cljs$core$IFn$_invoke$arity$0 = m__0;
m.cljs$core$IFn$_invoke$arity$2 = m__2;
return m;
})()
});
clojure.core.reducers.foldvec = (function foldvec(v,n,combinef,reducef){if(cljs.core.empty_QMARK_(v))
{return (combinef.cljs$core$IFn$_invoke$arity$0 ? combinef.cljs$core$IFn$_invoke$arity$0() : combinef.call(null));
} else
{if((cljs.core.count(v) <= n))
{return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(reducef,(combinef.cljs$core$IFn$_invoke$arity$0 ? combinef.cljs$core$IFn$_invoke$arity$0() : combinef.call(null)),v);
} else
{if(cljs.core.constant$keyword$7)
{var split = cljs.core.quot(cljs.core.count(v),2);var v1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,0,split);var v2 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,split,cljs.core.count(v));var fc = ((function (split,v1,v2){
return (function (child){return ((function (split,v1,v2){
return (function (){return foldvec(child,n,combinef,reducef);
});
;})(split,v1,v2))
});})(split,v1,v2))
;return clojure.core.reducers.fjinvoke((function (){var f1 = fc(v1);var t2 = clojure.core.reducers.fjtask(fc(v2));clojure.core.reducers.fjfork(t2);
return (combinef.cljs$core$IFn$_invoke$arity$2 ? combinef.cljs$core$IFn$_invoke$arity$2((f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null)),clojure.core.reducers.fjjoin(t2)) : combinef.call(null,(f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null)),clojure.core.reducers.fjjoin(t2)));
}));
} else
{return null;
}
}
}
});
(clojure.core.reducers.CollFold["null"] = true);
(clojure.core.reducers.coll_fold["null"] = (function (coll,n,combinef,reducef){return (combinef.cljs$core$IFn$_invoke$arity$0 ? combinef.cljs$core$IFn$_invoke$arity$0() : combinef.call(null));
}));
(clojure.core.reducers.CollFold["object"] = true);
(clojure.core.reducers.coll_fold["object"] = (function (coll,n,combinef,reducef){return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(reducef,(combinef.cljs$core$IFn$_invoke$arity$0 ? combinef.cljs$core$IFn$_invoke$arity$0() : combinef.call(null)),coll);
}));
cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$ = true;
cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (v,n,combinef,reducef){var v__$1 = this;return clojure.core.reducers.foldvec(v__$1,n,combinef,reducef);
});
