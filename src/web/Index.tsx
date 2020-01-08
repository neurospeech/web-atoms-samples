// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomGridView} from "@web-atoms/core/dist/web/controls/AtomGridView";

    import IndexStyle from "./styles/IndexStyle";
    import IndiaFlag32DataUrl from "../images/IndiaFlagIcon32DataUrl";
    import FormDemo from "../samples/web/form/FromDemo";



export default class Index extends AtomGridView {
	public create(): void {

		this.render(
		<div
			styleClass={Bind.oneTime(() => this.controlStyle.root)}
			rows="70,*,30">
			<header>
				<h3
					text={Bind.oneTime(() => '<W/> Web Atoms')}>
				<div>
					MVVM JavaScript Framework for Desktop/Mobile
				<section
					style="margin: auto; margin-right:10px; position: absolute; left:0; top:0; bottom: 0; right:0; width: 300px; height: 50px; text-align: center">
					<a
						href="/samples.html"
						target="samples">
						<button>
							Samples
					<a
						href="/docs"
						target="docs">
						<button>
							API
					<a
						href="https://github.com/neurospeech/web-atoms-core"
						target="source">
						<button>
							Source Code
			<section
				row="1"
				style="position: absolute; left: 0; top: 0; right: 0; bottom:0; overflow: auto">
				<ul>
					<li>
						Advanced MVVM Framework for JavaScript
					<li>
						Support for Browser as well as Xamarin.Forms
					<li>
						Simple Dependency Injection with Runtime Dependency Injection
					<li>
						Inbuilt Styling Support (no need for less/sass)
					<li>
						Programmable Styles
					<li>
						Simple Unit testing
					<li>
						Simple REST Interface inspired from RetroFit
				<div
					style="margin-left: 5%; width: 90%; height: 640px; position: relative;">
					<FormDemo>
			<footer
				row="2">

				        © NeuroSpeech Technologies Pvt Ltd, 
				<img
					class="flag"
					src={Bind.oneTime(() => IndiaFlag32DataUrl)}>
				Made in India
				    
		);