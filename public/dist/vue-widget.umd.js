(function(e,c){typeof exports=="object"&&typeof module<"u"?module.exports=c(require("vue")):typeof define=="function"&&define.amd?define(["vue"],c):(e=typeof globalThis<"u"?globalThis:e||self,e.VueWidget=c(e.Vue))})(this,function(e){"use strict";const c=(t,n)=>{const o=t.__vccOpts||t;for(const[a,s]of n)o[a]=s;return o},p={name:"TextEnumQuestion",props:{question:{type:Object,required:!0},modelValue:{type:[String,Number],default:null},isDarkMode:{type:Boolean,default:!1}},computed:{localValue:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}}},f={class:"text-enum-question"},g={class:"options-container"},k=["name","value"],y={class:"option-text"};function b(t,n,o,a,s,r){return e.openBlock(),e.createElementBlock("div",f,[e.createElementVNode("div",g,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.question.options,l=>(e.openBlock(),e.createElementBlock("label",{key:l,class:e.normalizeClass(["option-label",{selected:o.modelValue===l,"dark-mode":o.isDarkMode}])},[e.withDirectives(e.createElementVNode("input",{type:"radio",name:"question-"+o.question.id,value:l,"onUpdate:modelValue":n[0]||(n[0]=i=>r.localValue=i),class:"option-input"},null,8,k),[[e.vModelRadio,r.localValue]]),e.createElementVNode("span",y,e.toDisplayString(l),1)],2))),128))])])}const E=c(p,[["render",b],["__scopeId","data-v-7547c3d1"]]),_={name:"ImageEnumQuestion",props:{question:{type:Object,required:!0},modelValue:{type:String,default:null},isDarkMode:{type:Boolean,default:!1}},methods:{selectOption(t){this.$emit("update:modelValue",t)}}},x={class:"image-enum-question"},V={class:"options-grid"},w=["onClick"],Q=["src","alt"],N={class:"option-label"};function B(t,n,o,a,s,r){return e.openBlock(),e.createElementBlock("div",x,[e.createElementVNode("div",V,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.question.options,l=>(e.openBlock(),e.createElementBlock("div",{key:l.value,class:e.normalizeClass(["option-card",{selected:o.modelValue===l.value,"dark-mode":o.isDarkMode}]),onClick:i=>r.selectOption(l.value)},[e.createElementVNode("img",{src:l.imageUrl,alt:l.label,class:"option-image"},null,8,Q),e.createElementVNode("div",N,e.toDisplayString(l.label),1)],10,w))),128))])])}const q=c(_,[["render",B],["__scopeId","data-v-82eaa79e"]]),D={name:"TextBoxQuestion",props:{question:{type:Object,required:!0},modelValue:{type:String,default:""},isDarkMode:{type:Boolean,default:!1}},computed:{localValue:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}}},I={class:"text-box-question"},S={class:"input-container"},M={key:0,class:"description"},C=["placeholder","rows"];function T(t,n,o,a,s,r){return e.openBlock(),e.createElementBlock("div",I,[e.createElementVNode("div",S,[o.question.description?(e.openBlock(),e.createElementBlock("div",M,e.toDisplayString(o.question.description),1)):e.createCommentVNode("",!0),e.withDirectives(e.createElementVNode("textarea",{"onUpdate:modelValue":n[0]||(n[0]=l=>r.localValue=l),placeholder:o.question.placeholder||"Enter your answer...",rows:o.question.rows||4,class:e.normalizeClass(["text-input",{"dark-mode":o.isDarkMode}])},null,10,C),[[e.vModelText,r.localValue]])])])}const P=c(D,[["render",T],["__scopeId","data-v-17bfd1c8"]]),A={name:"NumericalQuestion",props:{question:{type:Object,required:!0},modelValue:{type:[Number,String],default:null},isDarkMode:{type:Boolean,default:!1}},data(){var t;return{inputValue:((t=this.modelValue)==null?void 0:t.toString())??""}},watch:{modelValue(t){this.inputValue=(t==null?void 0:t.toString())??""}},computed:{showError(){const t=Number(this.inputValue);if(this.inputValue===""||isNaN(t))return!1;const n=this.question.min,o=this.question.max;return n!==void 0&&t<n||o!==void 0&&t>o},errorMessage(){const t=Number(this.inputValue),n=this.question.min,o=this.question.max;return n!==void 0&&t<n?"An employee ID is an 8-digit number that begins with a non-zero digit.":o!==void 0&&t>o?`Value must be at most ${o}.`:`Value must be between ${n} and ${o}.`}},methods:{handleInput(t){const o=t.target.value.replace(/\D/g,"").slice(0,8);this.inputValue=o;const a=Number(o);o!==""&&!isNaN(a)&&(this.question.min===void 0||a>=this.question.min)&&(this.question.max===void 0||a<=this.question.max)?this.$emit("update:modelValue",a):this.$emit("update:modelValue",null)}}},L={class:"numerical-question"},F={class:"input-container"},z={key:0,class:"description"},U=["placeholder"];function W(t,n,o,a,s,r){return e.openBlock(),e.createElementBlock("div",L,[e.createElementVNode("div",F,[o.question.description?(e.openBlock(),e.createElementBlock("div",z,e.toDisplayString(o.question.description),1)):e.createCommentVNode("",!0),e.withDirectives(e.createElementVNode("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=l=>s.inputValue=l),onInput:n[1]||(n[1]=(...l)=>r.handleInput&&r.handleInput(...l)),placeholder:o.question.placeholder||`Enter a number (${o.question.min}-${o.question.max})`,class:e.normalizeClass(["number-input",{"dark-mode":o.isDarkMode,"has-error":r.showError}])},null,42,U),[[e.vModelText,s.inputValue]])])])}const O=c(A,[["render",W],["__scopeId","data-v-74235f52"]]),d={async getQuestions(t){return await new Promise(n=>setTimeout(n,500)),[{id:1,type:"text-enum",text:"What type of HR question do you have?",options:["Benefits-related (Health Insurance, Retirement Plans)","Timesheet Submission Process","Holiday or Vacation Policies","Payroll Information","HR Policies and Procedures","Sick Leave or Paid Time Off","Office Attendance Policies"]},{id:2,type:"image-enum",text:"Which communication style would you prefer for this matter?",options:[{value:"AI summary",label:"AI Summary",imageUrl:"public/images/textguide.svg"},{value:"link to company documentation",label:"Company Documentation",imageUrl:"public/images/docs.svg"},{value:"video",label:"Video Walkthrough",imageUrl:"public/images/video.svg"}]},{id:3,type:"text-box",text:"Additional Information",description:"Please provide any additional information you would like to include in your request.",placeholder:'If inapplicable, type "N/A".',rows:4},{id:4,type:"numerical",text:"Your Employee ID",description:"An employee ID is an 8-digit number that begins with a non-zero digit.",min:1e7,max:99999999,placeholder:"12345678"}]},async getSolution(t){return await new Promise(o=>setTimeout(o,1e3)),this.generateSolution(t)},generateSolution(t){const n=t[1]||"unknown",o=t[2]||"unknown";t[3];const a=t[4]||"unknown",s=o.toLowerCase().startsWith("ai")?"an":"a";return`
    We've received your request on information about ${n}.
    We'll send ${s} ${o} to your email address.
    Typical response time is 2 minutes, but more complicated requests can take up to 2 hours.
    Thank you for your patience.<br><br>
    Request successfully processed for employee ${a}.
    `},async submitFeedback(t){return await new Promise(n=>setTimeout(n,300)),console.log("Feedback submitted:",t),{success:!0}}},H={name:"LoadingSpinner",props:{isDarkMode:{type:Boolean,default:!1}}};function R(t,n,o,a,s,r){return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["loading-spinner",{"dark-mode":o.isDarkMode}])},n[0]||(n[0]=[e.createElementVNode("div",{class:"spinner"},null,-1),e.createElementVNode("div",{class:"loading-text"},"Processing your request...",-1)]),2)}const j={name:"InteractiveGuidanceWidget",components:{TextEnumQuestion:E,ImageEnumQuestion:q,TextBoxQuestion:P,NumericalQuestion:O,LoadingSpinner:c(H,[["render",R],["__scopeId","data-v-e1d915a2"]])},props:{config:{type:Object,default:()=>({logo:"/default-logo.png",colors:{primary:"#470FF4",secondary:"#89AAE6",background:"#EBFFED",text:"#2E3532",accent:"#2F242C"},fonts:{primary:"Arial, sans-serif",sizes:{heading:"24px",subheading:"18px",body:"16px"}}})},isDarkMode:{type:Boolean,default:!1},headerText:{type:String,default:"MyHR"}},data(){return{userProblem:"",problemDescription:"",currentQuestions:[],currentQuestionIndex:0,answeredQuestions:[],answers:{},solution:null,feedback:null,showSolution:!1,isLoading:!1,isDarkMode:!1}},computed:{widgetStyle(){return{"--primary-color":this.config.colors.primary,"--secondary-color":this.config.colors.secondary,"--text-color":this.config.colors.text,"--accent-color":this.config.colors.accent,"--font-primary":this.config.fonts.primary,"--heading-size":this.config.fonts.sizes.heading,"--subheading-size":this.config.fonts.sizes.subheading,"--body-size":this.config.fonts.sizes.body,"--background-color":this.isDarkMode?"#1a1a1a":this.config.colors.background}},canSubmitAnswers(){return this.currentQuestions.every(t=>this.answers[t.id]!==void 0)}},mounted(){this.isDarkMode=this.checkSystemDarkMode(),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{this.isDarkMode=t.matches})},beforeUnmount(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",this.checkSystemDarkMode)},methods:{checkSystemDarkMode(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches},async submitProblem(){this.problemDescription=this.userProblem,await this.fetchQuestions()},async fetchQuestions(){try{this.currentQuestions=await d.getQuestions(this.problemDescription)}catch(t){console.error("Error fetching questions:",t)}},getQuestionComponent(t){return{"text-enum":"TextEnumQuestion","image-enum":"ImageEnumQuestion","text-box":"TextBoxQuestion",numerical:"NumericalQuestion"}[t]||"TextBoxQuestion"},async submitAnswers(){this.isLoading=!0,this.answeredQuestions=this.currentQuestions.map(t=>({question:t.text,answer:this.answers[t.id],id:t.id,type:t.type,options:t.options,min:t.min,max:t.max,description:t.description,placeholder:t.placeholder,isEditing:!1})),this.currentQuestions=[];try{await new Promise(t=>setTimeout(t,1500)),this.solution=await d.getSolution(this.answers),this.showSolution=!0}catch(t){console.error("Error fetching solution:",t),this.solution="Sorry, there was an error generating your solution. Please try again.",this.showSolution=!0}finally{this.isLoading=!1}},editAnswer(t){this.answeredQuestions.forEach(n=>n.isEditing=!1),this.answeredQuestions[t].isEditing=!0,this.answers[this.answeredQuestions[t].id]=this.answeredQuestions[t].answer},async saveAnswer(t){if(t.type==="numerical"){const n=Number(this.answers[t.id]);if(isNaN(n)||t.min!==void 0&&n<t.min||t.max!==void 0&&n>t.max){this.answers[t.id]=t.answer,t.isEditing=!1;return}}t.isEditing=!1,t.answer=this.answers[t.id],this.isLoading=!0;try{await new Promise(n=>setTimeout(n,1500)),this.solution=await d.getSolution(this.answers)}catch(n){console.error("Error fetching solution:",n),this.solution="Sorry, there was an error generating your solution. Please try again."}finally{this.isLoading=!1}},cancelEdit(t){t.isEditing=!1,this.answers[t.id]=t.answer},formatAnswer(t){return Array.isArray(t)?t.join(", "):t??"Not answered"},async submitFeedback(t){this.feedback=t;try{await d.submitFeedback(t)}catch(n){console.error("Error submitting feedback:",n)}},resetWidget(){this.answers={},this.currentQuestions=[],this.answeredQuestions=[],this.solution=null,this.feedback=null,this.problemDescription="",this.userProblem="",this.showSolution=!1},startQuestions(){this.submitProblem()},handleUserProblemInput(){},goToNextQuestion(){this.currentQuestionIndex<this.currentQuestions.length-1?this.currentQuestionIndex++:this.submitAnswers()},goBack(){this.currentQuestionIndex>0?this.currentQuestionIndex--:(this.currentQuestions=[],this.userProblem="")},handleContinue(){if(this.currentQuestion===null){if(!this.userProblem.trim())return;this.answeredQuestions.push({question:"How can I help you?",answer:this.userProblem,isEditing:!1}),this.currentQuestion=this.questions[0],this.currentQuestionIndex=0;return}if(this.currentQuestion.type==="enum"&&!this.selectedAnswer)return;this.answeredQuestions.push({question:this.currentQuestion.text,answer:this.selectedAnswer,isEditing:!1});const t=this.questions.findIndex(n=>n.id===this.currentQuestion.id);t<this.questions.length-1?(this.currentQuestion=this.questions[t+1],this.currentQuestionIndex=t+1,this.selectedAnswer=null):(this.currentQuestion=null,this.currentQuestionIndex=-1)}}},G={class:"widget-header"},Y=["src"],J={class:"widget-content"},K={key:0,class:"user-problem"},X=["disabled"],Z={key:1,class:"questions-section"},$={class:"question-container"},v=["disabled"],ee={key:2,class:"solution-container"},te={key:3,class:"solution-section"},ne=["innerHTML"],oe={class:"answered-questions"},se={class:"question-header"},ie=["onClick"],re={key:0,class:"edit-answer"},le={class:"edit-buttons"},ae=["onClick"],ce=["onClick"],de={key:1,class:"answer-display"},ue={class:"feedback-section"},me={class:"feedback-buttons"};function he(t,n,o,a,s,r){const l=e.resolveComponent("LoadingSpinner");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["guidance-widget",{"dark-mode":s.isDarkMode}])},[e.createElementVNode("div",G,[e.createElementVNode("h2",null,e.toDisplayString(o.headerText),1),e.createElementVNode("img",{src:o.config.logo,alt:"Logo",class:"widget-logo"},null,8,Y)]),e.createElementVNode("div",J,[!s.currentQuestions.length&&!s.answeredQuestions.length?(e.openBlock(),e.createElementBlock("div",K,[n[9]||(n[9]=e.createElementVNode("h3",null,"How can I help you?",-1)),e.withDirectives(e.createElementVNode("textarea",{"onUpdate:modelValue":n[0]||(n[0]=i=>s.userProblem=i),placeholder:"Describe your HR question or request...",onInput:n[1]||(n[1]=(...i)=>r.handleUserProblemInput&&r.handleUserProblemInput(...i))},null,544),[[e.vModelText,s.userProblem]]),e.createElementVNode("button",{onClick:n[2]||(n[2]=(...i)=>r.startQuestions&&r.startQuestions(...i)),disabled:!s.userProblem.trim()}," Continue ",8,X)])):s.currentQuestions.length>0?(e.openBlock(),e.createElementBlock("div",Z,[e.createElementVNode("button",{class:"back-button",onClick:n[3]||(n[3]=(...i)=>r.goBack&&r.goBack(...i))}," ← "),e.createElementVNode("div",$,[e.createElementVNode("h3",null,e.toDisplayString(s.currentQuestions[s.currentQuestionIndex].text),1),(e.openBlock(),e.createBlock(e.resolveDynamicComponent(r.getQuestionComponent(s.currentQuestions[s.currentQuestionIndex].type)),{question:s.currentQuestions[s.currentQuestionIndex],modelValue:s.answers[s.currentQuestions[s.currentQuestionIndex].id],"onUpdate:modelValue":n[4]||(n[4]=i=>s.answers[s.currentQuestions[s.currentQuestionIndex].id]=i),"is-dark-mode":s.isDarkMode},null,8,["question","modelValue","is-dark-mode"])),e.createElementVNode("button",{onClick:n[5]||(n[5]=(...i)=>r.goToNextQuestion&&r.goToNextQuestion(...i)),disabled:!s.answers[s.currentQuestions[s.currentQuestionIndex].id],class:"continue-button"}," Continue ",8,v)])])):s.isLoading?(e.openBlock(),e.createElementBlock("div",ee,[e.createVNode(l,{"is-dark-mode":s.isDarkMode},null,8,["is-dark-mode"])])):e.createCommentVNode("",!0),s.solution&&s.showSolution?(e.openBlock(),e.createElementBlock("div",te,[n[12]||(n[12]=e.createElementVNode("h3",null,"Based on your request:",-1)),e.createElementVNode("p",{innerHTML:s.solution},null,8,ne),e.createElementVNode("div",oe,[n[10]||(n[10]=e.createElementVNode("h4",null,"Your Answers",-1)),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.answeredQuestions,(i,h)=>(e.openBlock(),e.createElementBlock("div",{key:h,class:"answered-question"},[e.createElementVNode("div",se,[e.createElementVNode("h5",null,e.toDisplayString(i.question),1),e.createElementVNode("span",{class:"edit-icon",onClick:u=>r.editAnswer(h)},"✎",8,ie)]),i.isEditing?(e.openBlock(),e.createElementBlock("div",re,[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(r.getQuestionComponent(i.type)),{question:{id:i.id,type:i.type,text:i.question,options:i.options,placeholder:i.placeholder,min:i.min,max:i.max,description:i.description},modelValue:s.answers[i.id],"onUpdate:modelValue":u=>s.answers[i.id]=u,"is-dark-mode":s.isDarkMode},null,8,["question","modelValue","onUpdate:modelValue","is-dark-mode"])),e.createElementVNode("div",le,[e.createElementVNode("button",{class:"cancel-button",onClick:u=>r.cancelEdit(i)},"Cancel",8,ae),e.createElementVNode("button",{class:"save-button primary-button",onClick:u=>r.saveAnswer(i)},"Save",8,ce)])])):(e.openBlock(),e.createElementBlock("div",de,e.toDisplayString(i.answer),1))]))),128))]),e.createElementVNode("div",ue,[n[11]||(n[11]=e.createElementVNode("h4",null,"Was this helpful?",-1)),e.createElementVNode("div",me,[e.createElementVNode("button",{onClick:n[6]||(n[6]=i=>r.submitFeedback(!0)),class:e.normalizeClass(["feedback-button",{selected:s.feedback===!0}])}," 👍 ",2),e.createElementVNode("button",{onClick:n[7]||(n[7]=i=>r.submitFeedback(!1)),class:e.normalizeClass(["feedback-button",{selected:s.feedback===!1}])}," 👎 ",2)]),e.createElementVNode("button",{onClick:n[8]||(n[8]=(...i)=>r.resetWidget&&r.resetWidget(...i)),class:"reset-button"},"Done")])])):e.createCommentVNode("",!0)])],2)}const pe=c(j,[["render",he],["__scopeId","data-v-3c25dbda"]]);class m{constructor(n={}){this.options={target:n.target||"#vue-widget",config:n.config||{logo:"/default-logo.png",colors:{primary:"#470FF4",secondary:"#89AAE6",background:"#EBFFED",text:"#2E3532",accent:"#2F242C"},fonts:{primary:"Arial, sans-serif",sizes:{heading:"24px",subheading:"18px",body:"16px"}}},headerText:n.headerText||"MyHR",isDarkMode:n.isDarkMode||!1}}mount(){const n=document.querySelector(this.options.target);if(!n)throw new Error(`Target element "${this.options.target}" not found`);const o=e.createApp(pe,{config:this.options.config,headerText:this.options.headerText,isDarkMode:this.options.isDarkMode});return o.mount(n),o}}return typeof window<"u"&&(window.VueWidget=m),m});
