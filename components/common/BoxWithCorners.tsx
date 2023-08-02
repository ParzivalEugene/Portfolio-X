import { cva, type VariantProps } from "class-variance-authority";

const boxWithCorners = cva("relative", {
  variants: {
    intent: {
      withBorder: "border border-secondary-500 box-border",
    },
  },
});

interface BoxWithCornersProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxWithCorners> {}

export const BoxWithCorners: React.FC<BoxWithCornersProps> = ({
  className,
  intent,
  children,
  ...props
}) => {
  return (
    <div className={boxWithCorners({ className, intent })}>
      <div className="absolute -left-[1px] -top-[1px] h-4 w-4 border-l border-t border-primary-500" />
      <div className="absolute -bottom-[1px] -left-[1px] h-4 w-4 border-b border-l border-primary-500" />
      <div className="absolute -right-[1px] -top-[1px] h-4 w-4 border-r border-t border-primary-500" />
      <div className="absolute -bottom-[1px] -right-[1px] h-4 w-4 border-b border-r border-primary-500" />
      {children}
    </div>
  );
};
