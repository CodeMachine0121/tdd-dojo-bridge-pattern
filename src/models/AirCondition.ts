import {IDevice} from "../interfaces/IDevice";

export class AirCondition implements IDevice {
	public isOn: boolean;
	public temperature: number = 0;
}