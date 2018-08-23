class Lm_base{

	constructor(options){
		//默认参数
		this.opts = {
			attrStr:'',
			attr:{
				style:'',
			},
			showAttrs:[
				'class',
				'style',
			],
			children:'',
			domStr:'<div ${this.opts.attrStr} >${this.opts.children}</div>'
		}
		//公用入参初始化
		this.initOpts(options);
		this.reloadDom();


		
	}
	initOpts(options){
		$.extend(true,this.opts,options);
		if(!this.opts){
			return;
		}
		if(this.opts.attr){
			//宽度处理
			if(this.opts.attr.x){
				debugger;
				console.log(this.opts.attr);
				if(this.opts.attr.style){
					this.opts.attr.style += `width:${this.opts.attr.x}`;
				}
			}
			//封装页面中的属性
			for(let [k,v] of Object.entries(this.opts.attr)){
				if(this.opts.showAttrs.includes(k)){
					this.opts.attrStr += `${k} = '${v}' `;
				}
			} 
		}
	}
	/**
	 * 往里塞
	 * @param  {object} child 往里塞的对象
	 * @return {[type]} this  [调用对象（可以接着调用）]
	 */
	append(child){
		this.opts.children += child.dom;
		this.reloadDom();
		return this;
	}
	// attr(p1,p2){
	// 	if(arguments.length>1){
	// 		this.opts.attr[arguments[0]]=arguments[1];
	// 	}else if(arguments.length==1){
	// 		if(typeof(arguments[0])=='object'){
	// 			this.opts.attr = arguments[0];
	// 		}else{
	// 			return this.opts.attr[arguments[0]];
	// 		}
	// 	}
	// 	this.reloadOpts();
	// 	this.reloadDom();
	// 	return this;
	// }
	reloadDom(){
		this.dom = eval('`'+this.opts.domStr+'`');
	}
	reloadOpts(){
		this.opts.attrStr = '';
		for(let [k,v] of Object.entries(this.opts.attr)){
			if(this.opts.showAttrs.includes(k)){
				this.opts.attrStr += `${k} = '${v}' `;
			}
		} 
	}
	draw(){
		$('#'+this.opts.id).empty();
		$('#'+this.opts.id).append(this.dom);
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