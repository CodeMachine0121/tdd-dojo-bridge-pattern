import {IDevice} from "../interfaces/IDevice";

export class TV implements IDevice {
	public isOn: boolean;
	public volume: number = 0;
}