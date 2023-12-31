import { IUser } from '@/types/user.interface';
import Widget from '../widget/Widget';
import { IAppointment } from '@/types/appointment.interface';
import Appointment from '@/components/ui/appointment/Appointment';
import { useQuery } from '@tanstack/react-query';
import { AppointmentService } from '@/services/appointment.service';

interface INextPatientWidget {}
export default function NextPatientWidget({}: INextPatientWidget) {
	const { data, isLoading } = useQuery({
		queryKey: ['get next appointment'],
		queryFn: () => AppointmentService.getNext(),
		select: ({ data }) => data,
	});
	return (
		<Widget title="Next patient" prevNextHandler={() => {}}>
			{isLoading && <div>Loading...</div>}
			{!!data && <Appointment appointment={data} />}
		</Widget>
	);
}
