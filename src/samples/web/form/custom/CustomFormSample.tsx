// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

        import AtomForm from "@web-atoms/web-controls/dist/form/AtomForm";
        import AtomField from "@web-atoms/web-controls/dist/form/AtomField";
        import SimpleFormViewModel from "../SimpleFormViewModel";
        import CustomForm from "./CustomForm";


export default class CustomFormSample extends AtomControl {
	constructor(app: any, e?: any) {

	public create(): void {

		this.render(
		<div>
			<CustomForm>
				<AtomField
					label="First name:"
					required="true"
					error={Bind.oneWay((x) => x.viewModel.errorFirstName)}>
					<input
						type="text"
						value={Bind.twoWays((x) => x.viewModel.model.firstName)}>
				<AtomField
					label="Last name:"
					required="true"
					error={Bind.oneWay((x) => x.viewModel.errorLastName)}>
					<input
						type="text"
						value={Bind.twoWays((x) => x.viewModel.model.lastName)}>
				<AtomField
					label="Email Address:"
					required="true"
					error={Bind.oneWay((x) => x.viewModel.errorEmailAddress)}
					helpText="We will send you email to verify your account.">
					<input
						style="width: 500px"
						type="text"
						value={Bind.twoWays((x) => x.viewModel.model.emailAddress)}>
				<AtomField
					fieldClass="small"
					label="Password:"
					required="true"
					error={Bind.oneWay((x) => x.viewModel.errorPassword)}>
					<input
						type="password"
						value={Bind.twoWays((x) => x.viewModel.model.password)}>
				<AtomField
					fieldClass="small"
					label="Password (Again):"
					required="true"
					error={Bind.oneWay((x) => x.viewModel.errorPasswordAgain)}>
					<input
						type="password"
						value={Bind.twoWays((x) => x.viewModel.model.passwordAgain)}>
			<button
				eventClick={Bind.event((x) => this.viewModel.signup())}>
				Signup
		);