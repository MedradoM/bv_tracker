import { LucideIcon } from "lucide-react";
import Counter from "./counter";

type TCWTAI = {
  icon: LucideIcon;
  text: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

const CounterWithTextAndIcon = ({
  icon: Icon,
  text,
  value,
  prefix,
  suffix,
}: TCWTAI) => {
  return (
    <div className="flex items-center gap-4">
      <Icon className="size-10 stroke-primary"></Icon>

      <div className="flex flex-col items-center">
        <Counter
          value={value}
          startValue={0}
          suffix={suffix}
          prefix={prefix}
          duration={300}
          className="text-5xl text-primary font-bold"
        />
        <p className="text-sm text-slate-900">{text}</p>
      </div>
    </div>
  );
};

export default CounterWithTextAndIcon;
