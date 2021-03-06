// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
cljs.reader.PushbackReader = (function (){var obj6807 = {};return obj6807;
})();
cljs.reader.read_char = (function read_char(reader){if((function (){var and__3478__auto__ = reader;if(and__3478__auto__)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3478__auto__;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__4117__auto__ = (((reader == null))?null:reader);return (function (){var or__3490__auto__ = (cljs.reader.read_char[goog.typeOf(x__4117__auto__)]);if(or__3490__auto__)
{return or__3490__auto__;
} else
{var or__3490__auto____$1 = (cljs.reader.read_char["_"]);if(or__3490__auto____$1)
{return or__3490__auto____$1;
} else
{throw cljs.core.missing_protocol("PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){if((function (){var and__3478__auto__ = reader;if(and__3478__auto__)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3478__auto__;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__4117__auto__ = (((reader == null))?null:reader);return (function (){var or__3490__auto__ = (cljs.reader.unread[goog.typeOf(x__4117__auto__)]);if(or__3490__auto__)
{return or__3490__auto__;
} else
{var or__3490__auto____$1 = (cljs.reader.unread["_"]);if(or__3490__auto____$1)
{return or__3490__auto____$1;
} else
{throw cljs.core.missing_protocol("PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,buffer,idx){
this.s = s;
this.buffer = buffer;
this.idx = idx;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorStr = "cljs.reader/StringPushbackReader";
cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__4057__auto__,writer__4058__auto__,opt__4059__auto__){return cljs.core._write(writer__4058__auto__,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.buffer.length === 0))
{self__.idx = (self__.idx + 1);
return (self__.s[self__.idx]);
} else
{return self__.buffer.pop();
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;return self__.buffer.push(ch);
});
cljs.reader.__GT_StringPushbackReader = (function __GT_StringPushbackReader(s,buffer,idx){return (new cljs.reader.StringPushbackReader(s,buffer,idx));
});
cljs.reader.push_back_reader = (function push_back_reader(s){return (new cljs.reader.StringPushbackReader(s,[],-1));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){var or__3490__auto__ = goog.string.isBreakingWhitespace(ch);if(cljs.core.truth_(or__3490__auto__))
{return or__3490__auto__;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){return goog.string.isNumeric(ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){return (cljs.reader.numeric_QMARK_(initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.reader.numeric_QMARK_((function (){var next_ch = cljs.reader.read_char(reader);cljs.reader.unread(reader,next_ch);
return next_ch;
})())));
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)));
};
var reader_error = function (rdr,var_args){
var msg = null;if (arguments.length > 1) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return reader_error__delegate.call(this,rdr,msg);};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__6808){
var rdr = cljs.core.first(arglist__6808);
var msg = cljs.core.rest(arglist__6808);
return reader_error__delegate(rdr,msg);
});
reader_error.cljs$core$IFn$_invoke$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){var and__3478__auto__ = !((ch === "#"));if(and__3478__auto__)
{var and__3478__auto____$1 = !((ch === "'"));if(and__3478__auto____$1)
{var and__3478__auto____$2 = !((ch === ":"));if(and__3478__auto____$2)
{return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.reader.macros.call(null,ch));
} else
{return and__3478__auto____$2;
}
} else
{return and__3478__auto____$1;
}
} else
{return and__3478__auto__;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){var sb = (new goog.string.StringBuffer(initch));var ch = cljs.reader.read_char(rdr);while(true){
if(((ch == null)) || (cljs.reader.whitespace_QMARK_(ch)) || (cljs.reader.macro_terminating_QMARK_(ch)))
{cljs.reader.unread(rdr,ch);
return sb.toString();
} else
{{
var G__6809 = (function (){sb.append(ch);
return sb;
})();
var G__6810 = cljs.reader.read_char(rdr);
sb = G__6809;
ch = G__6810;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){while(true){
var ch = cljs.reader.read_char(reader);if(((ch === "\n")) || ((ch === "\r")) || ((ch == null)))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern("([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.re_find_STAR_ = (function re_find_STAR_(re,s){var matches = re.exec(s);if((matches == null))
{return null;
} else
{if((matches.length === 1))
{return (matches[0]);
} else
{return matches;
}
}
});
cljs.reader.match_int = (function match_int(s){var groups = cljs.reader.re_find_STAR_(cljs.reader.int_pattern,s);var group3 = (groups[2]);if(!(((group3 == null)) || ((group3.length < 1))))
{return 0;
} else
{var negate = ((("-" === (groups[1])))?-1:1);var a = (cljs.core.truth_((groups[3]))?[(groups[3]),10]:(cljs.core.truth_((groups[4]))?[(groups[4]),16]:(cljs.core.truth_((groups[5]))?[(groups[5]),8]:(cljs.core.truth_((groups[7]))?[(groups[7]),parseInt((groups[7]))]:((cljs.core.constant$keyword$8)?[null,null]:null)))));var n = (a[0]);var radix = (a[1]);if((n == null))
{return null;
} else
{return (negate * parseInt(n,radix));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){var groups = cljs.reader.re_find_STAR_(cljs.reader.ratio_pattern,s);var numinator = (groups[1]);var denominator = (groups[2]);return (parseInt(numinator) / parseInt(denominator));
});
cljs.reader.match_float = (function match_float(s){return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){var matches = re.exec(s);if((!((matches == null))) && (((matches[0]) === s)))
{if((matches.length === 1))
{return (matches[0]);
} else
{return matches;
}
} else
{return null;
}
});
cljs.reader.match_number = (function match_number(s){if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s)))
{return cljs.reader.match_int(s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio(s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.float_pattern,s)))
{return cljs.reader.match_float(s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{if(cljs.core.constant$keyword$7)
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function read_2_chars(reader){return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.read_4_chars = (function read_4_chars(reader){return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern("[0-9A-Fa-f]{2}");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern("[0-9A-Fa-f]{4}");
cljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){if(cljs.core.truth_(cljs.core.re_matches(unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",escape_char,unicode_str], 0));
}
});
cljs.reader.make_unicode_char = (function make_unicode_char(code_str){var code = parseInt(code_str,16);return String.fromCharCode(code);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){var ch = cljs.reader.read_char(reader);var mapresult = cljs.reader.escape_char_map(ch);if(cljs.core.truth_(mapresult))
{return mapresult;
} else
{if((ch === "x"))
{return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_2_pattern,reader,ch,cljs.reader.read_2_chars(reader)));
} else
{if((ch === "u"))
{return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_4_pattern,reader,ch,cljs.reader.read_4_chars(reader)));
} else
{if(cljs.reader.numeric_QMARK_(ch))
{return String.fromCharCode(ch);
} else
{if(cljs.core.constant$keyword$7)
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",ch], 0));
} else
{return null;
}
}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){var ch = cljs.reader.read_char(rdr);while(true){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(ch) : pred.call(null,ch))))
{{
var G__6811 = cljs.reader.read_char(rdr);
ch = G__6811;
continue;
}
} else
{return ch;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){var a = cljs.core.transient$(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/cljs/reader.cljs"], null)));while(true){
var ch = cljs.reader.read_past(cljs.reader.whitespace_QMARK_,rdr);if(cljs.core.truth_(ch))
{} else
{cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading"], 0));
}
if((delim === ch))
{return cljs.core.persistent_BANG_(a);
} else
{var temp__4423__auto__ = (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.reader.macros.call(null,ch));if(cljs.core.truth_(temp__4423__auto__))
{var macrofn = temp__4423__auto__;var mret = (macrofn.cljs$core$IFn$_invoke$arity$2 ? macrofn.cljs$core$IFn$_invoke$arity$2(rdr,ch) : macrofn.call(null,rdr,ch));{
var G__6812 = (((mret === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,mret));
a = G__6812;
continue;
}
} else
{cljs.reader.unread(rdr,ch);
var o = (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,recursive_QMARK_) : cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_));{
var G__6813 = (((o === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,o));
a = G__6813;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Reader for ",ch," not implemented yet"], 0));
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){var ch = cljs.reader.read_char(rdr);var dm = (cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.reader.dispatch_macros.call(null,ch));if(cljs.core.truth_(dm))
{return (dm.cljs$core$IFn$_invoke$arity$2 ? dm.cljs$core$IFn$_invoke$arity$2(rdr,_) : dm.call(null,rdr,_));
} else
{var temp__4423__auto__ = (cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2(rdr,ch) : cljs.reader.maybe_read_tagged_type.call(null,rdr,ch));if(cljs.core.truth_(temp__4423__auto__))
{var obj = temp__4423__auto__;return obj;
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["No dispatch macro for ",ch], 0));
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Unmached delimiter ",ch], 0));
});
cljs.reader.read_list = (function read_list(rdr,_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.reader.read_delimited_list(")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){return cljs.reader.read_delimited_list("]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){var l = cljs.reader.read_delimited_list("}",rdr,true);if(cljs.core.odd_QMARK_(cljs.core.count(l)))
{cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Map literal must contain an even number of forms"], 0));
} else
{}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,l);
});
cljs.reader.read_number = (function read_number(reader,initch){var buffer = (new goog.string.StringBuffer(initch));var ch = cljs.reader.read_char(reader);while(true){
if(cljs.core.truth_((function (){var or__3490__auto__ = (ch == null);if(or__3490__auto__)
{return or__3490__auto__;
} else
{var or__3490__auto____$1 = cljs.reader.whitespace_QMARK_(ch);if(or__3490__auto____$1)
{return or__3490__auto____$1;
} else
{return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.reader.macros.call(null,ch));
}
}
})()))
{cljs.reader.unread(reader,ch);
var s = buffer.toString();var or__3490__auto__ = cljs.reader.match_number(s);if(cljs.core.truth_(or__3490__auto__))
{return or__3490__auto__;
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid number format [",s,"]"], 0));
}
} else
{{
var G__6814 = (function (){buffer.append(ch);
return buffer;
})();
var G__6815 = cljs.reader.read_char(reader);
buffer = G__6814;
ch = G__6815;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){var buffer = (new goog.string.StringBuffer());var ch = cljs.reader.read_char(reader);while(true){
if((ch == null))
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else
{if(("\\" === ch))
{{
var G__6816 = (function (){buffer.append(cljs.reader.escape_char(buffer,reader));
return buffer;
})();
var G__6817 = cljs.reader.read_char(reader);
buffer = G__6816;
ch = G__6817;
continue;
}
} else
{if(("\"" === ch))
{return buffer.toString();
} else
{if(cljs.core.constant$keyword$8)
{{
var G__6818 = (function (){buffer.append(ch);
return buffer;
})();
var G__6819 = cljs.reader.read_char(reader);
buffer = G__6818;
ch = G__6819;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = (function special_symbols(t,not_found){if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
} else
{if(cljs.core.constant$keyword$7)
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.reader.read_symbol = (function read_symbol(reader,initch){var token = cljs.reader.read_token(reader,initch);if(cljs.core.truth_(goog.string.contains(token,"/")))
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,0,token.indexOf("/")),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(token.indexOf("/") + 1),token.length));
} else
{return cljs.reader.special_symbols(token,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(token));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){var token = cljs.reader.read_token(reader,cljs.reader.read_char(reader));var a = cljs.reader.re_matches_STAR_(cljs.reader.symbol_pattern,token);var token__$1 = (a[0]);var ns = (a[1]);var name = (a[2]);if(((!((void 0 === ns))) && ((ns.substring((ns.length - 2),ns.length) === ":/"))) || (((name[(name.length - 1)]) === ":")) || (!((token__$1.indexOf("::",1) === -1))))
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid token: ",token__$1], 0));
} else
{if((!((ns == null))) && ((ns.length > 0)))
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns.substring(0,ns.indexOf("/")),name);
} else
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token__$1);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){if((f instanceof cljs.core.Symbol))
{return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,f], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/cljs/reader.cljs"], null));
} else
{if(typeof f === 'string')
{return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,f], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/cljs/reader.cljs"], null));
} else
{if((f instanceof cljs.core.Keyword))
{return cljs.core.with_meta(new cljs.core.PersistentArrayMap.fromArray([f,true], true, false),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/cljs/reader.cljs"], null));
} else
{if(cljs.core.constant$keyword$7)
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){return (function (rdr,_){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,true) : cljs.reader.read.call(null,rdr,true,null,true))),sym);
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){return (function (rdr,_){return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq([msg], 0));
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){var m = cljs.reader.desugar_meta((cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,true) : cljs.reader.read.call(null,rdr,true,null,true)));if(cljs.core.map_QMARK_(m))
{} else
{cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata must be Symbol,Keyword,String or Map"], 0));
}
var o = (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,true) : cljs.reader.read.call(null,rdr,true,null,true));if((function (){var G__6821 = o;if(G__6821)
{var bit__4140__auto__ = (G__6821.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__4140__auto__) || (G__6821.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__6821.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__6821);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__6821);
}
})())
{return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(o),m], 0)));
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata can only be applied to IWithMetas"], 0));
}
});
cljs.reader.read_set = (function read_set(rdr,_){return cljs.core.set(cljs.reader.read_delimited_list("}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){return cljs.core.re_pattern(cljs.reader.read_string_STAR_(rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,true) : cljs.reader.read.call(null,rdr,true,null,true));
return rdr;
});
cljs.reader.macros = (function macros(c){if((c === "\""))
{return cljs.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.reader.read_keyword;
} else
{if((c === ";"))
{return cljs.reader.read_comment;
} else
{if((c === "'"))
{return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if((c === "@"))
{return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"deref","deref",-1545057749,null));
} else
{if((c === "^"))
{return cljs.reader.read_meta;
} else
{if((c === "`"))
{return cljs.reader.not_implemented;
} else
{if((c === "~"))
{return cljs.reader.not_implemented;
} else
{if((c === "("))
{return cljs.reader.read_list;
} else
{if((c === ")"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.reader.read_vector;
} else
{if((c === "]"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.reader.read_map;
} else
{if((c === "}"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.reader.read_char;
} else
{if((c === "#"))
{return cljs.reader.read_dispatch;
} else
{if(cljs.core.constant$keyword$7)
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
cljs.reader.dispatch_macros = (function dispatch_macros(s){if((s === "{"))
{return cljs.reader.read_set;
} else
{if((s === "<"))
{return cljs.reader.throwing_reader("Unreadable form");
} else
{if((s === "\""))
{return cljs.reader.read_regex;
} else
{if((s === "!"))
{return cljs.reader.read_comment;
} else
{if((s === "_"))
{return cljs.reader.read_discard;
} else
{if(cljs.core.constant$keyword$7)
{return null;
} else
{return null;
}
}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){while(true){
var ch = cljs.reader.read_char(reader);if((ch == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_(ch))
{{
var G__6822 = reader;
var G__6823 = eof_is_error;
var G__6824 = sentinel;
var G__6825 = is_recursive;
reader = G__6822;
eof_is_error = G__6823;
sentinel = G__6824;
is_recursive = G__6825;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_(ch))
{{
var G__6826 = (cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2(reader,ch) : cljs.reader.read_comment.call(null,reader,ch));
var G__6827 = eof_is_error;
var G__6828 = sentinel;
var G__6829 = is_recursive;
reader = G__6826;
eof_is_error = G__6827;
sentinel = G__6828;
is_recursive = G__6829;
continue;
}
} else
{if(cljs.core.constant$keyword$7)
{var f = cljs.reader.macros(ch);var res = (cljs.core.truth_(f)?(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(reader,ch) : f.call(null,reader,ch)):((cljs.reader.number_literal_QMARK_(reader,ch))?cljs.reader.read_number(reader,ch):((cljs.core.constant$keyword$7)?cljs.reader.read_symbol(reader,ch):null)));if((res === reader))
{{
var G__6830 = reader;
var G__6831 = eof_is_error;
var G__6832 = sentinel;
var G__6833 = is_recursive;
reader = G__6830;
eof_is_error = G__6831;
sentinel = G__6832;
is_recursive = G__6833;
continue;
}
} else
{return res;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){var r = cljs.reader.push_back_reader(s);return cljs.reader.read(r,true,null,false);
});
cljs.reader.zero_fill_right_and_truncate = (function zero_fill_right_and_truncate(s,width){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s)))
{return s;
} else
{if((width < cljs.core.count(s)))
{return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,0,width);
} else
{if(cljs.core.constant$keyword$7)
{var b = (new goog.string.StringBuffer(s));while(true){
if((b.getLength() < width))
{{
var G__6834 = b.append("0");
b = G__6834;
continue;
}
} else
{return b.toString();
}
break;
}
} else
{return null;
}
}
}
});
cljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){return (cljs.core.mod(num,div) === 0);
});
cljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){return !(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){return (cljs.reader.divisible_QMARK_(year,4)) && ((cljs.reader.indivisible_QMARK_(year,100)) || (cljs.reader.divisible_QMARK_(year,400)));
});
cljs.reader.days_in_month = (function (){var dim_norm = cljs.core.with_meta(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,31,28,31,30,31,30,31,31,30,31,30,31], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/cljs/reader.cljs"], null));var dim_leap = cljs.core.with_meta(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,31,29,31,30,31,30,31,31,30,31,30,31], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/cljs/reader.cljs"], null));return (function (month,leap_year_QMARK_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function parse_int(s){var n = parseInt(s);if(cljs.core.not(isNaN(n)))
{return n;
} else
{return null;
}
});
cljs.reader.check = (function check(low,n,high,msg){if(((low <= n)) && ((n <= high)))
{} else
{cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')], 0));
}
return n;
});
cljs.reader.parse_and_validate_timestamp = (function parse_and_validate_timestamp(s){var vec__6836 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6836,0,null);var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6836,1,null);var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6836,2,null);var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6836,3,null);var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6836,4,null);var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6836,5,null);var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6836,6,null);var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6836,7,null);var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6836,8,null);var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6836,9,null);var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6836,10,null);var v = vec__6836;if(cljs.core.not(v))
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(s)].join('')], 0));
} else
{var years__$1 = cljs.reader.parse_int(years);var months__$1 = (function (){var or__3490__auto__ = cljs.reader.parse_int(months);if(cljs.core.truth_(or__3490__auto__))
{return or__3490__auto__;
} else
{return 1;
}
})();var days__$1 = (function (){var or__3490__auto__ = cljs.reader.parse_int(days);if(cljs.core.truth_(or__3490__auto__))
{return or__3490__auto__;
} else
{return 1;
}
})();var hours__$1 = (function (){var or__3490__auto__ = cljs.reader.parse_int(hours);if(cljs.core.truth_(or__3490__auto__))
{return or__3490__auto__;
} else
{return 0;
}
})();var minutes__$1 = (function (){var or__3490__auto__ = cljs.reader.parse_int(minutes);if(cljs.core.truth_(or__3490__auto__))
{return or__3490__auto__;
} else
{return 0;
}
})();var seconds__$1 = (function (){var or__3490__auto__ = cljs.reader.parse_int(seconds);if(cljs.core.truth_(or__3490__auto__))
{return or__3490__auto__;
} else
{return 0;
}
})();var fraction__$1 = (function (){var or__3490__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,3));if(cljs.core.truth_(or__3490__auto__))
{return or__3490__auto__;
} else
{return 0;
}
})();var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?-1:1);var offset_hours__$1 = (function (){var or__3490__auto__ = cljs.reader.parse_int(offset_hours);if(cljs.core.truth_(or__3490__auto__))
{return or__3490__auto__;
} else
{return 0;
}
})();var offset_minutes__$1 = (function (){var or__3490__auto__ = cljs.reader.parse_int(offset_minutes);if(cljs.core.truth_(or__3490__auto__))
{return or__3490__auto__;
} else
{return 0;
}
})();var offset = (offset_sign__$1 * ((offset_hours__$1 * 60) + offset_minutes__$1));return cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check(1,months__$1,12,"timestamp month field must be in range 1..12"),cljs.reader.check(1,days__$1,(cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(months__$1,cljs.reader.leap_year_QMARK_(years__$1)) : cljs.reader.days_in_month.call(null,months__$1,cljs.reader.leap_year_QMARK_(years__$1))),"timestamp day field must be in range 1..last day in month"),cljs.reader.check(0,hours__$1,23,"timestamp hour field must be in range 0..23"),cljs.reader.check(0,minutes__$1,59,"timestamp minute field must be in range 0..59"),cljs.reader.check(0,seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,59))?60:59),"timestamp second field must be in range 0..60"),cljs.reader.check(0,fraction__$1,999,"timestamp millisecond field must be in range 0..999"),offset], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/cljs/reader.cljs"], null));
}
});
cljs.reader.parse_timestamp = (function parse_timestamp(ts){var temp__4423__auto__ = cljs.reader.parse_and_validate_timestamp(ts);if(cljs.core.truth_(temp__4423__auto__))
{var vec__6838 = temp__4423__auto__;var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6838,0,null);var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6838,1,null);var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6838,2,null);var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6838,3,null);var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6838,4,null);var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6838,5,null);var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6838,6,null);var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6838,7,null);return (new Date((Date.UTC(years,(months - 1),days,hours,minutes,seconds,ms) - ((offset * 60) * 1000))));
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join('')], 0));
}
});
cljs.reader.read_date = (function read_date(s){if(typeof s === 'string')
{return cljs.reader.parse_timestamp(s);
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Instance literal expects a string for its timestamp."], 0));
}
});
cljs.reader.read_queue = (function read_queue(elems){if(cljs.core.vector_QMARK_(elems))
{return cljs.core.into(cljs.core.PersistentQueue.EMPTY,elems);
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Queue literal expects a vector for its elements."], 0));
}
});
cljs.reader.read_js = (function read_js(form){if(cljs.core.vector_QMARK_(form))
{var arr = [];var seq__6851_6863 = cljs.core.seq(form);var chunk__6852_6864 = null;var count__6853_6865 = 0;var i__6854_6866 = 0;while(true){
if((i__6854_6866 < count__6853_6865))
{var x_6867 = chunk__6852_6864.cljs$core$IIndexed$_nth$arity$2(null,i__6854_6866);arr.push(x_6867);
{
var G__6868 = seq__6851_6863;
var G__6869 = chunk__6852_6864;
var G__6870 = count__6853_6865;
var G__6871 = (i__6854_6866 + 1);
seq__6851_6863 = G__6868;
chunk__6852_6864 = G__6869;
count__6853_6865 = G__6870;
i__6854_6866 = G__6871;
continue;
}
} else
{var temp__4425__auto___6872 = cljs.core.seq(seq__6851_6863);if(temp__4425__auto___6872)
{var seq__6851_6873__$1 = temp__4425__auto___6872;if(cljs.core.chunked_seq_QMARK_(seq__6851_6873__$1))
{var c__4238__auto___6874 = cljs.core.chunk_first(seq__6851_6873__$1);{
var G__6875 = cljs.core.chunk_rest(seq__6851_6873__$1);
var G__6876 = c__4238__auto___6874;
var G__6877 = cljs.core.count(c__4238__auto___6874);
var G__6878 = 0;
seq__6851_6863 = G__6875;
chunk__6852_6864 = G__6876;
count__6853_6865 = G__6877;
i__6854_6866 = G__6878;
continue;
}
} else
{var x_6879 = cljs.core.first(seq__6851_6873__$1);arr.push(x_6879);
{
var G__6880 = cljs.core.next(seq__6851_6873__$1);
var G__6881 = null;
var G__6882 = 0;
var G__6883 = 0;
seq__6851_6863 = G__6880;
chunk__6852_6864 = G__6881;
count__6853_6865 = G__6882;
i__6854_6866 = G__6883;
continue;
}
}
} else
{}
}
break;
}
return arr;
} else
{if(cljs.core.map_QMARK_(form))
{var obj = (function (){var obj6856 = {};return obj6856;
})();var seq__6857_6884 = cljs.core.seq(form);var chunk__6858_6885 = null;var count__6859_6886 = 0;var i__6860_6887 = 0;while(true){
if((i__6860_6887 < count__6859_6886))
{var vec__6861_6888 = chunk__6858_6885.cljs$core$IIndexed$_nth$arity$2(null,i__6860_6887);var k_6889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6861_6888,0,null);var v_6890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6861_6888,1,null);(obj[cljs.core.name(k_6889)] = v_6890);
{
var G__6891 = seq__6857_6884;
var G__6892 = chunk__6858_6885;
var G__6893 = count__6859_6886;
var G__6894 = (i__6860_6887 + 1);
seq__6857_6884 = G__6891;
chunk__6858_6885 = G__6892;
count__6859_6886 = G__6893;
i__6860_6887 = G__6894;
continue;
}
} else
{var temp__4425__auto___6895 = cljs.core.seq(seq__6857_6884);if(temp__4425__auto___6895)
{var seq__6857_6896__$1 = temp__4425__auto___6895;if(cljs.core.chunked_seq_QMARK_(seq__6857_6896__$1))
{var c__4238__auto___6897 = cljs.core.chunk_first(seq__6857_6896__$1);{
var G__6898 = cljs.core.chunk_rest(seq__6857_6896__$1);
var G__6899 = c__4238__auto___6897;
var G__6900 = cljs.core.count(c__4238__auto___6897);
var G__6901 = 0;
seq__6857_6884 = G__6898;
chunk__6858_6885 = G__6899;
count__6859_6886 = G__6900;
i__6860_6887 = G__6901;
continue;
}
} else
{var vec__6862_6902 = cljs.core.first(seq__6857_6896__$1);var k_6903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6862_6902,0,null);var v_6904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6862_6902,1,null);(obj[cljs.core.name(k_6903)] = v_6904);
{
var G__6905 = cljs.core.next(seq__6857_6896__$1);
var G__6906 = null;
var G__6907 = 0;
var G__6908 = 0;
seq__6857_6884 = G__6905;
chunk__6858_6885 = G__6906;
count__6859_6886 = G__6907;
i__6860_6887 = G__6908;
continue;
}
}
} else
{}
}
break;
}
return obj;
} else
{if(cljs.core.constant$keyword$7)
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("JS literal expects a vector or map containing "),cljs.core.str("only string or unqualified keyword keys")].join('')], 0));
} else
{return null;
}
}
}
});
cljs.reader.read_uuid = (function read_uuid(uuid){if(typeof uuid === 'string')
{return (new cljs.core.UUID(uuid));
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["UUID literal expects a string as its representation."], 0));
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, ["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/target/cljsbuild-compiler-0/cljs/reader.cljs"], null)));
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){var tag = cljs.reader.read_symbol(rdr,initch);var pfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),[cljs.core.str(tag)].join(''));var dfn = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);if(cljs.core.truth_(pfn))
{return (pfn.cljs$core$IFn$_invoke$arity$1 ? pfn.cljs$core$IFn$_invoke$arity$1(cljs.reader.read(rdr,true,null,false)) : pfn.call(null,cljs.reader.read(rdr,true,null,false)));
} else
{if(cljs.core.truth_(dfn))
{return (dfn.cljs$core$IFn$_invoke$arity$2 ? dfn.cljs$core$IFn$_invoke$arity$2(tag,cljs.reader.read(rdr,true,null,false)) : dfn.call(null,tag,cljs.reader.read(rdr,true,null,false)));
} else
{if(cljs.core.constant$keyword$7)
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Could not find tag parser for ",[cljs.core.str(tag)].join('')," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.keys(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_))], 0))], 0));
} else
{return null;
}
}
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){var tag__$1 = [cljs.core.str(tag)].join('');var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);
return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){var tag__$1 = [cljs.core.str(tag)].join('');var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);
return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function register_default_tag_parser_BANG_(f){var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){return f;
}));
return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function deregister_default_tag_parser_BANG_(){var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){return null;
}));
return old_parser;
});
