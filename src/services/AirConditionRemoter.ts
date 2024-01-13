import {Remoter} from "./Remoter";
import {AirCondition} from "../models/AirCondition";

export class AirConditionRemoter extends Remoter {
	private airCondition: AirCondition;

	constructor(device: AirCondition) {
		super(device);
		this.airCondition = device;
	}

	public modifyTemperature(temperature: number) {

		this.airCondition.temperature += temperature;

	}
}