(this["webpackJsonponline-tutors"]=this["webpackJsonponline-tutors"]||[]).push([[22],{545:function(e,t,a){"use strict";var n=a(12),r=a(13),c=a(15),s=a(14),i=a(0),o=a.n(i),l=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},o.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),o.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},o.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),o.a.createElement("span",null,this.props.label))}}]),a}(o.a.Component);t.a=l},546:function(e,t,a){"use strict";var n=a(12),r=a(13),c=a(15),s=a(14),i=a(0),o=a.n(i),l=a(658),u=a(659),d=a(200),p=a(38),m=a(20),f=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"content-header row"},o.a.createElement("div",{className:"content-header-left col-md-9 col-12 mb-2"},o.a.createElement("div",{className:"row breadcrumbs-top"},o.a.createElement("div",{className:"col-12"},this.props.breadCrumbTitle?o.a.createElement("h2",{className:"content-header-title float-left mb-0"},this.props.breadCrumbTitle):"",o.a.createElement("div",{className:"breadcrumb-wrapper vx-breadcrumbs d-sm-block d-none col-12"},o.a.createElement(l.a,{tag:"ol"},o.a.createElement(u.a,{tag:"li"},o.a.createElement(p.b,{to:m.subRooter},o.a.createElement(d.a,{className:"align-top",size:15}))),o.a.createElement(u.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent),this.props.breadCrumbParent2?o.a.createElement(u.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent2):"",this.props.breadCrumbParent3?o.a.createElement(u.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent3):"",o.a.createElement(u.a,{tag:"li",active:!0},this.props.breadCrumbActive)))))))}}]),a}(o.a.Component);t.a=f},548:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){var t=e.substr(e.indexOf("."),e.length);return(e=e.split(t).join(" ")).replace(/t/gi," ")},r=function(e){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},549:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"b",(function(){return p}));var n=a(50),r=a(20),c=a(6),s=a(107),i=a(108),o=function(){return function(e,t){return e()}},l=function(){return function(e){s.a.get("/category/parents").then((function(t){e({type:c.u,data:t.data.parents})}))}},u=function(e){return function(t,a){var o=new FormData;o.append("image",e.file),o.append("name",e.name),o.append("parentId",e.parentId),s.a.post("/category/create",o).then((function(e){Object(i.d)("Successfully Created"),t({type:c.c,data:e.data.doc}),n.a.push("".concat(r.subRooter,"/categories")),t(l())})).catch((function(e){Object(i.c)(e)}))}},d=function(e){return function(t,a){var n=new FormData;n.append("image",e.file),n.append("name",e.name),n.append("parentId",e.parentId),s.a.put("/category/"+e._id,n).then((function(e){Object(i.d)("Successfully Updated"),t({type:c.X}),t(l())})).catch((function(e){Object(i.c)(e)}))}},p=function(e){return function(t){s.a.delete("/category/"+e._id).then((function(a){Object(i.d)("Successfully Deleted"),t({type:c.j,data:e}),t(l())})).catch((function(e){Object(i.c)(e)}))}}},550:function(e,t,a){"use strict";a.d(t,"e",(function(){return l})),a.d(t,"a",(function(){return u})),a.d(t,"f",(function(){return d})),a.d(t,"d",(function(){return p})),a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return f})),a.d(t,"g",(function(){return h}));var n=a(541),r=a.n(n),c=a(542),s=a(6),i=a(107),o=a(108),l=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="",e&&e.page?(isNaN(e.page)&&(e.page=1),isNaN(e.perPage)&&(e.perPage=4),n="/levels?page=".concat(e.page,"&perPage=").concat(e.perPage)):n="/levels?page=1&perPage=4",t.next=4,i.a.get(n).then((function(t){a({type:s.F,data:t.data.levels,totalPages:t.data.totalPages,params:e})})).catch(o.c);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(t,a){var n=a().level.params,r=new FormData;r.append("image",e.file),r.append("name",e.name),r.append("description",e.description),i.a.post("/level/create",r).then((function(e){t({type:s.e,obj:e.data.doc}),t(l(n)),Object(o.d)("Successfully Submitted")})).catch(o.c)}},d=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/levels").then((function(e){t({type:s.w,data:e.data.levels})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(t){return t({type:s.P,value:e})}},m=function(e){return function(t){i.a.delete("/level/"+e._id).then((function(a){t({type:s.m,obj:e}),Object(o.d)("Successfully  deleted!")})).catch(o.c)}},f=function(e){return function(t){i.a.put("/levels-delete",{ids:e}).then((function(e){e.data.relatedData&&e.data.relatedData.length>0&&Object(o.b)("".concat(e.data.relatedData.length," data has relevant data.")),e.data.deletedIds.length>0&&Object(o.d)("Successfully deleted"),t({type:s.n,ids:e.data.deletedIds})})).catch(o.c)}},h=function(e){return function(t,a){var n=new FormData;n.append("image",e.file),n.append("name",e.name),n.append("description",e.description);var r=a().level.params;i.a.put("/level/"+e._id,n).then((function(a){t({type:s.ab,obj:e}),t(l(r))})).catch(o.c)}}},553:function(e,t,a){"use strict";a.d(t,"e",(function(){return l})),a.d(t,"g",(function(){return u})),a.d(t,"a",(function(){return d})),a.d(t,"d",(function(){return p})),a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return f})),a.d(t,"h",(function(){return h})),a.d(t,"f",(function(){return v}));var n=a(541),r=a.n(n),c=a(542),s=a(6),i=a(107),o=a(108),l=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/management/topics?page=".concat(e.page,"&perPage=").concat(e.perPage)).then((function(t){a({type:s.I,data:t.data.topics,totalPages:t.data.totalPages,params:e})}));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},u=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/management/topics").then((function(e){t({type:s.y,data:e.data.topics})}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},d=function(e){return function(t,a){var n=a().topic.params;i.a.post("/topic/create",e).then((function(e){Object(o.d)("Successfully Submitted!"),t(l(n))})).catch(o.c)}},p=function(e){return function(t){return t({type:s.Q,value:e})}},m=function(e){return function(t){i.a.delete("/topic/"+e._id).then((function(a){Object(o.d)("".concat(e.name," topic have been deleted!")),t({type:s.o,obj:e})})).catch(o.c)}},f=function(e){return function(t,a){var n=a().topic.params;i.a.put("/delete-topics",{ids:e}).then((function(e){e.data.deletedIds.length>0&&Object(o.d)("".concat(e.data.deletedIds.length," topic have been deleted!")),e.data.usedIds.length>0&&Object(o.b)("".concat(e.data.usedIds.length," topics have relevant Lesson or Assessment!")),e.data.deletedIds.length>0&&(t(l(n)),t({type:s.p,ids:e.data.deletedIds}))})).catch(o.c)}},h=function(e){return function(t,a){var n=a().topic.params;console.log("obj",e),i.a.put("/topic/"+e._id,e).then((function(a){t({type:s.bb,obj:e}),t(l(n))})).catch(o.c)}},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/topics?type=".concat(e)).then((function(e){a({type:s.J,data:e.data.topics})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},555:function(e,t,a){"use strict";var n=a(12);t.a=function e(t){var a=this;Object(n.a)(this,e),this.siteUrl="",this.query="?",this.set=function(e,t){a.query.indexOf("=")>-1&&(a.query+="&"),a.query+="".concat(e,"=").concat(t)},this.get=function(){return a.siteUrl+a.query},this.siteUrl=""!==t?t:""}},571:function(e,t,a){},602:function(e,t,a){"use strict";a.d(t,"e",(function(){return f})),a.d(t,"a",(function(){return h})),a.d(t,"g",(function(){return v})),a.d(t,"d",(function(){return g})),a.d(t,"h",(function(){return b})),a.d(t,"f",(function(){return y})),a.d(t,"b",(function(){return E})),a.d(t,"c",(function(){return C}));var n=a(541),r=a.n(n),c=a(542),s=a(50),i=a(6),o=a(107),l=a(108),u=a(20),d=a(12),p=a(555),m=function e(t){var a=this;Object(d.a)(this,e),this.buildQuery=function(){var e=new p.a("");return a._id&&e.set("_id",a._id),a.topic&&e.set("topic",a.topic),a.level&&e.set("level",a.level),a.question&&e.set("question",a.question),a.isMCQ&&e.set("isMCQ",a.isMCQ),a.createdBy&&e.set("createdBy",a.createdBy),a.deleted&&e.set("deleted",a.deleted),a.category&&e.set("category",a.category),e.get()},this._id=t._id,this.topic=t.topic,this.level=t.level,this.question=t.question,this.isMCQ=t.isMCQ,this.createdBy=t.createdBy,this.deleted=t.deleted,this.category=t.category},f=function(e){return null===e&&((e={}).page=1,e.perPage=4),function(){var t=Object(c.a)(r.a.mark((function t(a,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/assessments?page=".concat(e.page,"&perPage=").concat(e.perPage)).then((function(t){a({type:i.A,data:t.data.assessments,totalPages:t.data.totalPages,params:e})}));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},h=function(e){return function(t,a){var n=a().assessment.params,r=e.videos,c=new FormData;c.append("question",e.question),c.append("level",e.level),c.append("youtubeUrl",e.youtubeUrl),c.append("videos",r[0]),c.append("description",e.description),c.append("image",e.image[0]),c.append("topic",e.topic),c.append("isMCQ",e.isMCQ),c.append("MCQs",JSON.stringify(e.MCQs)),c.append("mark",e.mark),o.a.post("/assessment/create",c).then((function(e){t({type:i.a,obj:e.data.doc}),t(f(n)),Object(l.d)("Successfully uploaded new question!"),s.a.push("".concat(u.subRooter,"/assessment"))})).catch(l.c)}},v=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/assessments").then((function(e){t({type:i.s,data:e.data.assessments})}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},g=function(e,t){return function(a){return a({type:i.M,value:e,filterOption:t})}},b=function(e){return function(t,a){var n=a().assessment.params,r=new FormData;r.append("question",e.question),r.append("youtubeUrl",e.youtubeUrl),r.append("videos",e.videos[0]),r.append("description",e.description),r.append("level",e.level),r.append("image",e.image[0]),r.append("topic",e.topic),r.append("isMCQ",e.isMCQ),r.append("MCQs",JSON.stringify(e.MCQs)),r.append("mark",e.mark),o.a.put("/assessment/"+e._id,r).then((function(a){t({type:i.V,obj:e}),t(f(n)),Object(l.d)("Successfully updated!")})).catch(l.c)}},y=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a,n){var c,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=new m(e),s=c.buildQuery(),t.next=4,o.a.get("/assessments/filter"+s).then((function(e){a({type:i.N,data:e.data.assessments})}));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},E=function(e){return function(t){o.a.delete("/assessment/"+e._id).then((function(a){t({type:i.g,obj:e})})).catch(l.c)}},C=function(e){return function(t){o.a.put("/assessment-delete",{ids:e}).then((function(e){var a=e.data.deletedIds,n=e.data.relatedData;a.length>0&&Object(l.d)("Successfully deleted ".concat(a.length," data!")),n.length>0&&Object(l.b)("".concat(n.length," data ").concat(n.length>1?"have":"has"," relevant data.")),t({type:i.h,ids:a})})).catch(l.c)}}},675:function(e,t,a){"use strict";var n=a(148),r=a(0),c=a.n(r),s=a(735),i=a(217),o=a(301);t.a=function(e){var t=Object(r.useState)([]),a=Object(n.a)(t,2),l=a[0],u=a[1],d=Object(s.a)({accept:e.accept,multiple:e.multiple||!0,onDrop:function(e){u(e.map((function(e){return Object.assign(e,{prevew:URL.createObjectURL(e)})})))}}),p=d.getRootProps,m=d.getInputProps,f=l.map((function(t){return c.a.createElement("div",{className:"dz-thumb p-1",key:t.name},c.a.createElement("div",{className:"dz-thumb-inner overflow-hidden text-center"},"video"===e.type&&c.a.createElement("video",{controls:!0,src:t.prevew,poster:t.prevew,width:"620",className:"w-100"},"Sorry, your browser doesn't support embedded videos, but don't worry, you can download it and watch it with your favorite video player!"),"image"===e.type&&c.a.createElement("img",{src:t.prevew,className:"dz-img",alt:t.name,height:"100"}),c.a.createElement("p",{className:"text-white mt-1"},t.name)))}));return Object(r.useEffect)((function(){return function(){l.forEach((function(e){return URL.revokeObjectURL(e.prevew)}))}}),[l]),Object(r.useEffect)((function(){e.onLoadFile(l)}),[l]),c.a.createElement("section",{className:"w-100 position-relative",style:e.style||{}},c.a.createElement("div",Object.assign({className:"h-25 "},p({className:"dropzone"})),c.a.createElement("input",m()),f.length?c.a.createElement("div",{className:"thumb-container m-0 "},f):c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(i.a,{className:"w-100 d-block text-center",color:"white",size:100}),c.a.createElement("p",{className:"d-blok text-center text-white"},e.placeholder?e.placeholder:"Drag & drop Files here")))),f.length>0&&c.a.createElement("div",{className:"text-center"},c.a.createElement(o.a,{className:"color-danger",onClick:function(){u([])}},"Remove")))}},676:function(e,t,a){"use strict";var n=a(12),r=a(13),c=a(15),s=a(14),i=a(0),o=a.n(i),l=a(692),u=a(641),d=a(731),p=a.n(d),m=a(732),f=a.n(m),h=(a(624),a(571),function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={editorState:null,content:null},r.htmlToState=function(e){var t=f()(e);if(t){var a=u.ContentState.createFromBlockArray(t.contentBlocks),n=u.EditorState.createWithContent(a);r.setState({editorState:n,content:e})}},r.uploadImageCallBack=function(e){return new Promise((function(t,a){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var r=new FormData;r.append("image",e),n.send(r),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);t(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);a(e)}))}))},r.handleUpdate=function(e){r.setState({editorState:e}),r.props.onChange(p()(Object(u.convertToRaw)(e.getCurrentContent())))},r}return Object(r.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){null===this.state.content&&""!==e.html&&this.htmlToState(e.html)}},{key:"render",value:function(){var e=this.state.editorState;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.Editor,{editorState:e,wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",toolbar:{inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!0},history:{inDropdown:!0},image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!0,mandatory:!0}}},onEditorStateChange:this.handleUpdate}))}}]),a}(o.a.Component));t.a=h},866:function(e,t,a){"use strict";a.r(t),a.d(t,"AssessmentForm",(function(){return A}));var n=a(564),r=a(51),c=a(12),s=a(13),i=a(15),o=a(14),l=a(0),u=a.n(l),d=a(301),p=a(579),m=a(577),f=a(604),h=a(632),v=a(633),g=a(578),b=a(603),y=a(631),E=a(867),C=a(884),x=a(546),w=a(545),N=a(675),k=a(188),j=a(676),O=a(20),I=a(183),S=a(208),M=a(209),Q=a(215),D=a(559),P=a(38),U=a(27),q=a(550),R=a(549),T=a(553),F=a(548),L=a(602),_=[{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:10,label:"10"}],A=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={question:"",youtubeUrl:"",uploadedImages:[],uploadedVideos:[],MCQs:[{index:0,isCorrect:!1,text:""}],isMCQ:!1,description:"",mark:1,isInvalid:!1,selectedLevelId:"",selectedCategoryId:"",selectedTopicId:"",currentData:null},e.formtype="",e.initdata=function(){e.setState({question:"",youtubeUrl:"",uploadedImages:[],uploadedVideos:[],MCQs:[{index:0,isCorrect:!1,text:""}],isMCQ:!1,description:"",mark:1,isInvalid:!1,selectedLevelId:"",selectedCategoryId:"",selectedTopicId:"",currentData:null})},e.handleOnSubmit=function(t){t.preventDefault(),e.isValid(e.state,e.formtype)?(e.setState({isInvalid:!1}),"edit"!==e.formtype?e.props.addAssessment({question:e.state.question,level:e.state.selectedLevelId,youtubeUrl:e.state.youtubeUrl,image:e.state.uploadedImages,videos:e.state.uploadedVideos,MCQs:e.state.MCQs,description:e.state.description,topic:e.state.selectedTopicId,isMCQ:e.state.isMCQ,mark:e.state.mark}):e.props.updateData({_id:e.state.id,question:e.state.question,level:e.state.selectedLevelId,youtubeUrl:e.state.youtubeUrl,image:e.state.uploadedImages,videos:e.state.uploadedVideos,MCQs:e.state.MCQs,description:e.state.description,topic:e.state.selectedTopicId,isMCQ:e.state.isMCQ,mark:e.state.mark})):e.setState({isInvalid:!0})},e.isValid=function(e,t){return e.question&&e.selectedCategoryId&&e.selectedTopicId&&e.selectedLevelId},e.handleFiles=function(t,a){"image"===t?e.setState({uploadedImages:a}):"video"===t&&e.setState({uploadedVideos:a})},e.handleEditor=function(t){Object.is(e.state.description,t)||e.setState({description:t})},e.handleChange=function(t,a){e.setState(Object(r.a)({},t,a))},e.addNewMCQ=function(){var t=e.state.MCQs,a={index:t.length,isCorrect:!1,text:""};t.push(a),e.setState({MCQs:t.slice()})},e.handelChangeMCQValueByIndex=function(t,a){"undefined"===typeof t&&alert("You need to pass index");var n=e.state.MCQs;n[t].text=a,e.setState({MCQs:n})},e.handleDeleteMCQByIndex=function(t){var a=e.state.MCQs.filter((function(e,a){return t!==a}));e.setState({MCQs:a})},e.checkMCQCorrectAnswer=function(t){var a=e.state.MCQs;a[t].isCorrect=!a[t].isCorrect,e.setState({MCQs:a})},e.renderCategory=function(e){var t,a=[],r=Object(n.a)(e);try{for(r.s();!(t=r.n()).done;){var c=t.value;if(a.push({value:c._id,label:c.name,isDisabled:c.children&&c.children.length>0}),c.children){var s,i=Object(n.a)(c.children);try{for(i.s();!(s=i.n()).done;){var o=s.value;a.push({value:o._id,label:u.a.createElement("span",{style:{paddingLeft:"3px"},className:"pl-1"},o.name)})}}catch(l){i.e(l)}finally{i.f()}}}}catch(l){r.e(l)}finally{r.f()}return a},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getLevels(),this.props.getCategories(),this.props.getTopics("ASSESSMENT"),this.formtype=Object(F.a)("type");var e=Object(F.a)("id");""!==e?this.props.getDatabyFilter({_id:e}):this.initdata()}},{key:"render",value:function(){var e=this,t=this.state,a=t.MCQs,n=t.isMCQ,r=t.mark,c=t.description,s=t.selectedLevelId,i=t.selectedCategoryId,o=t.selectedTopicId,l=t.question,U=t.youtubeUrl,q=t.currentData,R=this.props,T=R.topics,F=R.levels,L=R.categories;0===a.length&&this.addNewMCQ();var A=T.filter((function(e){return e.levelId._id===s&&e.categoryId._id===i})).map((function(e){return{value:e._id,label:e.name}})),z=F.map((function(e){return{value:e._id,label:e.name}})),B=this.renderCategory(L);return u.a.createElement(u.a.Fragment,null,u.a.createElement(x.a,{breadCrumbTitle:"Assessment",breadCrumbParent:"Area",breadCrumbActive:"".concat("edit"===this.formtype?"Edit Assessment":"New Assessment")}),u.a.createElement("div",{className:"ml-1 mb-1"},u.a.createElement(d.a.Ripple,{outline:!0,color:"info",onClick:function(){e.props.history.push("".concat(O.subRooter,"/assessment"))}},u.a.createElement(I.a,{size:20})," Back to List")),u.a.createElement(p.a,null,u.a.createElement(m.a,null,u.a.createElement(f.a,{className:"text-left",onSubmit:this.handleOnSubmit},u.a.createElement(h.a,null,u.a.createElement(v.a,{md:"2",xs:"12",xl:"2",style:{zIndex:1001}},u.a.createElement("div",{className:"m-auto"},u.a.createElement(g.a,null,u.a.createElement("h5",{className:"my-1 text-bold-500 text-center"},"Mark"),u.a.createElement(D.a,{className:"React",classNamePrefix:"select",name:"mark",options:_,value:_.find((function(e){return e.value===r})),onChange:function(t){return e.setState({mark:t.value})}})))),u.a.createElement(v.a,{md:"10",xs:"12",xl:"10"},u.a.createElement(h.a,null,u.a.createElement(v.a,{md:"3",sm:"12",style:{zIndex:1e3}},u.a.createElement(g.a,null,u.a.createElement(b.a,{for:"level"},"Select Level"),u.a.createElement(D.a,{className:"React",classNamePrefix:"select",name:"level",id:"level",value:z.find((function(e){return e.value===s})),options:z,onChange:function(t){return e.setState({selectedLevelId:t.value,selectedTopicId:""})}}),!s&&u.a.createElement("p",{className:"text-danger"},"please select level!"))),u.a.createElement(v.a,{md:"3",sm:"12",style:{zIndex:999}},u.a.createElement(g.a,null,u.a.createElement(b.a,{for:"category"},"Select Category"),console.log(B.find((function(e){return e.value===i}))),console.log("selectedCategoryId",i),u.a.createElement(D.a,{className:"React",classNamePrefix:"select",name:"category",id:"category",options:B,value:B.find((function(e){return e.value===i})),onChange:function(t){return e.setState({selectedCategoryId:t.value,selectedTopicId:""})}}),!i&&u.a.createElement("p",{className:"text-danger"},"please select level!"))),u.a.createElement(v.a,{md:"5",sm:"10",style:{zIndex:998}},u.a.createElement(g.a,null,u.a.createElement(b.a,{for:"topic"},"Select Topic"),u.a.createElement(D.a,{className:"React",classNamePrefix:"select",name:"topic",id:"topic",options:A,value:A.find((function(e){return e.value===o})),onChange:function(t){return e.setState({selectedTopicId:t.value})}}),!o&&u.a.createElement("p",{className:"text-danger"},"please select level!"))),u.a.createElement(v.a,{md:"1",sm:"2",className:"mt-2"},u.a.createElement(g.a,null,u.a.createElement(P.a,{to:"".concat(O.subRooter,"/topics")},u.a.createElement(S.a,{size:30})))),u.a.createElement(v.a,{sm:"12"},u.a.createElement(g.a,null,u.a.createElement(b.a,{for:"question"},"Question"),u.a.createElement(y.a,{type:"text",name:"question",id:"question",placeholder:"Input Question",value:l,onChange:function(t){return e.setState({question:t.target.value})},invalid:""===l}),""===l&&u.a.createElement("span",{className:"invalid-tooltip"},"please input name"))),u.a.createElement(v.a,{md:"12"},u.a.createElement(p.a,null,u.a.createElement(b.a,{for:"description",className:"pb-1"},"Description"),u.a.createElement(j.a,{id:"description",html:c,onChange:function(t){return e.handleEditor(t)}}))),u.a.createElement(v.a,{md:"12"},u.a.createElement(h.a,{className:"mb-1"},u.a.createElement(v.a,{md:"6"},q&&q.imgUrl?u.a.createElement(h.a,{className:"m-1"},u.a.createElement(v.a,{md:"12"},u.a.createElement("img",{className:"w-100",src:q.imgUrl,alt:""})),u.a.createElement(v.a,{md:"12",className:"text-right mt-1"},u.a.createElement(d.a.Ripple,{color:"danger",className:"mb-1",onClick:function(){var t=q;t.imgUrl="",e.setState({currentData:t})}},"Remove"))):u.a.createElement(u.a.Fragment,null,u.a.createElement(N.a,{accept:"image/*",type:"image",placeholder:"Image File",multiple:!1,onLoadFile:function(t){return e.handleFiles("image",t)},style:{background:"linear-gradient(to right, rgb(86, 171, 47), rgb(168, 224, 99))"}}))),u.a.createElement(v.a,{md:"6"},q&&q.videos&&q.videos.length>0&&""!==q.videos[0]?u.a.createElement(h.a,{className:"m-1"},u.a.createElement(v.a,{md:"12"},u.a.createElement("video",{controls:!0,src:q.videos[0],width:"620",className:"w-100"},"Sorry, your browser doesn't support embedded videos, but don't worry, you can download it and watch it with your favorite video player!")),u.a.createElement(v.a,{md:"12",className:"text-right"},u.a.createElement(d.a.Ripple,{color:"danger",className:"mb-1",onClick:function(){var t=q;t.videos=[],e.setState({currentData:t})}},"Remove"))):u.a.createElement(N.a,{accept:".avi, .mp4, mpg, .ogg",type:"video",placeholder:"Video Files",onLoadFile:function(t){return e.handleFiles("video",t)},style:{background:"linear-gradient(to right, rgb(86, 171, 47), rgb(168, 224, 99))"}})))),u.a.createElement(v.a,{sm:"12"},u.a.createElement(g.a,null,u.a.createElement(b.a,{for:"youtube-url"},"Youtube URL"),u.a.createElement(y.a,{type:"text",name:"youtubeUrl",id:"youtube-url",placeholder:"Youtube URL",value:U,onChange:function(t){return e.setState({youtubeUrl:t.target.value})},invalid:!/^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/.test(U)&&""!==U&&u.a.createElement("p",{className:"text-danger"},"This is invalid youtube url")})))),u.a.createElement(h.a,null,u.a.createElement(v.a,null,u.a.createElement("div",{className:"d-inline-block mr-1"},u.a.createElement(w.a,{color:"primary",icon:u.a.createElement(k.a,{className:"vx-icon",size:16}),label:"MCQ",checked:n,value:this.state.isMCQ,onChange:function(){n?e.setState({isMCQ:!n}):e.setState({isMCQ:!n,MCQs:[{index:0,isCorrect:!1,text:""}]})}}),console.log("this.state.isMCQ",this.state.isMCQ)))),n&&u.a.createElement(h.a,null,!a.find((function(e){return!0===e.isCorrect}))&&u.a.createElement("p",{className:"text-danger"},"Please select correct answer"),u.a.createElement("pre",null,console.log("MCQs12312321",a)),u.a.createElement(v.a,{md:"12"},u.a.createElement(g.a,null,u.a.createElement(E.a,null,u.a.createElement(y.a,{value:a[0].text,onChange:function(t){return e.handelChangeMCQValueByIndex(0,t.target.value)}}),u.a.createElement(C.a,{addonType:"append"},u.a.createElement(w.a,{color:"primary",icon:u.a.createElement(k.a,{className:"vx-icon",size:16}),label:"Correct Answer",checked:a[0].isCorrect,value:a[0].isCorrect,onChange:function(){return e.checkMCQCorrectAnswer(0)},className:"pl-1 bg-primary"}),u.a.createElement(d.a.Ripple,{color:"success",onClick:this.addNewMCQ},u.a.createElement(M.a,{size:24}))))),a.length>1&&a.map((function(t,a){return 0===a?null:u.a.createElement(g.a,{key:a},u.a.createElement(E.a,null,u.a.createElement(y.a,{value:t.text,onChange:function(t){return e.handelChangeMCQValueByIndex(a,t.target.value)}}),u.a.createElement(C.a,{addonType:"append"},u.a.createElement(w.a,{color:"primary",icon:u.a.createElement(k.a,{className:"vx-icon",size:16}),label:"Correct Answer",value:t.isCorrect,checked:t.isCorrect,onChange:function(){return e.checkMCQCorrectAnswer(a)},className:"pl-1 bg-primary"}),u.a.createElement(d.a.Ripple,{color:"danger",onClick:function(){return e.handleDeleteMCQByIndex(a)}},u.a.createElement(Q.a,{size:24})))))})))),u.a.createElement(h.a,null,u.a.createElement(v.a,{sm:"12"},u.a.createElement(g.a,{className:"text-right"},this.state.isInvalid&&u.a.createElement("p",{className:"text-danger"},"please check above fields"),u.a.createElement(d.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit"))))))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.filteredData[0]&&!Object.is(e.filteredData[0],t.currentData)){var a=e.filteredData[0];return{id:a._id,currentData:a,question:a.question,youtubeUrl:a.youtubeUrl,MCQs:a.MCQs,description:a.description,selectedCategoryId:a.topic.categoryId._id,selectedTopicId:a.topic._id,selectedLevelId:a.level._id,isMCQ:a.isMCQ,mark:a.mark}}return null}}]),a}(l.Component),z={getLevels:q.f,getCategories:R.d,getTopics:T.f,updateData:L.h,addAssessment:L.a,getDatabyFilter:L.f};t.default=Object(U.b)((function(e){return{levels:e.level.allData,categories:e.category.allData,topics:e.topic.dataPerType,allAssessments:e.assessment.allData,filteredData:e.assessment.queryData}}),z)(A)}}]);
//# sourceMappingURL=22.4eca1170.chunk.js.map