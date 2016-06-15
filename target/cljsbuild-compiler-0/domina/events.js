// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.object');
goog.require('goog.object');
goog.require('goog.events');
goog.require('goog.events');
domina.events.Event = (function (){var obj6638 = {};return obj6638;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3478__auto__ = evt;if(and__3478__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3478__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4117__auto__ = (((evt == null))?null:evt);return (function (){var or__3490__auto__ = (domina.events.prevent_default[goog.typeOf(x__4117__auto__)]);if(or__3490__auto__)
{return or__3490__auto__;
} else
{var or__3490__auto____$1 = (domina.events.prevent_default["_"]);if(or__3490__auto____$1)
{return or__3490__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3478__auto__ = evt;if(and__3478__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3478__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4117__auto__ = (((evt == null))?null:evt);return (function (){var or__3490__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4117__auto__)]);if(or__3490__auto__)
{return or__3490__auto__;
} else
{var or__3490__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3490__auto____$1)
{return or__3490__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3478__auto__ = evt;if(and__3478__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3478__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4117__auto__ = (((evt == null))?null:evt);return (function (){var or__3490__auto__ = (domina.events.target[goog.typeOf(x__4117__auto__)]);if(or__3490__auto__)
{return or__3490__auto__;
} else
{var or__3490__auto____$1 = (domina.events.target["_"]);if(or__3490__auto____$1)
{return or__3490__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3478__auto__ = evt;if(and__3478__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3478__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4117__auto__ = (((evt == null))?null:evt);return (function (){var or__3490__auto__ = (domina.events.current_target[goog.typeOf(x__4117__auto__)]);if(or__3490__auto__)
{return or__3490__auto__;
} else
{var or__3490__auto____$1 = (domina.events.current_target["_"]);if(or__3490__auto____$1)
{return or__3490__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3478__auto__ = evt;if(and__3478__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3478__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4117__auto__ = (((evt == null))?null:evt);return (function (){var or__3490__auto__ = (domina.events.event_type[goog.typeOf(x__4117__auto__)]);if(or__3490__auto__)
{return or__3490__auto__;
} else
{var or__3490__auto____$1 = (domina.events.event_type["_"]);if(or__3490__auto____$1)
{return or__3490__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3478__auto__ = evt;if(and__3478__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3478__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4117__auto__ = (((evt == null))?null:evt);return (function (){var or__3490__auto__ = (domina.events.raw_event[goog.typeOf(x__4117__auto__)]);if(or__3490__auto__)
{return or__3490__auto__;
} else
{var or__3490__auto____$1 = (domina.events.raw_event["_"]);if(or__3490__auto____$1)
{return or__3490__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t6642 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t6642 = (function (create_listener_function,f,evt,meta6643){
this.create_listener_function = create_listener_function;
this.f = f;
this.evt = evt;
this.meta6643 = meta6643;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t6642.cljs$lang$type = true;
domina.events.t6642.cljs$lang$ctorStr = "domina.events/t6642";
domina.events.t6642.cljs$lang$ctorPrWriter = (function (this__4057__auto__,writer__4058__auto__,opt__4059__auto__){return cljs.core._write(writer__4058__auto__,"domina.events/t6642");
});
domina.events.t6642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6644,meta6643__$1){var self__ = this;
var _6644__$1 = this;return (new domina.events.t6642(self__.create_listener_function,self__.f,self__.evt,meta6643__$1));
});
domina.events.t6642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6644){var self__ = this;
var _6644__$1 = this;return self__.meta6643;
});
domina.events.t6642.prototype.domina$events$Event$ = true;
domina.events.t6642.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t6642.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t6642.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t6642.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t6642.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t6642.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t6642.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4423__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4423__auto__))
{var val = temp__4423__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t6642.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3490__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3490__auto__))
{return or__3490__auto__;
} else
{return not_found;
}
});
domina.events.__GT_t6642 = (function __GT_t6642(create_listener_function__$1,f__$1,evt__$1,meta6643){return (new domina.events.t6642(create_listener_function__$1,f__$1,evt__$1,meta6643));
});
}
return (new domina.events.t6642(create_listener_function,f,evt,null));
})()) : f.call(null,(function (){if(typeof domina.events.t6642 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t6642 = (function (create_listener_function,f,evt,meta6643){
this.create_listener_function = create_listener_function;
this.f = f;
this.evt = evt;
this.meta6643 = meta6643;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t6642.cljs$lang$type = true;
domina.events.t6642.cljs$lang$ctorStr = "domina.events/t6642";
domina.events.t6642.cljs$lang$ctorPrWriter = (function (this__4057__auto__,writer__4058__auto__,opt__4059__auto__){return cljs.core._write(writer__4058__auto__,"domina.events/t6642");
});
domina.events.t6642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6644,meta6643__$1){var self__ = this;
var _6644__$1 = this;return (new domina.events.t6642(self__.create_listener_function,self__.f,self__.evt,meta6643__$1));
});
domina.events.t6642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6644){var self__ = this;
var _6644__$1 = this;return self__.meta6643;
});
domina.events.t6642.prototype.domina$events$Event$ = true;
domina.events.t6642.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t6642.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t6642.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t6642.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t6642.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t6642.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t6642.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4423__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4423__auto__))
{var val = temp__4423__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t6642.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3490__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3490__auto__))
{return or__3490__auto__;
} else
{return not_found;
}
});
domina.events.__GT_t6642 = (function __GT_t6642(create_listener_function__$1,f__$1,evt__$1,meta6643){return (new domina.events.t6642(create_listener_function__$1,f__$1,evt__$1,meta6643));
});
}
return (new domina.events.t6642(create_listener_function,f,evt,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4207__auto__ = (function iter__6649(s__6650){return (new cljs.core.LazySeq(null,(function (){var s__6650__$1 = s__6650;while(true){
var temp__4425__auto__ = cljs.core.seq(s__6650__$1);if(temp__4425__auto__)
{var s__6650__$2 = temp__4425__auto__;if(cljs.core.chunked_seq_QMARK_(s__6650__$2))
{var c__4205__auto__ = cljs.core.chunk_first(s__6650__$2);var size__4206__auto__ = cljs.core.count(c__4205__auto__);var b__6652 = cljs.core.chunk_buffer(size__4206__auto__);if((function (){var i__6651 = 0;while(true){
if((i__6651 < size__4206__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4205__auto__,i__6651);cljs.core.chunk_append(b__6652,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__6653 = (i__6651 + 1);
i__6651 = G__6653;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__6652),iter__6649(cljs.core.chunk_rest(s__6650__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__6652),null);
}
} else
{var node = cljs.core.first(s__6650__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__6649(cljs.core.rest(s__6650__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4207__auto__(domina.nodes(content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.cljs$core$IFn$_invoke$arity$1(domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__6662 = cljs.core.seq(domina.nodes(content));var chunk__6663 = null;var count__6664 = 0;var i__6665 = 0;while(true){
if((i__6665 < count__6664))
{var node = chunk__6663.cljs$core$IIndexed$_nth$arity$2(null,i__6665);goog.events.removeAll(node);
{
var G__6670 = seq__6662;
var G__6671 = chunk__6663;
var G__6672 = count__6664;
var G__6673 = (i__6665 + 1);
seq__6662 = G__6670;
chunk__6663 = G__6671;
count__6664 = G__6672;
i__6665 = G__6673;
continue;
}
} else
{var temp__4425__auto__ = cljs.core.seq(seq__6662);if(temp__4425__auto__)
{var seq__6662__$1 = temp__4425__auto__;if(cljs.core.chunked_seq_QMARK_(seq__6662__$1))
{var c__4238__auto__ = cljs.core.chunk_first(seq__6662__$1);{
var G__6674 = cljs.core.chunk_rest(seq__6662__$1);
var G__6675 = c__4238__auto__;
var G__6676 = cljs.core.count(c__4238__auto__);
var G__6677 = 0;
seq__6662 = G__6674;
chunk__6663 = G__6675;
count__6664 = G__6676;
i__6665 = G__6677;
continue;
}
} else
{var node = cljs.core.first(seq__6662__$1);goog.events.removeAll(node);
{
var G__6678 = cljs.core.next(seq__6662__$1);
var G__6679 = null;
var G__6680 = 0;
var G__6681 = 0;
seq__6662 = G__6678;
chunk__6663 = G__6679;
count__6664 = G__6680;
i__6665 = G__6681;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__6666 = cljs.core.seq(domina.nodes(content));var chunk__6667 = null;var count__6668 = 0;var i__6669 = 0;while(true){
if((i__6669 < count__6668))
{var node = chunk__6667.cljs$core$IIndexed$_nth$arity$2(null,i__6669);goog.events.removeAll(node,type__$1);
{
var G__6682 = seq__6666;
var G__6683 = chunk__6667;
var G__6684 = count__6668;
var G__6685 = (i__6669 + 1);
seq__6666 = G__6682;
chunk__6667 = G__6683;
count__6668 = G__6684;
i__6669 = G__6685;
continue;
}
} else
{var temp__4425__auto__ = cljs.core.seq(seq__6666);if(temp__4425__auto__)
{var seq__6666__$1 = temp__4425__auto__;if(cljs.core.chunked_seq_QMARK_(seq__6666__$1))
{var c__4238__auto__ = cljs.core.chunk_first(seq__6666__$1);{
var G__6686 = cljs.core.chunk_rest(seq__6666__$1);
var G__6687 = c__4238__auto__;
var G__6688 = cljs.core.count(c__4238__auto__);
var G__6689 = 0;
seq__6666 = G__6686;
chunk__6667 = G__6687;
count__6668 = G__6688;
i__6669 = G__6689;
continue;
}
} else
{var node = cljs.core.first(seq__6666__$1);goog.events.removeAll(node,type__$1);
{
var G__6690 = cljs.core.next(seq__6666__$1);
var G__6691 = null;
var G__6692 = 0;
var G__6693 = 0;
seq__6666 = G__6690;
chunk__6667 = G__6691;
count__6668 = G__6692;
i__6669 = G__6693;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.cljs$core$IFn$_invoke$arity$2(n,cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina/events.cljs"], null)));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4423__auto__ = n.parentNode;if(cljs.core.truth_(temp__4423__auto__))
{var parent = temp__4423__auto__;{
var G__6694 = parent;
var G__6695 = cljs.core.cons(parent,so_far);
n = G__6694;
so_far = G__6695;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){evt.target = domina.single_node(source);
var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__6704_6712 = cljs.core.seq(ancestors);var chunk__6705_6713 = null;var count__6706_6714 = 0;var i__6707_6715 = 0;while(true){
if((i__6707_6715 < count__6706_6714))
{var n_6716 = chunk__6705_6713.cljs$core$IIndexed$_nth$arity$2(null,i__6707_6715);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_6716;
goog.events.fireListeners(n_6716,evt.type,true,evt);
}
{
var G__6717 = seq__6704_6712;
var G__6718 = chunk__6705_6713;
var G__6719 = count__6706_6714;
var G__6720 = (i__6707_6715 + 1);
seq__6704_6712 = G__6717;
chunk__6705_6713 = G__6718;
count__6706_6714 = G__6719;
i__6707_6715 = G__6720;
continue;
}
} else
{var temp__4425__auto___6721 = cljs.core.seq(seq__6704_6712);if(temp__4425__auto___6721)
{var seq__6704_6722__$1 = temp__4425__auto___6721;if(cljs.core.chunked_seq_QMARK_(seq__6704_6722__$1))
{var c__4238__auto___6723 = cljs.core.chunk_first(seq__6704_6722__$1);{
var G__6724 = cljs.core.chunk_rest(seq__6704_6722__$1);
var G__6725 = c__4238__auto___6723;
var G__6726 = cljs.core.count(c__4238__auto___6723);
var G__6727 = 0;
seq__6704_6712 = G__6724;
chunk__6705_6713 = G__6725;
count__6706_6714 = G__6726;
i__6707_6715 = G__6727;
continue;
}
} else
{var n_6728 = cljs.core.first(seq__6704_6722__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_6728;
goog.events.fireListeners(n_6728,evt.type,true,evt);
}
{
var G__6729 = cljs.core.next(seq__6704_6722__$1);
var G__6730 = null;
var G__6731 = 0;
var G__6732 = 0;
seq__6704_6712 = G__6729;
chunk__6705_6713 = G__6730;
count__6706_6714 = G__6731;
i__6707_6715 = G__6732;
continue;
}
}
} else
{}
}
break;
}
var seq__6708_6733 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__6709_6734 = null;var count__6710_6735 = 0;var i__6711_6736 = 0;while(true){
if((i__6711_6736 < count__6710_6735))
{var n_6737 = chunk__6709_6734.cljs$core$IIndexed$_nth$arity$2(null,i__6711_6736);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_6737;
goog.events.fireListeners(n_6737,evt.type,false,evt);
}
{
var G__6738 = seq__6708_6733;
var G__6739 = chunk__6709_6734;
var G__6740 = count__6710_6735;
var G__6741 = (i__6711_6736 + 1);
seq__6708_6733 = G__6738;
chunk__6709_6734 = G__6739;
count__6710_6735 = G__6740;
i__6711_6736 = G__6741;
continue;
}
} else
{var temp__4425__auto___6742 = cljs.core.seq(seq__6708_6733);if(temp__4425__auto___6742)
{var seq__6708_6743__$1 = temp__4425__auto___6742;if(cljs.core.chunked_seq_QMARK_(seq__6708_6743__$1))
{var c__4238__auto___6744 = cljs.core.chunk_first(seq__6708_6743__$1);{
var G__6745 = cljs.core.chunk_rest(seq__6708_6743__$1);
var G__6746 = c__4238__auto___6744;
var G__6747 = cljs.core.count(c__4238__auto___6744);
var G__6748 = 0;
seq__6708_6733 = G__6745;
chunk__6709_6734 = G__6746;
count__6710_6735 = G__6747;
i__6711_6736 = G__6748;
continue;
}
} else
{var n_6749 = cljs.core.first(seq__6708_6743__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_6749;
goog.events.fireListeners(n_6749,evt.type,false,evt);
}
{
var G__6750 = cljs.core.next(seq__6708_6743__$1);
var G__6751 = null;
var G__6752 = 0;
var G__6753 = 0;
seq__6708_6733 = G__6750;
chunk__6709_6734 = G__6751;
count__6710_6735 = G__6752;
i__6711_6736 = G__6753;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3478__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3478__auto__))
{return o.dispatchEvent;
} else
{return and__3478__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__6760_6766 = cljs.core.seq(evt_map);var chunk__6761_6767 = null;var count__6762_6768 = 0;var i__6763_6769 = 0;while(true){
if((i__6763_6769 < count__6762_6768))
{var vec__6764_6770 = chunk__6761_6767.cljs$core$IIndexed$_nth$arity$2(null,i__6763_6769);var k_6771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6764_6770,0,null);var v_6772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6764_6770,1,null);(evt[k_6771] = v_6772);
{
var G__6773 = seq__6760_6766;
var G__6774 = chunk__6761_6767;
var G__6775 = count__6762_6768;
var G__6776 = (i__6763_6769 + 1);
seq__6760_6766 = G__6773;
chunk__6761_6767 = G__6774;
count__6762_6768 = G__6775;
i__6763_6769 = G__6776;
continue;
}
} else
{var temp__4425__auto___6777 = cljs.core.seq(seq__6760_6766);if(temp__4425__auto___6777)
{var seq__6760_6778__$1 = temp__4425__auto___6777;if(cljs.core.chunked_seq_QMARK_(seq__6760_6778__$1))
{var c__4238__auto___6779 = cljs.core.chunk_first(seq__6760_6778__$1);{
var G__6780 = cljs.core.chunk_rest(seq__6760_6778__$1);
var G__6781 = c__4238__auto___6779;
var G__6782 = cljs.core.count(c__4238__auto___6779);
var G__6783 = 0;
seq__6760_6766 = G__6780;
chunk__6761_6767 = G__6781;
count__6762_6768 = G__6782;
i__6763_6769 = G__6783;
continue;
}
} else
{var vec__6765_6784 = cljs.core.first(seq__6760_6778__$1);var k_6785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6765_6784,0,null);var v_6786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6765_6784,1,null);(evt[k_6785] = v_6786);
{
var G__6787 = cljs.core.next(seq__6760_6778__$1);
var G__6788 = null;
var G__6789 = 0;
var G__6790 = 0;
seq__6760_6766 = G__6787;
chunk__6761_6767 = G__6788;
count__6762_6768 = G__6789;
i__6763_6769 = G__6790;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_(source)))
{return domina.events.dispatch_event_target_BANG_(source,evt);
} else
{return domina.events.dispatch_browser_BANG_(source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__6791_SHARP_){return goog.events.getListeners(p1__6791_SHARP_,type__$1,false);
}),domina.nodes(content));
});
