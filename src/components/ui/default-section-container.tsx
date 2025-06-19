import { PropsWithChildren } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

type TDefaultSectionContainer = PropsWithChildren<{
  className?: ClassNameValue;
  containerClassName?: ClassNameValue;
  id?: string;
}>;

const DefaultSectionContainer = ({
  className,
  containerClassName,
  id,
  children,
}: TDefaultSectionContainer) => {
  return (
    <section
      className={twMerge(
        "w-full py-32 my-32 z-10 flex justify-center",
        className
      )}
      id={id}
    >
      <div
        className={twMerge(
          "h-full w-full flex flex-col px-[2vw] container gap-16 ",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default DefaultSectionContainer;
