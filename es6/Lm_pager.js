import $ from './jquery-vendor';
import Lm_tbcr from './Lm_tbcr';

class Lm_pager{

	get opts(){
		return {
			targetTypeName:'lmType',
		}
	};
	constructor(options){
		//覆盖默认参数
		Object.assign(this.opts,options);
		this.WidgetContainer = {};
		//获取目标标签元素
		let targets = this.getTargets();
		$(targets).each((index,targetEl)=>{
			const targetName = $(targetEl).attr(this.opts.targetTypeName);
			const attrObjs = {};
			for(let [k,v] of Object.entries(targetEl.attributes)){
				attrObjs[v.name] = v.value;
			}
			if(targetName == 'lmTb'){
				attrObjs.childAttrObjs = [];
				$(targetEl.children).each(function(childIndex,childEl){
					let childAttrObj = {};
					for(let [k,v] of Object.entries(childEl.attributes)){
						childAttrObj[v.name] = v.value;
					}
					attrObjs.childAttrObjs.push(childAttrObj);
				});
				//创建lmTb
				let tbcr = new Lm_tbcr(attrObjs);	
				this.WidgetContainer[attrObjs.id] = tbcr;	
			}
		})
		return this;
	}
	getTargets(){
		let typeName = this.opts.targetTypeName;
		return $('['+typeName+']');
	}
	getWidget(name){
		return this.WidgetContainer[name];
	}
}
export default Lm_pager;