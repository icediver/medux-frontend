'use client';

import Widget, { WidgetSizeEnum } from '../widget/Widget';
import Needle from './Needle';
import Speedometer from './Speedometer';

interface IBloodTestSpeedometer {}
export default function BloodTestSpeedometer({}: IBloodTestSpeedometer) {
	return (
		<Widget className="" title="Blood test speed" size={WidgetSizeEnum['1x2']}>
			<div className="relative flex h-full w-full items-center justify-center">
				<Speedometer value={18} />
			</div>
		</Widget>
	);
}
