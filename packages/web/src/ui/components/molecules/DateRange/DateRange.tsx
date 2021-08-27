import React from 'react';
import { format } from 'date-fns';
import * as styled from './DateRange.styles';

export const DateRange: React.FC<DateRangeProps> = ({
    startDate,
    endDate,
    monthTemplate = 'MMM dd',
    yearTemplate = 'yyyy',
    icon,
}) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const year = new Date(endDate);

    return (
        <styled.DateRange>
            {icon && icon}
            <span>
                {format(start, monthTemplate)} - {format(end, monthTemplate)},{' '}
                {format(year, yearTemplate)}
            </span>
        </styled.DateRange>
    );
};

interface DateRangeProps {
    startDate: string;
    endDate: string;
    monthTemplate?: string;
    yearTemplate?: string;
    icon?: JSX.Element;
}
