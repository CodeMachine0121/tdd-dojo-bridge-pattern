import {IDevice} from "../interfaces/IDevice";

export class Remoter {
	private device: IDevice;

	constructor(device: IDevice) {
		this.device = device;
	}

	public toggle() {
		this.device.isOn = true
	}
}