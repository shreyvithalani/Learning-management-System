// Compiled by ClojureScript 0.0-2173
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_6185 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null));var table_section_wrapper_6186 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null));var cell_wrapper_6187 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null));domina.wrap_map = cljs.core.with_meta(cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$8,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_6187,opt_wrapper_6185,table_section_wrapper_6186,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null)),opt_wrapper_6185,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null)),table_section_wrapper_6186,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null)),table_section_wrapper_6186,cell_wrapper_6187,table_section_wrapper_6186,table_section_wrapper_6186]),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null));
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3478__auto__ = div.firstChild;if(cljs.core.truth_(and__3478__auto__))
{return div.firstChild.childNodes;
} else
{return and__3478__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null))));var seq__6192 = cljs.core.seq(tbody);var chunk__6193 = null;var count__6194 = 0;var i__6195 = 0;while(true){
if((i__6195 < count__6194))
{var child = chunk__6193.cljs$core$IIndexed$_nth$arity$2(null,i__6195);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__6196 = seq__6192;
var G__6197 = chunk__6193;
var G__6198 = count__6194;
var G__6199 = (i__6195 + 1);
seq__6192 = G__6196;
chunk__6193 = G__6197;
count__6194 = G__6198;
i__6195 = G__6199;
continue;
}
} else
{var temp__4425__auto__ = cljs.core.seq(seq__6192);if(temp__4425__auto__)
{var seq__6192__$1 = temp__4425__auto__;if(cljs.core.chunked_seq_QMARK_(seq__6192__$1))
{var c__4238__auto__ = cljs.core.chunk_first(seq__6192__$1);{
var G__6200 = cljs.core.chunk_rest(seq__6192__$1);
var G__6201 = c__4238__auto__;
var G__6202 = cljs.core.count(c__4238__auto__);
var G__6203 = 0;
seq__6192 = G__6200;
chunk__6193 = G__6201;
count__6194 = G__6202;
i__6195 = G__6203;
continue;
}
} else
{var child = cljs.core.first(seq__6192__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__6204 = cljs.core.next(seq__6192__$1);
var G__6205 = null;
var G__6206 = 0;
var G__6207 = 0;
seq__6192 = G__6204;
chunk__6193 = G__6205;
count__6194 = G__6206;
i__6195 = G__6207;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__6209 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$8.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6209,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6209,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6209,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__6210 = wrapper.lastChild;
var G__6211 = (level - 1);
wrapper = G__6210;
level = G__6211;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3478__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3478__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3478__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj6213 = {};return obj6213;
})();
domina.nodes = (function nodes(content){if((function (){var and__3478__auto__ = content;if(and__3478__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3478__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4117__auto__ = (((content == null))?null:content);return (function (){var or__3490__auto__ = (domina.nodes[goog.typeOf(x__4117__auto__)]);if(or__3490__auto__)
{return or__3490__auto__;
} else
{var or__3490__auto____$1 = (domina.nodes["_"]);if(or__3490__auto____$1)
{return or__3490__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3478__auto__ = nodeseq;if(and__3478__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3478__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4117__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3490__auto__ = (domina.single_node[goog.typeOf(x__4117__auto__)]);if(or__3490__auto__)
{return or__3490__auto__;
} else
{var or__3490__auto____$1 = (domina.single_node["_"]);if(or__3490__auto____$1)
{return or__3490__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3478__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3478__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3478__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__6214){
var mesg = cljs.core.seq(arglist__6214);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__6215){
var mesg = cljs.core.seq(arglist__6215);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(class_name))));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__6216){
var contents = cljs.core.seq(arglist__6216);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6217_SHARP_){return p1__6217_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__6218_SHARP_,p2__6219_SHARP_){return goog.dom.insertChildAt(p1__6218_SHARP_,p2__6219_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__6218_SHARP_,p2__6219_SHARP_){return goog.dom.insertChildAt(p1__6218_SHARP_,p2__6219_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__6221_SHARP_,p2__6220_SHARP_){return goog.dom.insertSiblingBefore(p2__6220_SHARP_,p1__6221_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__6221_SHARP_,p2__6220_SHARP_){return goog.dom.insertSiblingBefore(p2__6220_SHARP_,p1__6221_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__6223_SHARP_,p2__6222_SHARP_){return goog.dom.insertSiblingAfter(p2__6222_SHARP_,p1__6223_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__6223_SHARP_,p2__6222_SHARP_){return goog.dom.insertSiblingAfter(p2__6222_SHARP_,p1__6223_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__6225_SHARP_,p2__6224_SHARP_){return goog.dom.replaceNode(p2__6224_SHARP_,p1__6225_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__6225_SHARP_,p2__6224_SHARP_){return goog.dom.replaceNode(p2__6224_SHARP_,p1__6225_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__6230_6234 = cljs.core.seq(domina.nodes(content));var chunk__6231_6235 = null;var count__6232_6236 = 0;var i__6233_6237 = 0;while(true){
if((i__6233_6237 < count__6232_6236))
{var n_6238 = chunk__6231_6235.cljs$core$IIndexed$_nth$arity$2(null,i__6233_6237);goog.style.setStyle(n_6238,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__6239 = seq__6230_6234;
var G__6240 = chunk__6231_6235;
var G__6241 = count__6232_6236;
var G__6242 = (i__6233_6237 + 1);
seq__6230_6234 = G__6239;
chunk__6231_6235 = G__6240;
count__6232_6236 = G__6241;
i__6233_6237 = G__6242;
continue;
}
} else
{var temp__4425__auto___6243 = cljs.core.seq(seq__6230_6234);if(temp__4425__auto___6243)
{var seq__6230_6244__$1 = temp__4425__auto___6243;if(cljs.core.chunked_seq_QMARK_(seq__6230_6244__$1))
{var c__4238__auto___6245 = cljs.core.chunk_first(seq__6230_6244__$1);{
var G__6246 = cljs.core.chunk_rest(seq__6230_6244__$1);
var G__6247 = c__4238__auto___6245;
var G__6248 = cljs.core.count(c__4238__auto___6245);
var G__6249 = 0;
seq__6230_6234 = G__6246;
chunk__6231_6235 = G__6247;
count__6232_6236 = G__6248;
i__6233_6237 = G__6249;
continue;
}
} else
{var n_6250 = cljs.core.first(seq__6230_6244__$1);goog.style.setStyle(n_6250,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__6251 = cljs.core.next(seq__6230_6244__$1);
var G__6252 = null;
var G__6253 = 0;
var G__6254 = 0;
seq__6230_6234 = G__6251;
chunk__6231_6235 = G__6252;
count__6232_6236 = G__6253;
i__6233_6237 = G__6254;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6255){
var content = cljs.core.first(arglist__6255);
arglist__6255 = cljs.core.next(arglist__6255);
var name = cljs.core.first(arglist__6255);
var value = cljs.core.rest(arglist__6255);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__6260_6264 = cljs.core.seq(domina.nodes(content));var chunk__6261_6265 = null;var count__6262_6266 = 0;var i__6263_6267 = 0;while(true){
if((i__6263_6267 < count__6262_6266))
{var n_6268 = chunk__6261_6265.cljs$core$IIndexed$_nth$arity$2(null,i__6263_6267);n_6268.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__6269 = seq__6260_6264;
var G__6270 = chunk__6261_6265;
var G__6271 = count__6262_6266;
var G__6272 = (i__6263_6267 + 1);
seq__6260_6264 = G__6269;
chunk__6261_6265 = G__6270;
count__6262_6266 = G__6271;
i__6263_6267 = G__6272;
continue;
}
} else
{var temp__4425__auto___6273 = cljs.core.seq(seq__6260_6264);if(temp__4425__auto___6273)
{var seq__6260_6274__$1 = temp__4425__auto___6273;if(cljs.core.chunked_seq_QMARK_(seq__6260_6274__$1))
{var c__4238__auto___6275 = cljs.core.chunk_first(seq__6260_6274__$1);{
var G__6276 = cljs.core.chunk_rest(seq__6260_6274__$1);
var G__6277 = c__4238__auto___6275;
var G__6278 = cljs.core.count(c__4238__auto___6275);
var G__6279 = 0;
seq__6260_6264 = G__6276;
chunk__6261_6265 = G__6277;
count__6262_6266 = G__6278;
i__6263_6267 = G__6279;
continue;
}
} else
{var n_6280 = cljs.core.first(seq__6260_6274__$1);n_6280.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__6281 = cljs.core.next(seq__6260_6274__$1);
var G__6282 = null;
var G__6283 = 0;
var G__6284 = 0;
seq__6260_6264 = G__6281;
chunk__6261_6265 = G__6282;
count__6262_6266 = G__6283;
i__6263_6267 = G__6284;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__6285){
var content = cljs.core.first(arglist__6285);
arglist__6285 = cljs.core.next(arglist__6285);
var name = cljs.core.first(arglist__6285);
var value = cljs.core.rest(arglist__6285);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__6290_6294 = cljs.core.seq(domina.nodes(content));var chunk__6291_6295 = null;var count__6292_6296 = 0;var i__6293_6297 = 0;while(true){
if((i__6293_6297 < count__6292_6296))
{var n_6298 = chunk__6291_6295.cljs$core$IIndexed$_nth$arity$2(null,i__6293_6297);n_6298.removeAttribute(cljs.core.name(name));
{
var G__6299 = seq__6290_6294;
var G__6300 = chunk__6291_6295;
var G__6301 = count__6292_6296;
var G__6302 = (i__6293_6297 + 1);
seq__6290_6294 = G__6299;
chunk__6291_6295 = G__6300;
count__6292_6296 = G__6301;
i__6293_6297 = G__6302;
continue;
}
} else
{var temp__4425__auto___6303 = cljs.core.seq(seq__6290_6294);if(temp__4425__auto___6303)
{var seq__6290_6304__$1 = temp__4425__auto___6303;if(cljs.core.chunked_seq_QMARK_(seq__6290_6304__$1))
{var c__4238__auto___6305 = cljs.core.chunk_first(seq__6290_6304__$1);{
var G__6306 = cljs.core.chunk_rest(seq__6290_6304__$1);
var G__6307 = c__4238__auto___6305;
var G__6308 = cljs.core.count(c__4238__auto___6305);
var G__6309 = 0;
seq__6290_6294 = G__6306;
chunk__6291_6295 = G__6307;
count__6292_6296 = G__6308;
i__6293_6297 = G__6309;
continue;
}
} else
{var n_6310 = cljs.core.first(seq__6290_6304__$1);n_6310.removeAttribute(cljs.core.name(name));
{
var G__6311 = cljs.core.next(seq__6290_6304__$1);
var G__6312 = null;
var G__6313 = 0;
var G__6314 = 0;
seq__6290_6294 = G__6311;
chunk__6291_6295 = G__6312;
count__6292_6296 = G__6313;
i__6293_6297 = G__6314;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__6316 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6316,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6316,1,null);if(cljs.core.truth_((function (){var and__3478__auto__ = k;if(cljs.core.truth_(and__3478__auto__))
{return v;
} else
{return and__3478__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null)),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if((style == null))
{return cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null));
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{if(cljs.core.constant$keyword$7)
{return cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null));
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6317_SHARP_){var attr = attrs__$1.item(p1__6317_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return cljs.core.with_meta(new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null));
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__6324_6330 = cljs.core.seq(styles);var chunk__6325_6331 = null;var count__6326_6332 = 0;var i__6327_6333 = 0;while(true){
if((i__6327_6333 < count__6326_6332))
{var vec__6328_6334 = chunk__6325_6331.cljs$core$IIndexed$_nth$arity$2(null,i__6327_6333);var name_6335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6328_6334,0,null);var value_6336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6328_6334,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_6335,cljs.core.array_seq([value_6336], 0));
{
var G__6337 = seq__6324_6330;
var G__6338 = chunk__6325_6331;
var G__6339 = count__6326_6332;
var G__6340 = (i__6327_6333 + 1);
seq__6324_6330 = G__6337;
chunk__6325_6331 = G__6338;
count__6326_6332 = G__6339;
i__6327_6333 = G__6340;
continue;
}
} else
{var temp__4425__auto___6341 = cljs.core.seq(seq__6324_6330);if(temp__4425__auto___6341)
{var seq__6324_6342__$1 = temp__4425__auto___6341;if(cljs.core.chunked_seq_QMARK_(seq__6324_6342__$1))
{var c__4238__auto___6343 = cljs.core.chunk_first(seq__6324_6342__$1);{
var G__6344 = cljs.core.chunk_rest(seq__6324_6342__$1);
var G__6345 = c__4238__auto___6343;
var G__6346 = cljs.core.count(c__4238__auto___6343);
var G__6347 = 0;
seq__6324_6330 = G__6344;
chunk__6325_6331 = G__6345;
count__6326_6332 = G__6346;
i__6327_6333 = G__6347;
continue;
}
} else
{var vec__6329_6348 = cljs.core.first(seq__6324_6342__$1);var name_6349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6329_6348,0,null);var value_6350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6329_6348,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_6349,cljs.core.array_seq([value_6350], 0));
{
var G__6351 = cljs.core.next(seq__6324_6342__$1);
var G__6352 = null;
var G__6353 = 0;
var G__6354 = 0;
seq__6324_6330 = G__6351;
chunk__6325_6331 = G__6352;
count__6326_6332 = G__6353;
i__6327_6333 = G__6354;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__6361_6367 = cljs.core.seq(attrs);var chunk__6362_6368 = null;var count__6363_6369 = 0;var i__6364_6370 = 0;while(true){
if((i__6364_6370 < count__6363_6369))
{var vec__6365_6371 = chunk__6362_6368.cljs$core$IIndexed$_nth$arity$2(null,i__6364_6370);var name_6372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6365_6371,0,null);var value_6373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6365_6371,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_6372,cljs.core.array_seq([value_6373], 0));
{
var G__6374 = seq__6361_6367;
var G__6375 = chunk__6362_6368;
var G__6376 = count__6363_6369;
var G__6377 = (i__6364_6370 + 1);
seq__6361_6367 = G__6374;
chunk__6362_6368 = G__6375;
count__6363_6369 = G__6376;
i__6364_6370 = G__6377;
continue;
}
} else
{var temp__4425__auto___6378 = cljs.core.seq(seq__6361_6367);if(temp__4425__auto___6378)
{var seq__6361_6379__$1 = temp__4425__auto___6378;if(cljs.core.chunked_seq_QMARK_(seq__6361_6379__$1))
{var c__4238__auto___6380 = cljs.core.chunk_first(seq__6361_6379__$1);{
var G__6381 = cljs.core.chunk_rest(seq__6361_6379__$1);
var G__6382 = c__4238__auto___6380;
var G__6383 = cljs.core.count(c__4238__auto___6380);
var G__6384 = 0;
seq__6361_6367 = G__6381;
chunk__6362_6368 = G__6382;
count__6363_6369 = G__6383;
i__6364_6370 = G__6384;
continue;
}
} else
{var vec__6366_6385 = cljs.core.first(seq__6361_6379__$1);var name_6386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6366_6385,0,null);var value_6387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6366_6385,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_6386,cljs.core.array_seq([value_6387], 0));
{
var G__6388 = cljs.core.next(seq__6361_6379__$1);
var G__6389 = null;
var G__6390 = 0;
var G__6391 = 0;
seq__6361_6367 = G__6388;
chunk__6362_6368 = G__6389;
count__6363_6369 = G__6390;
i__6364_6370 = G__6391;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__6396_6400 = cljs.core.seq(domina.nodes(content));var chunk__6397_6401 = null;var count__6398_6402 = 0;var i__6399_6403 = 0;while(true){
if((i__6399_6403 < count__6398_6402))
{var node_6404 = chunk__6397_6401.cljs$core$IIndexed$_nth$arity$2(null,i__6399_6403);goog.dom.classes.add(node_6404,class$);
{
var G__6405 = seq__6396_6400;
var G__6406 = chunk__6397_6401;
var G__6407 = count__6398_6402;
var G__6408 = (i__6399_6403 + 1);
seq__6396_6400 = G__6405;
chunk__6397_6401 = G__6406;
count__6398_6402 = G__6407;
i__6399_6403 = G__6408;
continue;
}
} else
{var temp__4425__auto___6409 = cljs.core.seq(seq__6396_6400);if(temp__4425__auto___6409)
{var seq__6396_6410__$1 = temp__4425__auto___6409;if(cljs.core.chunked_seq_QMARK_(seq__6396_6410__$1))
{var c__4238__auto___6411 = cljs.core.chunk_first(seq__6396_6410__$1);{
var G__6412 = cljs.core.chunk_rest(seq__6396_6410__$1);
var G__6413 = c__4238__auto___6411;
var G__6414 = cljs.core.count(c__4238__auto___6411);
var G__6415 = 0;
seq__6396_6400 = G__6412;
chunk__6397_6401 = G__6413;
count__6398_6402 = G__6414;
i__6399_6403 = G__6415;
continue;
}
} else
{var node_6416 = cljs.core.first(seq__6396_6410__$1);goog.dom.classes.add(node_6416,class$);
{
var G__6417 = cljs.core.next(seq__6396_6410__$1);
var G__6418 = null;
var G__6419 = 0;
var G__6420 = 0;
seq__6396_6400 = G__6417;
chunk__6397_6401 = G__6418;
count__6398_6402 = G__6419;
i__6399_6403 = G__6420;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__6425_6429 = cljs.core.seq(domina.nodes(content));var chunk__6426_6430 = null;var count__6427_6431 = 0;var i__6428_6432 = 0;while(true){
if((i__6428_6432 < count__6427_6431))
{var node_6433 = chunk__6426_6430.cljs$core$IIndexed$_nth$arity$2(null,i__6428_6432);goog.dom.classes.remove(node_6433,class$);
{
var G__6434 = seq__6425_6429;
var G__6435 = chunk__6426_6430;
var G__6436 = count__6427_6431;
var G__6437 = (i__6428_6432 + 1);
seq__6425_6429 = G__6434;
chunk__6426_6430 = G__6435;
count__6427_6431 = G__6436;
i__6428_6432 = G__6437;
continue;
}
} else
{var temp__4425__auto___6438 = cljs.core.seq(seq__6425_6429);if(temp__4425__auto___6438)
{var seq__6425_6439__$1 = temp__4425__auto___6438;if(cljs.core.chunked_seq_QMARK_(seq__6425_6439__$1))
{var c__4238__auto___6440 = cljs.core.chunk_first(seq__6425_6439__$1);{
var G__6441 = cljs.core.chunk_rest(seq__6425_6439__$1);
var G__6442 = c__4238__auto___6440;
var G__6443 = cljs.core.count(c__4238__auto___6440);
var G__6444 = 0;
seq__6425_6429 = G__6441;
chunk__6426_6430 = G__6442;
count__6427_6431 = G__6443;
i__6428_6432 = G__6444;
continue;
}
} else
{var node_6445 = cljs.core.first(seq__6425_6439__$1);goog.dom.classes.remove(node_6445,class$);
{
var G__6446 = cljs.core.next(seq__6425_6439__$1);
var G__6447 = null;
var G__6448 = 0;
var G__6449 = 0;
seq__6425_6429 = G__6446;
chunk__6426_6430 = G__6447;
count__6427_6431 = G__6448;
i__6428_6432 = G__6449;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__6454_6458 = cljs.core.seq(domina.nodes(content));var chunk__6455_6459 = null;var count__6456_6460 = 0;var i__6457_6461 = 0;while(true){
if((i__6457_6461 < count__6456_6460))
{var node_6462 = chunk__6455_6459.cljs$core$IIndexed$_nth$arity$2(null,i__6457_6461);goog.dom.classes.toggle(node_6462,class$);
{
var G__6463 = seq__6454_6458;
var G__6464 = chunk__6455_6459;
var G__6465 = count__6456_6460;
var G__6466 = (i__6457_6461 + 1);
seq__6454_6458 = G__6463;
chunk__6455_6459 = G__6464;
count__6456_6460 = G__6465;
i__6457_6461 = G__6466;
continue;
}
} else
{var temp__4425__auto___6467 = cljs.core.seq(seq__6454_6458);if(temp__4425__auto___6467)
{var seq__6454_6468__$1 = temp__4425__auto___6467;if(cljs.core.chunked_seq_QMARK_(seq__6454_6468__$1))
{var c__4238__auto___6469 = cljs.core.chunk_first(seq__6454_6468__$1);{
var G__6470 = cljs.core.chunk_rest(seq__6454_6468__$1);
var G__6471 = c__4238__auto___6469;
var G__6472 = cljs.core.count(c__4238__auto___6469);
var G__6473 = 0;
seq__6454_6458 = G__6470;
chunk__6455_6459 = G__6471;
count__6456_6460 = G__6472;
i__6457_6461 = G__6473;
continue;
}
} else
{var node_6474 = cljs.core.first(seq__6454_6468__$1);goog.dom.classes.toggle(node_6474,class$);
{
var G__6475 = cljs.core.next(seq__6454_6468__$1);
var G__6476 = null;
var G__6477 = 0;
var G__6478 = 0;
seq__6454_6458 = G__6475;
chunk__6455_6459 = G__6476;
count__6456_6460 = G__6477;
i__6457_6461 = G__6478;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_6487__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__6483_6488 = cljs.core.seq(domina.nodes(content));var chunk__6484_6489 = null;var count__6485_6490 = 0;var i__6486_6491 = 0;while(true){
if((i__6486_6491 < count__6485_6490))
{var node_6492 = chunk__6484_6489.cljs$core$IIndexed$_nth$arity$2(null,i__6486_6491);goog.dom.classes.set(node_6492,classes_6487__$1);
{
var G__6493 = seq__6483_6488;
var G__6494 = chunk__6484_6489;
var G__6495 = count__6485_6490;
var G__6496 = (i__6486_6491 + 1);
seq__6483_6488 = G__6493;
chunk__6484_6489 = G__6494;
count__6485_6490 = G__6495;
i__6486_6491 = G__6496;
continue;
}
} else
{var temp__4425__auto___6497 = cljs.core.seq(seq__6483_6488);if(temp__4425__auto___6497)
{var seq__6483_6498__$1 = temp__4425__auto___6497;if(cljs.core.chunked_seq_QMARK_(seq__6483_6498__$1))
{var c__4238__auto___6499 = cljs.core.chunk_first(seq__6483_6498__$1);{
var G__6500 = cljs.core.chunk_rest(seq__6483_6498__$1);
var G__6501 = c__4238__auto___6499;
var G__6502 = cljs.core.count(c__4238__auto___6499);
var G__6503 = 0;
seq__6483_6488 = G__6500;
chunk__6484_6489 = G__6501;
count__6485_6490 = G__6502;
i__6486_6491 = G__6503;
continue;
}
} else
{var node_6504 = cljs.core.first(seq__6483_6498__$1);goog.dom.classes.set(node_6504,classes_6487__$1);
{
var G__6505 = cljs.core.next(seq__6483_6498__$1);
var G__6506 = null;
var G__6507 = 0;
var G__6508 = 0;
seq__6483_6488 = G__6505;
chunk__6484_6489 = G__6506;
count__6485_6490 = G__6507;
i__6486_6491 = G__6508;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__6513_6517 = cljs.core.seq(domina.nodes(content));var chunk__6514_6518 = null;var count__6515_6519 = 0;var i__6516_6520 = 0;while(true){
if((i__6516_6520 < count__6515_6519))
{var node_6521 = chunk__6514_6518.cljs$core$IIndexed$_nth$arity$2(null,i__6516_6520);goog.dom.setTextContent(node_6521,value);
{
var G__6522 = seq__6513_6517;
var G__6523 = chunk__6514_6518;
var G__6524 = count__6515_6519;
var G__6525 = (i__6516_6520 + 1);
seq__6513_6517 = G__6522;
chunk__6514_6518 = G__6523;
count__6515_6519 = G__6524;
i__6516_6520 = G__6525;
continue;
}
} else
{var temp__4425__auto___6526 = cljs.core.seq(seq__6513_6517);if(temp__4425__auto___6526)
{var seq__6513_6527__$1 = temp__4425__auto___6526;if(cljs.core.chunked_seq_QMARK_(seq__6513_6527__$1))
{var c__4238__auto___6528 = cljs.core.chunk_first(seq__6513_6527__$1);{
var G__6529 = cljs.core.chunk_rest(seq__6513_6527__$1);
var G__6530 = c__4238__auto___6528;
var G__6531 = cljs.core.count(c__4238__auto___6528);
var G__6532 = 0;
seq__6513_6517 = G__6529;
chunk__6514_6518 = G__6530;
count__6515_6519 = G__6531;
i__6516_6520 = G__6532;
continue;
}
} else
{var node_6533 = cljs.core.first(seq__6513_6527__$1);goog.dom.setTextContent(node_6533,value);
{
var G__6534 = cljs.core.next(seq__6513_6527__$1);
var G__6535 = null;
var G__6536 = 0;
var G__6537 = 0;
seq__6513_6517 = G__6534;
chunk__6514_6518 = G__6535;
count__6515_6519 = G__6536;
i__6516_6520 = G__6537;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__6542_6546 = cljs.core.seq(domina.nodes(content));var chunk__6543_6547 = null;var count__6544_6548 = 0;var i__6545_6549 = 0;while(true){
if((i__6545_6549 < count__6544_6548))
{var node_6550 = chunk__6543_6547.cljs$core$IIndexed$_nth$arity$2(null,i__6545_6549);goog.dom.forms.setValue(node_6550,value);
{
var G__6551 = seq__6542_6546;
var G__6552 = chunk__6543_6547;
var G__6553 = count__6544_6548;
var G__6554 = (i__6545_6549 + 1);
seq__6542_6546 = G__6551;
chunk__6543_6547 = G__6552;
count__6544_6548 = G__6553;
i__6545_6549 = G__6554;
continue;
}
} else
{var temp__4425__auto___6555 = cljs.core.seq(seq__6542_6546);if(temp__4425__auto___6555)
{var seq__6542_6556__$1 = temp__4425__auto___6555;if(cljs.core.chunked_seq_QMARK_(seq__6542_6556__$1))
{var c__4238__auto___6557 = cljs.core.chunk_first(seq__6542_6556__$1);{
var G__6558 = cljs.core.chunk_rest(seq__6542_6556__$1);
var G__6559 = c__4238__auto___6557;
var G__6560 = cljs.core.count(c__4238__auto___6557);
var G__6561 = 0;
seq__6542_6546 = G__6558;
chunk__6543_6547 = G__6559;
count__6544_6548 = G__6560;
i__6545_6549 = G__6561;
continue;
}
} else
{var node_6562 = cljs.core.first(seq__6542_6556__$1);goog.dom.forms.setValue(node_6562,value);
{
var G__6563 = cljs.core.next(seq__6542_6556__$1);
var G__6564 = null;
var G__6565 = 0;
var G__6566 = 0;
seq__6542_6546 = G__6563;
chunk__6543_6547 = G__6564;
count__6544_6548 = G__6565;
i__6545_6549 = G__6566;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3478__auto__ = allows_inner_html_QMARK_;if(and__3478__auto__)
{var and__3478__auto____$1 = (function (){var or__3490__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3490__auto__))
{return or__3490__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3478__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3478__auto____$1;
}
} else
{return and__3478__auto__;
}
})()))
{var value_6577 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__6573_6578 = cljs.core.seq(domina.nodes(content));var chunk__6574_6579 = null;var count__6575_6580 = 0;var i__6576_6581 = 0;while(true){
if((i__6576_6581 < count__6575_6580))
{var node_6582 = chunk__6574_6579.cljs$core$IIndexed$_nth$arity$2(null,i__6576_6581);node_6582.innerHTML = value_6577;
{
var G__6583 = seq__6573_6578;
var G__6584 = chunk__6574_6579;
var G__6585 = count__6575_6580;
var G__6586 = (i__6576_6581 + 1);
seq__6573_6578 = G__6583;
chunk__6574_6579 = G__6584;
count__6575_6580 = G__6585;
i__6576_6581 = G__6586;
continue;
}
} else
{var temp__4425__auto___6587 = cljs.core.seq(seq__6573_6578);if(temp__4425__auto___6587)
{var seq__6573_6588__$1 = temp__4425__auto___6587;if(cljs.core.chunked_seq_QMARK_(seq__6573_6588__$1))
{var c__4238__auto___6589 = cljs.core.chunk_first(seq__6573_6588__$1);{
var G__6590 = cljs.core.chunk_rest(seq__6573_6588__$1);
var G__6591 = c__4238__auto___6589;
var G__6592 = cljs.core.count(c__4238__auto___6589);
var G__6593 = 0;
seq__6573_6578 = G__6590;
chunk__6574_6579 = G__6591;
count__6575_6580 = G__6592;
i__6576_6581 = G__6593;
continue;
}
} else
{var node_6594 = cljs.core.first(seq__6573_6588__$1);node_6594.innerHTML = value_6577;
{
var G__6595 = cljs.core.next(seq__6573_6588__$1);
var G__6596 = null;
var G__6597 = 0;
var G__6598 = 0;
seq__6573_6578 = G__6595;
chunk__6574_6579 = G__6596;
count__6575_6580 = G__6597;
i__6576_6581 = G__6598;
continue;
}
}
} else
{}
}
break;
}
}catch (e6572){if((e6572 instanceof Error))
{var e_6599 = e6572;domina.replace_children_BANG_(content,value_6577);
} else
{if(cljs.core.constant$keyword$7)
{throw e6572;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3478__auto__ = bubble;if(cljs.core.truth_(and__3478__auto__))
{return (value == null);
} else
{return and__3478__auto__;
}
})()))
{var temp__4425__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4425__auto__))
{var parent = temp__4425__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3490__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3490__auto__))
{return or__3490__auto__;
} else
{return cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null));
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__6606_6610 = cljs.core.seq(children);var chunk__6607_6611 = null;var count__6608_6612 = 0;var i__6609_6613 = 0;while(true){
if((i__6609_6613 < count__6608_6612))
{var child_6614 = chunk__6607_6611.cljs$core$IIndexed$_nth$arity$2(null,i__6609_6613);frag.appendChild(child_6614);
{
var G__6615 = seq__6606_6610;
var G__6616 = chunk__6607_6611;
var G__6617 = count__6608_6612;
var G__6618 = (i__6609_6613 + 1);
seq__6606_6610 = G__6615;
chunk__6607_6611 = G__6616;
count__6608_6612 = G__6617;
i__6609_6613 = G__6618;
continue;
}
} else
{var temp__4425__auto___6619 = cljs.core.seq(seq__6606_6610);if(temp__4425__auto___6619)
{var seq__6606_6620__$1 = temp__4425__auto___6619;if(cljs.core.chunked_seq_QMARK_(seq__6606_6620__$1))
{var c__4238__auto___6621 = cljs.core.chunk_first(seq__6606_6620__$1);{
var G__6622 = cljs.core.chunk_rest(seq__6606_6620__$1);
var G__6623 = c__4238__auto___6621;
var G__6624 = cljs.core.count(c__4238__auto___6621);
var G__6625 = 0;
seq__6606_6610 = G__6622;
chunk__6607_6611 = G__6623;
count__6608_6612 = G__6624;
i__6609_6613 = G__6625;
continue;
}
} else
{var child_6626 = cljs.core.first(seq__6606_6620__$1);frag.appendChild(child_6626);
{
var G__6627 = cljs.core.next(seq__6606_6620__$1);
var G__6628 = null;
var G__6629 = 0;
var G__6630 = 0;
seq__6606_6610 = G__6627;
chunk__6607_6611 = G__6628;
count__6608_6612 = G__6629;
i__6609_6613 = G__6630;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__6600_SHARP_,p2__6601_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__6600_SHARP_,p2__6601_SHARP_) : f.call(null,p1__6600_SHARP_,p2__6601_SHARP_));
}),cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3478__auto__ = obj;if(cljs.core.truth_(and__3478__auto__))
{var and__3478__auto____$1 = cljs.core.not(obj.nodeName);if(and__3478__auto____$1)
{return obj.length;
} else
{return and__3478__auto____$1;
}
} else
{return and__3478__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.with_meta(cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null));
} else
{if((function (){var G__6632 = list_thing;if(G__6632)
{var bit__4140__auto__ = (G__6632.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4140__auto__) || (G__6632.cljs$core$ISeqable$))
{return true;
} else
{if((!G__6632.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__6632);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__6632);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$8)
{return cljs.core.seq(cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null)));
} else
{return null;
}
}
}
}
});
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.with_meta(cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null));
} else
{if((function (){var G__6633 = content;if(G__6633)
{var bit__4140__auto__ = (G__6633.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4140__auto__) || (G__6633.cljs$core$ISeqable$))
{return true;
} else
{if((!G__6633.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__6633);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__6633);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$8)
{return cljs.core.seq(cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/domina.cljs"], null)));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__6634 = content;if(G__6634)
{var bit__4140__auto__ = (G__6634.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4140__auto__) || (G__6634.cljs$core$ISeqable$))
{return true;
} else
{if((!G__6634.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__6634);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__6634);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$8)
{return content;
} else
{return null;
}
}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
} else
{}
