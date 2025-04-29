import{j as s}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import{g as E}from"./_commonjsHelpers-Cpj98o6Y.js";var I={exports:{}},N="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",O=N,j=O;function P(){}function R(){}R.resetWarningCache=P;var D=function(){function e(l,u,$,F,W,A){if(A!==j){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:R,resetWarningCache:P};return r.PropTypes=r,r};I.exports=D();var C=I.exports;const n=E(C);function p({task:{id:e,title:t,state:r},onArchiveTask:l,onPinTask:u}){return s.jsxs("div",{className:`list-item ${r}`,children:[s.jsxs("label",{htmlFor:"checked","aria-label":`archiveTask-${e}`,className:"checkbox",children:[s.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:r==="TASK_ARCHIVED"}),s.jsx("span",{className:"checkbox-custom",onClick:()=>l(e)})]}),s.jsx("label",{htmlFor:"title","aria-label":t,className:"title",children:s.jsx("input",{type:"text",value:t,readOnly:!0,name:"title",placeholder:"Input title",style:{textOverflow:"ellipsis"}})}),r!=="TASK_ARCHIVED"&&s.jsx("button",{className:"pin-button",onClick:()=>u(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:s.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]})}p.propTypes={task:n.shape({id:n.string.isRequired,title:n.string.isRequired,state:n.string.isRequired}),onArchiveTask:n.func,onPinTask:n.func};p.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"Composition of the task",type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1},onArchiveTask:{description:"Event to change the task to archived",type:{name:"func"},required:!1},onPinTask:{description:"Event to change the task to pinned",type:{name:"func"},required:!1}}};const q={component:p,title:"Task",tags:["autodocs"]},a={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},o={args:{task:{...a.args.task,state:"TASK_PINNED"}}},i={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}},w="This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!",c={args:{task:{...a.args.task,title:w}}};var m,h,k;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var T,g,f;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,_,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(v=(_=i.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var x,S,b;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      title: longTitleString
    }
  }
}`,...(b=(S=c.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const K=["Default","Pinned","Archived","LongTitle"],B=Object.freeze(Object.defineProperty({__proto__:null,Archived:i,Default:a,LongTitle:c,Pinned:o,__namedExportsOrder:K,default:q},Symbol.toStringTag,{value:"Module"}));export{a as D,p as T,B as a};
