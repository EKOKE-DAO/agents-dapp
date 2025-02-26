interface Props {
  progress: number;
  max: number;
  percentage?: boolean;
  bgColor?: string;
  textColor?: string;
  className?: string;
  hideLabel?: boolean;
}

const ProgressBar = (props: Props) => {
  const percentage = Math.ceil((props.progress * 100) / props.max);
  let label = `${props.progress}/${props.max}`;
  if (props.percentage) {
    label = `${percentage.toString()}%`;
  }

  if (props.hideLabel) {
    label = '';
  }

  const bgColor = props.bgColor || 'bg-brand';
  const textColor = props.textColor || 'text-gray-300';

  const className = `${
    props.progress > 0 ? bgColor : ''
  } ${props.className} absolute inset-0 bg-gradient-to-r from-brandRed to-brandRed ${textColor} text-center`;

  const fillerStyles = {
    width: `${percentage}%`,
  };

  return (
    <div className="w-full relative overflow-hidden h-[24px] bg-gray-200 rounded-lg">
      <div className={className} style={fillerStyles}>
        {label}
      </div>
      <div
        className="absolute inset-0 bg-stripes opacity-20"
        style={fillerStyles}
      />
    </div>
  );
};

export default ProgressBar;
