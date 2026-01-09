import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

type StatCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
};

// Simpler, non-animated counter to avoid runtime MotionValue rendering issues
export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = '',
  prefix = ''
}) => {
  const { ref } = useInViewAnimation<HTMLSpanElement>();

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

