import $ from './jquery-vendor';
import Lm_tbcr from './grid/Lm_tbcr';
import Lm_ckcode from './checkcode/Lm_ckcode';


class Lm_pager{

	get opts(){
		return {
			TARGETTYPENAME:'lmType',
			TARGETTYPEVALUES:{
				GIRD:'lmTb',
				CKCODE:'lmckcode'
			},
		}
	};
	constructor(options){
		//覆盖默认参数
		Object.assign(this.opts,options);
		this.WidgetContainer = {};
		//获取目标标签元素
		let targets = this.getTargets();
		$(targets).each((index,targetEl)=>{
			const targetName = $(targetEl).attr(this.opts.TARGETTYPENAME);
			//组装标签属性
			const attrObjs = {};
			for(let [k,v] of Object.entries(targetEl.attributes)){
				attrObjs[v.name] = v.value;
			}
			//组装子标签属性
			attrObjs.childAttrObjs = [];
			$(targetEl.children).each(function(childIndex,childEl){
				let childAttrObj = {};
				for(let [k,v] of Object.entries(childEl.attributes)){
					childAttrObj[v.name] = v.value;
				}
				attrObjs.childAttrObjs.push(childAttrObj);
			});
			if(targetName == this.opts.TARGETTYPEVALUES.GIRD){
				//创建lmTb
				let tbcr = new Lm_tbcr(attrObjs);	
				this.WidgetContainer[attrObjs.id] = tbcr;	
			}
			if(targetName == this.opts.TARGETTYPEVALUES.CKCODE){
				//创建lmTb
				let ckcode = new Lm_ckcode(attrObjs);	
				this.WidgetContainer[attrObjs.id] = ckcode;	
			}
		})
		return this;
	}
	getTargets(){
		let typeName = this.opts.TARGETTYPENAME;
		return $('['+typeName+']');
	}
	getWidget(name){
		return this.WidgetContainer[name];
	}
}
export default Lm_pager;