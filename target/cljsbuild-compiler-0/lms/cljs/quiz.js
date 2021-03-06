// Compiled by ClojureScript 0.0-2173
goog.provide('lms.cljs.quiz');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('clojure.core.reducers');
goog.require('clojure.core.reducers');
goog.require('domina');
goog.require('domina.events');
goog.require('domina.events');
goog.require('clojure.string');
goog.require('goog.dom.forms');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('domina');
lms.cljs.quiz.quiz_id = "quiznumber";
lms.cljs.quiz.quiz_button = "quiz";
lms.cljs.quiz.form_id = "form";
lms.cljs.quiz.url = "/home/showquiz";
lms.cljs.quiz.url1 = "/home/submit-grades";
lms.cljs.quiz.text_id = "text";
lms.cljs.quiz.grade_id = "grades";
lms.cljs.quiz.get_result_id = "getresult";
lms.cljs.quiz.gradeurl = "/home/getgrade";
lms.cljs.quiz.upload_id = "upload";
lms.cljs.quiz.uploadurl = "/home/uploadquiz";
lms.cljs.quiz.getfile = "getfile";
lms.cljs.quiz.fileurl = "/home/uploadquiz/getfile";
lms.cljs.quiz.serialize = (function serialize(m){return [cljs.core.str(m)].join('');
});
lms.cljs.quiz.receive_result = (function receive_result(event){return domina.set_inner_html_BANG_(domina.by_id("container"),event.target.getResponseText());
});
lms.cljs.quiz.receive_form = (function receive_form(event){console.log([cljs.core.str(event.target.getResponseText())].join(''));
return domina.set_text_BANG_(domina.by_id(lms.cljs.quiz.grade_id),event.target.getResponseText());
});
lms.cljs.quiz.post_for_eval = (function post_for_eval(expr_str){return goog.net.XhrIo.send(lms.cljs.quiz.url,lms.cljs.quiz.receive_result,"POST",expr_str);
});
lms.cljs.quiz.post_for_quizresult = (function post_for_quizresult(expr_str){return goog.net.XhrIo.send(lms.cljs.quiz.url1,lms.cljs.quiz.receive_form,"POST",expr_str);
});
lms.cljs.quiz.post_for_gradetable = (function post_for_gradetable(){return goog.net.XhrIo.send(lms.cljs.quiz.gradeurl,lms.cljs.quiz.receive_grades,"POST");
});
lms.cljs.quiz.receive_grades = (function receive_grades(event){return domina.set_inner_html_BANG_(domina.by_id("container"),event.target.getResponseText());
});
lms.cljs.quiz.receive_num = (function receive_num(event){return null;
});
lms.cljs.quiz.recieve_upload = (function recieve_upload(event){return domina.set_inner_html_BANG_(domina.by_id("container"),event.target.getResponseText());
});
lms.cljs.quiz.post_for_upload = (function post_for_upload(){console.log([cljs.core.str("hi")].join(''));
return goog.net.XhrIo.send(lms.cljs.quiz.uploadurl,lms.cljs.quiz.recieve_upload,"POST");
});
lms.cljs.quiz.post_for_file = (function post_for_file(expr_str){return goog.net.XhrIo.send(lms.cljs.quiz.fileurl,lms.cljs.quiz.receive_num,"POST",cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$18,lms.cljs.quiz.form,cljs.core.constant$keyword$19,(lms.cljs.quiz.raw_response_format.cljs$core$IFn$_invoke$arity$0 ? lms.cljs.quiz.raw_response_format.cljs$core$IFn$_invoke$arity$0() : lms.cljs.quiz.raw_response_format.call(null)),cljs.core.constant$keyword$20,100], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/src/lms/cljs/quiz.cljs"], null)),expr_str);
});
lms.cljs.quiz.get_form = (function get_form(){var form = goog.json.serialize(goog.dom.forms.getFormDataMap(domina.by_id(lms.cljs.quiz.form_id)));console.log([cljs.core.str("formdata : "),cljs.core.str(form)].join(''));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$21,form], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/src/lms/cljs/quiz.cljs"], null));
});
lms.cljs.quiz.get_quiz_number = (function get_quiz_number(){var number = domina.by_id(lms.cljs.quiz.quiz_id).value;return lms.cljs.quiz.serialize(cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,number], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/src/lms/cljs/quiz.cljs"], null)));
});
lms.cljs.quiz.get_file = (function get_file(){var form = domina.by_id("foo");var name = form.name;var file = (form.files[0]);var form_data = (function (){var G__5115 = (new FormData());G__5115.append(name,file);
return G__5115;
})();return goog.net.XhrIo.send(lms.cljs.quiz.fileurl,lms.cljs.quiz.receive_num,"POST",cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,form_data,cljs.core.constant$keyword$19,(lms.cljs.quiz.raw_response_format.cljs$core$IFn$_invoke$arity$0 ? lms.cljs.quiz.raw_response_format.cljs$core$IFn$_invoke$arity$0() : lms.cljs.quiz.raw_response_format.call(null)),cljs.core.constant$keyword$20,100], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$6,"/Users/shreyvithalani/Desktop/lms-gradesheet/src/lms/cljs/quiz.cljs"], null)),lms.cljs.quiz.expr_str);
});
lms.cljs.quiz.file = (function file(){return lms.cljs.quiz.get_file();
});
goog.exportSymbol('lms.cljs.quiz.file', lms.cljs.quiz.file);
lms.cljs.quiz.form = (function form(){return lms.cljs.quiz.post_for_quizresult(lms.cljs.quiz.get_form());
});
goog.exportSymbol('lms.cljs.quiz.form', lms.cljs.quiz.form);
lms.cljs.quiz.main = (function main(){domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.by_id(lms.cljs.quiz.quiz_id),cljs.core.constant$keyword$24,(function (event){lms.cljs.quiz.post_for_eval(lms.cljs.quiz.get_quiz_number());
domina.events.stop_propagation(event);
return domina.events.prevent_default(event);
}));
domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.by_id(lms.cljs.quiz.get_result_id),cljs.core.constant$keyword$25,(function (event){lms.cljs.quiz.post_for_gradetable();
domina.events.stop_propagation(event);
return domina.events.prevent_default(event);
}));
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.by_id(lms.cljs.quiz.upload_id),cljs.core.constant$keyword$25,(function (event){lms.cljs.quiz.post_for_upload();
domina.events.stop_propagation(event);
return domina.events.prevent_default(event);
}));
});
goog.exportSymbol('lms.cljs.quiz.main', lms.cljs.quiz.main);
