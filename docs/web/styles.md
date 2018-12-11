# Stylesheets in Code

To style the components, we can use `AtomStyle` and `AtomStyleSheet` classes. Since these are pure TypeScript classes, you can use any TypeScript expression to compose your style and also style gets updated when any bound property is updated.

`AtomControl` contains `style-class` property which can be set to any property of `AtomStyle` derived class.

```typescript
class ListStyle extends AtomStyle {

    public get root(): IStyleDeclaration {
        return {
            color: Colors.gray,
            backgroundColor: Colors.white,
            subclasses: {
                " > li": {
                    color: Colors.blue,
                    subclasses: {
                        " > button": {
                            color: Colors.green
                        }
                    }
                },
            }
        };
    }
}
```

### ItemList.ts

```html
<script>
    import ListStyle from "~src/web/styles/ListStyle";
</script>
<ul
    default-style="{ ListStyle }"
    style-class="{ this.controlStyle.root }">
    <li>First Item</li>
    <li>Second Item</li>
    <li>
        Third Item
        <button>Delete</button>
    </li>
</ul>
```

In order to avoid naming conflicts in CSS, `ListStyle` class is instantiated once and `root` property style is given a css name that is unique. When we assign `default-style` it creates an instance of `StyleSheet` if it does not exist and attaches style to current component.

Please note, attaching `default-style` does not do anything, you must manually property of Style to  `style-class` of any element. Once assigned,all nested style rules will be applied as usual css.

## Override Style

When we want to reuse a component and we want to style it differently we can override an existing style.

> Please note, you can only override style when you reuse them, but you cannot change classes, you can only override style class.

### ItemListEditor.ts
```html
<script>
    import EditorListStyle from "~src/web/styles/EditorListStyle";
</script>
<div>
    <ItemList default-style="{ EditorListStyle }"></ItemList>
</div>
```

```typescript
class EditorListStyle extends ListStyle {

    public get baseRoot(): IStyleDeclaration {
        // since you cannot access super.root, you 
        // can use a convenient method to access super.root.
        return this.getBaseProperty(ListStyle, "root")
    }

    public get root(): IStyleDeclaration {
        return {
            ... this.baseRoot,
            color: Colors.cyan,

            // if you do not provide subclasses here,
            // all subclasses will be inherited automatically
            subclasses: {
                // if you want to override subclasses as well
                ... this.baseRoot.subclasses,
                " > *" : {
                    paddingLeft: "20px"
                }
            }
        }
    }
}
```

### Mobile Styles

You can detect presence of mobile and compute style accordingly.

```typescript
class ListStyle extends AtomStyle {

    public screen = (this.styleSheet as AtomTheme).app.screen;

    public get root(): IStyleDeclaration {
        return {
            width: this.screen.screenType === "mobile" ? "250px" : "900px"
        };
    }
}
```