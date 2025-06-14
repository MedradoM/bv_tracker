import { PropsWithChildren } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

type TSectionContent = PropsWithChildren<{
  className?: ClassNameValue;
  title?: string;
  titleClassName?: ClassNameValue;
}>;

const SectionContent = ({
  children,
  className,
  title,
  titleClassName,
}: TSectionContent) => {
  return (
    <div className={twMerge("px-[2vw] h-full flex flex-col gap-16", className)}>
      {title && (
        <h2
          className={twMerge(
            "text-4xl lg:text-5xl font-bold mb-6",
            titleClassName
          )}
        >
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

export default SectionContent;
