import React, { useMemo } from 'react';
import { Image } from 'react-native';
import convertMinutesToHour from '../../utils/convertMinutesToHour';

import { Container, DefaultText } from './styles';

import arrowRightIcon from '../../assets/images/icons/seta.png';

interface ScheduleItemProps {
  daySchedule: {
    available?: boolean;
    week_day: number;
    from: number;
    to: number;
    class_id?: number;
  };
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ daySchedule }) => {
  const weekDayName = useMemo(() => {
    switch (daySchedule.week_day) {
      case 1:
        return 'Segunda';
      case 2:
        return 'Terça';
      case 3:
        return 'Quarta';
      case 4:
        return 'Quinta';
      case 5:
        return 'Sexta';
      default:
        break;
    }
  }, [daySchedule.week_day]);

  const convertedScheduleTime = useMemo(() => {
    const convertedFrom = convertMinutesToHour(daySchedule.from);
    const convertedTo = convertMinutesToHour(daySchedule.to);

    return convertedFrom + ' - ' + convertedTo;
  }, [daySchedule.from, daySchedule.to]);

  return (
    <Container>
      <DefaultText>{weekDayName}</DefaultText>

      <Image source={arrowRightIcon} />

      <DefaultText>{convertedScheduleTime}</DefaultText>
    </Container>
  );
};

export default ScheduleItem;
