import Lm_base from '../Lm_base';
class Lm_ckcode_btn extends Lm_base{
	constructor(options){
		let opts = {
			attr:{
				class:'ckcode_btn',
				value:'获取验证码',
			},
			delay:'60',
			showAttrs:['value'],
			domStr:'<input type="button" ${this.opts.attrStr} >${this.opts.children}</input>'
		}
		$.extend(true,opts,options);
		super(opts);
		let btnObj = this;
		//点击事件
		$('body').on('click',$(this.dom),function(event){
			//按钮倒计时
			let delay = btnObj.opts.delay;
			let target = event.target;
			let oldValue = $(target).val();
			let timer = setInterval(function(){
				if(delay<=0){
					$(target).attr('value', oldValue);
					$(target).attr("disabled",false);
					clearInterval(timer);
				}else{
					$(target).attr("disabled",true);
					$(target).attr('value',delay+'s后再次发送');
					delay--;
				}
			},1000);
			//用户自定义事件
			eval(btnObj.opts.click);
		});
	}
}
export default Lm_ckcode_btn;