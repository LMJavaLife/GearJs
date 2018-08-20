import $ from './jquery-vendor';
import Lm_td from './Lm_td';
import Lm_tr from './Lm_tr';
import Lm_tb from './Lm_tb';
import Lm_thead from './Lm_thead';
import Lm_th from './Lm_th';


class Lm_tbcr{
	constructor(options){
		this.opts = {
		}
		Object.assign(this.opts,options);
		let data = this.getData();
		this.createTb(data);
	}
	createThead(){
		const lmthead = new Lm_thead({attr:{class:'lmthead'}});
		const childAttrObjs = this.opts.childAttrObjs;
		const lmtr = new Lm_tr({attr:{class:'lmtr'}});
		$(childAttrObjs).each(function(colindex,col){
			let thOpts = {attr:{class:'lmth'}};
			Object.assign(thOpts.attr,col);
			const lmth = new Lm_th(thOpts);
			lmtr.append(lmth);
		});
		lmthead.append(lmtr);
		return lmthead;
	}
	createTbody(data){
		if(!data||!data.trs){
			return null;
		}
		const lmtbody = new Lm_tb({attr:{class:'lmtbody'}});
		const childAttrObjs = this.opts.childAttrObjs;
		$(data.trs).each(function(trIndex,tr){
			const lmtr = new Lm_tr({attr:{class:'lmtr'}});
			let tds = tr.tds;
			$(childAttrObjs).each(function(colindex,col){
				let tdOpts = {attr:{class:'lmtd'}};
				Object.assign(tdOpts.attr,col);
				let realvalue = ''
				if(tds[col.name]){
					realvalue = tds[col.name];
				}else{
					realvalue = col.defval||'';
				}
				tdOpts.children = realvalue;
				const lmtd = new Lm_td(tdOpts);
				lmtr.append(lmtd);
			});
			lmtbody.append(lmtr);
		});
		return lmtbody;
	}
	draw(){
		$('#'+this.opts.id).empty();
		$('#'+this.opts.id).append(this.dom);
	}
	createTb(data){
		let tbOpts = {attr:{class:'lmtb'}}
		Object.assign(tbOpts.attr,this.opts);
		debugger;
		const lmtb = new Lm_tb(tbOpts);
		let lmthead = this.createThead();
		let lmtbody = this.createTbody(data);
		if(lmthead!=null){
			lmtb.append(lmthead);
		}
		if(lmtbody!=null){
			lmtb.append(lmtbody);
		}
		this.dom = lmtb.dom;
		this.draw();
	}
	//获取数据
	getData(){
		return this.data;
	}
	setData(data){
		this.data = data;
		this.createTb(data);
	}
}
export default Lm_tbcr;