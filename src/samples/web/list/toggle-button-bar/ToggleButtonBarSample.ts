// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomToggleButtonBar} from "web-atoms-core/dist/web/controls/AtomToggleButtonBar";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import ViewModel from "./ViewModel";
	    import ToggleBarSampleStyle from "./ToggleBarSampleStyle";
	
	
	export default class ToggleButtonBarSample extends AtomControl {
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.viewModel =  this.resolve(ViewModel) ;
			
			this.setPrimitiveValue(this.element, "style", "padding: 10px;" );
			
			const e1 = new AtomToggleButtonBar(this.app);
			
			e1.controlStyle =  ToggleBarSampleStyle ;
			
			e1.setPrimitiveValue(e1.element, "labelPath", "label" );
			
			e1.setPrimitiveValue(e1.element, "valuePath", "value" );
			
			e1.runAfterInit( () => e1.setLocalValue(e1.element, "items", ((e1.viewModel) ? e1.viewModel.genderList : undefined)) );
			
			e1.bind(e1.element, "value",  [["viewModel","gender"]], ["change", "keyup", "keydown", "blur"]  );
			
			e1.setPrimitiveValue(e1.element, "style", "height:33px;" );
			
			this.append(e1);
			
			const e2 = document.createElement("div");
			
			this.append(e2);
			
			this.setPrimitiveValue(e2, "style", "font-size: 15px;\n                 margin-top: 20px;\n                 font-weight: 600" );
			
			this.bind(e2, "text",  [["viewModel","gender"]], false , (v1) => 'Selected Movie: ' + (v1) );
		}
	}