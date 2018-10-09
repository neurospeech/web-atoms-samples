// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomGridView} from "web-atoms-core/dist/web/controls/AtomGridView";
export default  class AtomGridViewSample extends AtomGridView {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    
                    
                    
        this.setPrimitiveValue(this.element, "columns", "200, *" );
        

        this.setPrimitiveValue(this.element, "rows", "50, 50, *, 50, 50" );
        

        this.setPrimitiveValue(this.element, "style", "width: 800px; height: 800px; margin: 10px;" );
        
                    
        const e1 = document.createTextNode("   \r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("div");
        
        this.append(e2);
        
        this.setPrimitiveValue(e2, "row", "0" );
        

        this.setPrimitiveValue(e2, "column", "0:2" );
        

        this.setPrimitiveValue(e2, "style", "background-color: lightgreen;\r\n                height: 100%;" );
        
        
        const e3 = document.createTextNode("\r\n        Header\r\n    ");
        
        e2.appendChild(e3);

        const e4 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e4);

        const e5 = document.createElement("div");
        
        this.append(e5);
        
        this.setPrimitiveValue(e5, "row", "1:3" );
        

        this.setPrimitiveValue(e5, "column", "0" );
        

        this.setPrimitiveValue(e5, "style", "background-color: lightgrey;\r\n        height: 100%;" );
        
        
        const e6 = document.createTextNode("\r\n        TreeView\r\n    ");
        
        e5.appendChild(e6);

        const e7 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e7);

        const e8 = document.createElement("div");
        
        this.append(e8);
        
        this.setPrimitiveValue(e8, "row", "1" );
        

        this.setPrimitiveValue(e8, "column", "1" );
        

        this.setPrimitiveValue(e8, "style", "background-color: lightblue;\r\n        height: 100%;" );
        
        
        const e9 = document.createTextNode("\r\n        Nested DockPanel Header\r\n    ");
        
        e8.appendChild(e9);

        const e10 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e10);

        const e11 = document.createElement("div");
        
        this.append(e11);
        
        this.setPrimitiveValue(e11, "row", "2" );
        

        this.setPrimitiveValue(e11, "column", "1" );
        

        this.setPrimitiveValue(e11, "style", "background-color: white;\r\n        height: 100%;" );
        
        
        const e12 = document.createTextNode("\r\n        Nested Fill Element\r\n    ");
        
        e11.appendChild(e12);

        const e13 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e13);

        const e14 = document.createElement("div");
        
        this.append(e14);
        
        this.setPrimitiveValue(e14, "row", "3" );
        

        this.setPrimitiveValue(e14, "column", "1" );
        

        this.setPrimitiveValue(e14, "style", "background-color: lightseagreen;\r\n        height: 100%;" );
        
        
        const e15 = document.createTextNode("\r\n        Nested DockPanel Footer\r\n    ");
        
        e14.appendChild(e15);

        const e16 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e16);

        const e17 = document.createElement("div");
        
        this.append(e17);
        
        this.setPrimitiveValue(e17, "row", "4" );
        

        this.setPrimitiveValue(e17, "column", "0:2" );
        

        this.setPrimitiveValue(e17, "style", "background-color: lightslategray;\r\n        height: 100%;" );
        
        
        const e18 = document.createTextNode("\r\n        Footer\r\n    ");
        
        e17.appendChild(e18);

        const e19 = document.createTextNode("\r\n    \r\n");
        
        this.element.appendChild(e19);
                }
            }

            

            