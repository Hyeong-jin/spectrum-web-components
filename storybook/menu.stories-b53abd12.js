import{c as e,L as s}from"./lit-element-089a5717.js";import{q as n}from"./storybook-preview-9aba481c.js";import"./tslib.es6-d9c764b6.js";import"./if-defined-f9b5fa5b.js";import"./index-cf4249fd.js";import"./focusable-f94b9d2d.js";import"./iconset-svg-7745673b.js";import"./index-71d657ab.js";import"./observe-slot-text-5194cee4.js";import"./index-1ecf9978.js";import"./index-da10f6c3.js";var i=e`.header{display:block;margin:var(--spectrum-global-dimension-size-75) 0 0 0;padding:0 var(--spectrum-global-dimension-size-450) 0 var(--spectrum-global-dimension-size-150);font-size:var(--spectrum-global-dimension-font-size-50);font-weight:400;line-height:var(--spectrum-alias-line-height-medium,var(--spectrum-global-dimension-size-250));text-transform:uppercase;letter-spacing:.06em;color:var(--spectrum-heading-subtitle3-text-color,var(--spectrum-global-color-gray-700))}`;class t extends s{constructor(){super(),this.instanceCount=t.instances,t.instances+=1}static get styles(){return[i]}render(){var e=`menu-heading-category-${this.instanceCount}`;return n` <span class="header" id="${e}" aria-hidden="true"> <slot name="header"></slot> </span> <div aria-labelledby="${e}" role="group"> <slot></slot> </div> `}firstUpdated(){this.setAttribute("role","group")}}t.instances=0,customElements.define("sp-menu-group",t);var m=()=>n` <sp-menu> <sp-menu-item> Deselect </sp-menu-item> <sp-menu-item> Select Inverse </sp-menu-item> <sp-menu-item> Feather... </sp-menu-item> <sp-menu-item> Select and Mask... </sp-menu-item> <sp-menu-divider></sp-menu-divider> <sp-menu-item> Save Selection </sp-menu-item> <sp-menu-item disabled="disabled"> Make Work Path </sp-menu-item> </sp-menu> <sp-popover open> <sp-menu> <sp-menu-item> Deselect </sp-menu-item> <sp-menu-item> Select Inverse </sp-menu-item> <sp-menu-item> Feather... </sp-menu-item> <sp-menu-item> Select and Mask... </sp-menu-item> <sp-menu-divider></sp-menu-divider> <sp-menu-item> Save Selection </sp-menu-item> <sp-menu-item disabled="disabled"> Make Work Path </sp-menu-item> </sp-menu> </sp-popover> `,p=()=>n` <sp-icons-medium></sp-icons-medium> <sp-popover open> <sp-menu> <sp-menu-group> <span slot="header"> Section Heading </span> <sp-menu-item> Action 1 </sp-menu-item> <sp-menu-item> Action 2 </sp-menu-item> <sp-menu-item> Action 3 </sp-menu-item> </sp-menu-group> <sp-menu-divider></sp-menu-divider> <sp-menu-group> <span slot="header"> Section Heading </span> <sp-menu-item> <sp-icon name="ui:SuccessMedium" size="s" slot="icon"></sp-icon> Save </sp-menu-item> <sp-menu-item disabled="disabled"> <sp-icon name="ui:SuccessMedium" size="s" slot="icon"></sp-icon> Download </sp-menu-item> </sp-menu-group> </sp-menu> </sp-popover> `;p.story={name:"Headers and Icons"};var o=()=>n` <sp-popover open style="width: 200px;"> <sp-menu> <sp-menu-group> <span slot="header"> San Francisco </span> <sp-menu-item> Financial District </sp-menu-item> <sp-menu-item> South of Market </sp-menu-item> <sp-menu-item> North Beach </sp-menu-item> </sp-menu-group> <sp-menu-divider></sp-menu-divider> <sp-menu-group> <span slot="header"> Oakland </span> <sp-menu-item> City Center </sp-menu-item> <sp-menu-item disabled="disabled"> Jack London Square </sp-menu-item> <sp-menu-item selected="selected"> My best friend's mom's house in the burbs just off Silverado street </sp-menu-item> </sp-menu-group> </sp-menu> </sp-popover> `,u=["Default","headersAndIcons","Selected"];export default{component:"sp-menu",title:"Menu"};export{m as Default,o as Selected,u as __namedExportsOrder,p as headersAndIcons};
//# sourceMappingURL=menu.stories-b53abd12.js.map