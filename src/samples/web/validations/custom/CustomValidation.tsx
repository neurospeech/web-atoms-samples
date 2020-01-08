// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomItemsControl} from "@web-atoms/core/dist/web/controls/AtomItemsControl";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import CustomValidationViewModel from "./CustomValidationViewModel";


export default class CustomValidation extends AtomControl {
	constructor(app: any, e?: any) {

	public create(): void {

		this.render(
		<div>
			<div>
				<input
					placeholder="Name"
					value={Bind.twoWays((x) => x.viewModel.model.name)}>
				<span
					style="color: red"
					text={Bind.oneWay((x) => x.viewModel.errorName)}>
			<AtomItemsControl
				items={Bind.oneTime((x) => x.viewModel.model.emails)}>
				<AtomItemsControl.itemTemplate>
					<div>
						<input
							placeholder="Email"
							value={Bind.twoWays((x) => x.data.email)}>
						<span
							style="color: red"
							text={Bind.oneWay((x) => x.data.error)}>
			<button
				eventClick={Bind.event((x) => (x.viewModel).addEmail())}>
				Add Email
			<div>

				        Other fields...
				    
			<button
				eventClick={Bind.event((x) => (x.viewModel).signup())}>
				Signup
		);