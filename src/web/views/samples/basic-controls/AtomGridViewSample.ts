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
        
                    
            const e1 = document.createElement("div");
            
            this.append(e1);
            
        this.setPrimitiveValue(e1, "row", "0" );
        

        this.setPrimitiveValue(e1, "column", "0:2" );
        

        this.setPrimitiveValue(e1, "style", "background-color: lightgreen;\n                height: 100%;" );
        
            
        const e2 = document.createTextNode("\n        Header\n    ");
        
        e1.appendChild(e2);

            const e3 = document.createElement("div");
            
            this.append(e3);
            
        this.setPrimitiveValue(e3, "row", "1:3" );
        

        this.setPrimitiveValue(e3, "column", "0" );
        

        this.setPrimitiveValue(e3, "style", "background-color: lightgrey;\n        height: 100%;" );
        
            
        const e4 = document.createTextNode("\n        TreeView\n    ");
        
        e3.appendChild(e4);

            const e5 = document.createElement("div");
            
            this.append(e5);
            
        this.setPrimitiveValue(e5, "row", "1" );
        

        this.setPrimitiveValue(e5, "column", "1" );
        

        this.setPrimitiveValue(e5, "style", "background-color: lightblue;\n        height: 100%;" );
        
            
        const e6 = document.createTextNode("\n        Nested DockPanel Header\n    ");
        
        e5.appendChild(e6);

            const e7 = document.createElement("div");
            
            this.append(e7);
            
        this.setPrimitiveValue(e7, "row", "2" );
        

        this.setPrimitiveValue(e7, "column", "1" );
        

        this.setPrimitiveValue(e7, "style", "background-color: white;\n        height: 100%;" );
        
            
        const e8 = document.createTextNode("\n        Nested Fill Element\n    ");
        
        e7.appendChild(e8);

            const e9 = document.createElement("div");
            
            this.append(e9);
            
        this.setPrimitiveValue(e9, "row", "3" );
        

        this.setPrimitiveValue(e9, "column", "1" );
        

        this.setPrimitiveValue(e9, "style", "background-color: lightseagreen;\n        height: 100%;" );
        
            
        const e10 = document.createTextNode("\n        Nested DockPanel Footer\n    ");
        
        e9.appendChild(e10);

            const e11 = document.createElement("div");
            
            this.append(e11);
            
        this.setPrimitiveValue(e11, "row", "4" );
        

        this.setPrimitiveValue(e11, "column", "0:2" );
        

        this.setPrimitiveValue(e11, "style", "background-color: lightslategray;\n        height: 100%;" );
        
            
        const e12 = document.createTextNode("\n        Footer\n    ");
        
        e11.appendChild(e12);
                }
            }

            

            