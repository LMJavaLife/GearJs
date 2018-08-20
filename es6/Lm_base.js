class Lm_base{
	constructor(options){
		//公用入参转化（适用于所有构件）
		let style = createStyle(options.attr);
		options.attr.style = style;

		this.opts = {
			attrStr:'',
			attr:{},
			children:'',
		}
		Object.assign(this.opts,options);
		this.refreshAttrStr();
		this.dom = `<div ${this.opts.attrStr} >${this.opts.children}</div>`;
		this.domStr = '<div ${this.opts.attrStr} >${this.opts.children}</div>';

		function createStyle(attr){
			let style = '';
			if(attr&&attr.x){
				style += `width:${attr.x}`;
			}
			return style;
		}
	}
	/**
	 * 往里塞
	 * @param  {object} child 往里塞的对象
	 * @return {[type]} this  [调用对象（可以接着调用）]
	 */
	append(child){
		this.opts.children += child.dom;
		this.refreshDom();
		return this;
	}
	attr(p1,p2){
		if(arguments.length>1){
			this.opts.attr[arguments[0]]=arguments[1];
		}else if(arguments.length==1){
			if(typeof(arguments[0])=='object'){
				this.opts.attr = arguments[0];
			}else{
				return this.opts.attr[arguments[0]];
			}
		}
		this.refreshAttrStr();
		this.refreshDom();
		return this;
	}
	refreshDom(){
		this.dom = eval('`'+this.domStr+'`');
	}
	refreshAttrStr(){
		const showAttrs = ['class','style'];
		for(let [k,v] of Object.entries(this.opts.attr)){
			if(showAttrs.includes(k)){
				this.opts.attrStr += `${k} = ${v} `;
			}
		} 
	}
	// get opts(){
	// 	return {
	// 		attrStr:'',
	// 		attr:{},
	// 		children:'',
	// 	};
	// }
	// get dom(){
	// 	return this.dom;
	// }
	// set dom(value){
	// 	this.dom = value;
	// }
}
export default Lm_base;