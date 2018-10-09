// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomToggleButtonBar} from "web-atoms-core/dist/web/controls/AtomToggleButtonBar";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import AtomToggleButtonBarSampleViewModel from "../../../../view-models/basic-controls/AtomToggleButtonBarSampleViewModel";
    import ToggleBarSampleStyle from "../../../styles/ToggleBarSampleStyle";

export default  class AtomToggleButtonBarSample extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
                this.viewModel =  this.resolve(AtomToggleButtonBarSampleViewModel) ;

        this.setPrimitiveValue(this.element, "style", "padding: 10px;" );
        
                    
        const e1 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e1);

            const e2 = new AtomToggleButtonBar(this.app);
            
            
        const e3 = document.createTextNode("\r\n    ");
        
        e2.element.appendChild(e3);
            
                e2.controlStyle =  ToggleBarSampleStyle ;

        e2.setPrimitiveValue(e2.element, "labelPath", "label" );
        

        e2.setPrimitiveValue(e2.element, "valuePath", "value" );
        

            e2.runAfterInit( () =>
            e2.setLocalValue(e2.element, "items", (this.viewModel.genderList)) );

            e2.bind(e2.element, "value",  [["viewModel","gender"]], ["change", "keyup", "keydown", "blur"]  );

        e2.setPrimitiveValue(e2.element, "style", "height:33px;" );
        
            this.append(e2);


        const e4 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e4);

        const e5 = document.createElement("div");
        
        this.append(e5);
        
        this.setPrimitiveValue(e5, "style", "font-size: 15px;\r\n                 margin-top: 20px;\r\n                 font-weight: 600" );
        

            this.bind(e5, "text",  [["viewModel","gender"]], false , (v1) => 'Selected Movie: ' + (v1) );
        
        const e6 = document.createTextNode("\r\n    ");
        
        e5.appendChild(e6);

        const e7 = document.createTextNode("\r\n");
        
        this.element.appendChild(e7);
                }
            }

            

            