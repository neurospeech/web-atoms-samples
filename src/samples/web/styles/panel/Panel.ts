// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import AppPanelStyle from "./AppPanelStyle";
	
	
	export default class Panel extends AtomControl {
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.defaultControlStyle =  AppPanelStyle ;
			
			this.setPrimitiveValue(this.element, "style", "padding:10px" );
			
			const e1 = document.createElement("div");
			
			this.append(e1);
			
			this.bind(e1, "styleClass",  [["this","controlStyle","root"]], false , null , __creator);
			
			const e2 = document.createElement("header");
			
			e1.appendChild(e2);
			
			const e3 = document.createTextNode("Header");
			e2.appendChild(e3);
			
			const e4 = document.createElement("section");
			
			e1.appendChild(e4);
			
			const e5 = document.createTextNode("Panel Text");
			e4.appendChild(e5);
		}
	}