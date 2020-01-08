// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomItemsControl} from "@web-atoms/core/dist/web/controls/AtomItemsControl";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import InsuranceViewModel from "./InsuranceViewModel";
    import Applicant from "./Applicant";


export default class Insurance extends AtomControl {
	constructor(app: any, e?: any) {

	public create(): void {

		this.render(
		<div>
			<div>
				<input
					placeholder="Name"
					value={Bind.twoWays((x) => x.viewModel.model.broker)}>
				<span
					style="color: red"
					text={Bind.oneWay((x) => x.viewModel.errorBroker)}>
			<AtomItemsControl
				items={Bind.oneTime((x) => x.viewModel.model.applicants)}>
				<AtomItemsControl.itemTemplate>
					<Applicant>
			<button
				eventClick={Bind.event((x) => (x.viewModel).addApplicant())}>
				Add Applicant
			<div>

				        Other fields...
				    
			<button
				eventClick={Bind.event((x) => (x.viewModel).save())}>
				Save
		);